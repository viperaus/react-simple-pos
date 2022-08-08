import { useState, useEffect, useRef } from 'react'
import ScreenLeft from '../../Components/ScreenLeft'
import ScreenRight from '../../Components/ScreenRight'
import { PrintReceipt } from '../../Helpers/Printing'
import ReceiptLineBuilder from '../../Helpers/ReceiptLine.class'
/*
 TODO
  * Use a library to handle passing functions from this top level down all levels until it reaches the buttons
  * Tidy up printing and make sure it doesnt disconnect from printer on route changes (will need to uplift or portalize this functionality)?
*/

const PosPage = () => {
  const [currentSaleItems, setCurrentSaleItems] = useState([])

  const receiptPrinter = useRef()
  let retryPrinterConnect
  let receipt_printing_retry_counter = 0
  let ePosReceipt

  const retryEpsonPrinterConnect = () => {
    console.log('Trying to connect to receipt printer')
    retryPrinterConnect = setTimeout(function () {
      ePosReceipt = new window.epson.ePOSDevice()
      ePosReceipt.connect('10.0.55.102', 8008, cbConnectReceipt)
    }, 7500)
  }

  const cbConnectReceipt = (data) => {
    if (data == 'OK') {
      clearTimeout(retryPrinterConnect)
      receipt_printing_retry_counter = 0
      ePosReceipt.createDevice('local_printer', ePosReceipt.DEVICE_TYPE_PRINTER, { crypto: true, buffer: false }, cbCreateReceiptDevice_printer)
    } else {
      console.warn(['Printer connection failed (1): ', data])
      receipt_printing_retry_counter++
      retryEpsonPrinterConnect()
    }
  }

  const cbCreateReceiptDevice_printer = (data, code) => {
    if (data == null) {
      console.error(['Printer connection failed (2): ', code])
      return
    }

    if (code == 'OK') {
      receiptPrinter.current = data
      receiptPrinter.current.startMonitor()

      // Set a response receipt callback function
      receiptPrinter.current.onreceive = function (res, data) {
        // Show message
        console.log(['Received message', res, data])
        if (res && res.success === false) {
          //print failed
          console.error('PRINT FAILED!!')
        }
        if (res && res.code == 'EPTR_REC_EMPTY') {
          alert('Printer is out of paper - you may need to reprint the receipt after loading paper')
        }
      }
      // Set a status change callback funciton
      receiptPrinter.current.onstatuschange = function (status) {
        console.log(['Printer Status Changed:', status])
      }
      receiptPrinter.current.ononline = function () {
        console.log(['Printer Online:', 'online'])
      }
      receiptPrinter.current.onoffline = function () {
        console.log(['Printer Offline:', 'offline'])
      }
      receiptPrinter.current.onpoweroff = function () {
        console.log(['Printer Power Off:', 'poweroff'])
      }
      receiptPrinter.current.oncoverok = function () {
        console.log(['Printer Cover OK:', 'coverok'])
      }
      receiptPrinter.current.oncoveropen = function () {
        console.log(['Printer Cover Open:', 'coveropen'])
      }
      receiptPrinter.current.onpaperok = function () {
        console.log(['Printer Paper OK:', 'paperok'])
      }
      receiptPrinter.current.onpapernearend = function () {
        console.log(['Printer Paper Near End:', 'papernearend'])
      }
      receiptPrinter.current.onpaperend = function () {
        console.log(['Printer Paper At End:', 'paperend'])
      }
      receiptPrinter.current.ondrawerclosed = function () {
        console.log(['Printer Drawer Closed:', 'drawerclosed'])
      }
      receiptPrinter.current.ondraweropen = function () {
        console.log(['Printer Drawer Open:', 'draweropen'])
      }
      receiptPrinter.current.onbatterystatuschange = function () {
        console.log(['Printer Battery Status Changed:', 'onbatterystatuschange'])
      }
      receiptPrinter.current.onbatteryok = function () {
        console.log(['Printer Battery OK:', 'onbatteryok'])
      }
      receiptPrinter.current.onbatterylow = function () {
        console.log(['Printer Battery Low:', 'onbatterylow'])
      }
    } else {
      console.log(['Other printer issue:', code])
    }
  }

  const addItemIntoCurrentSale = (plu, description, price) => {
    let combinedItems = [...currentSaleItems, { plu, description, price }]
    setCurrentSaleItems(combinedItems)
    localStorage.setItem('current_sale', JSON.stringify(combinedItems))
  }

  const clearCurrentSale = () => {
    setCurrentSaleItems([])
    localStorage.setItem('current_sale', JSON.stringify([]))
  }

  const printReceipt = () => {
    if (receiptPrinter.current?.enabled) {
      let totalPrice = 0
      let receiptHeader = JSON.parse(localStorage.getItem('settings'))?.printing?.receipt?.header ?? []
      let receiptData = new ReceiptLineBuilder().setLinefeed(2).nextLine().setText(''.padEnd(24, '-')).setAlign('CENTER').nextLine()
      currentSaleItems.map((item) => {
        let priceLen = `${(item.price / 100).toFixed(2)}`.length + '$'.length
        let descLen = item.description.length
        let padding = 48 - descLen - priceLen
        totalPrice += item.price
        return receiptData.setText(`${item.description}${''.padEnd(padding, ' ')}$${(item.price / 100).toFixed(2)}`).nextLine()
      })

      receiptData
        .setText(`Total: $${(totalPrice / 100).toFixed(2)}`)
        .setAlign('RIGHT')
        .setBold(true)
        .nextLine()
        .setText(''.padEnd(24, '-'))
        .setAlign('CENTER')
        .nextLine()

      receiptData.setLinefeed(2).nextLine().setCut(true).setSend(true).finished()
      PrintReceipt(receiptPrinter.current, [...receiptHeader, ...receiptData.getData()])
    }
  }

  const saleFunctions = {
    sellItem: addItemIntoCurrentSale,
    clearSale: clearCurrentSale,
    printReceipt: printReceipt,
  }

  useEffect(() => {
    if (localStorage.getItem('current_sale') !== null) {
      let storedItems = [...JSON.parse(localStorage.getItem('current_sale'))]
      if (storedItems.length > 0) {
        setCurrentSaleItems(storedItems)
      }
    }

    //connect to printer
    setTimeout(function () {
      ePosReceipt = new window.epson.ePOSDevice()
      ePosReceipt.connect('10.0.55.102', 8008, cbConnectReceipt)
    }, 500)

    return () => {
      ePosReceipt = null
      receiptPrinter.current = null
    }
  }, [])

  return (
    <div className="w-screen">
      <div className="flex flex-row h-screen">
        <ScreenLeft currentSaleItems={currentSaleItems} />
        <ScreenRight functions={saleFunctions} />
      </div>
    </div>
  )
}

export default PosPage

import ReceiptLineBuilder from "../Helpers/ReceiptLine.class"

const receiptHeader = new ReceiptLineBuilder()
  .setText("Company Name Here").setAlign("CENTER").setBold(true).setSize(2).nextLine()
  .setText("123 Test St").setAlign("CENTER").nextLine()
  .setText("Sampletown, QLD, 4321").setAlign("CENTER").nextLine()
  .setText("Ph: 07 9876 5656").setAlign("CENTER").nextLine()
  .getData()

export const defaultSettings = {
  general: {
    rear_display: {
      enabled: false,
      connection: '',
    },
    country: 'Australia',
    refund_mode: 'SIMPLE',
    debug: 'ERROR',
  },
  printing: {
    receipt: {
      model: 'EPSON EPOS COMPATIBLE',
      ip: '10.0.55.102',
      enabled: false,
      header:receiptHeader
    },
    drawer: {
      enabled: false,
    },
    kitchen: [
      {
        id: 1,
        model: 'EPSON EPOS COMPATIBLE',
        ip: '192.168.0.101',
        enabled: false,
      },
    ],
  },
  eftpos: {},
  accounts: {},
  customers: {},
  loyalty: {},
}
const PrintingSettings = ({ settings, handleInputChange }) => {
  // printing: {
  //   receipt: {
  //     model: 'EPSON EPOS COMPATIBLE',
  //     ip: '192.168.0.100',
  //     enabled: false,
  //   },
  //   drawer: {
  //     enabled: false,
  //   },
  //   kitchen: [
  //     {
  //       id: 1,
  //       model: 'EPSON EPOS COMPATIBLE',
  //       ip: '192.168.0.101',
  //       enabled: false,
  //     },
  //   ],
  // },

  return (
    <>
      <div className="form-group mb-6">
        <label for="settings_printing_receipt_ip" className="form-label inline-block mb-2 pr-1">
          Printer IP:
        </label>
        <input
          type="text"
          name="settings_printing_receipt_ip"
          id="settings_printing_receipt_ip"
          onChange={(e) => {
            settings.printing.receipt.ip = e.target.value
            return handleInputChange()
          }}
        />
      </div>
    </>
  )
}

export default PrintingSettings

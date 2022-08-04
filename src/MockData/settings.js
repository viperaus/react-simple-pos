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
      ip: '192.168.0.100',
      enabled: false,
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
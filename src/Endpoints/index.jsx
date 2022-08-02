export const ROOT_URL = import.meta.env.DEV ? import.meta.env.VITE_APP_API_SERVER_DEV : import.meta.env.VITE_APP_API_SERVER_PROD
export const API_URL_TRANSACTION = `${ROOT_URL}/api/v3/transaction/`
export const API_URL_LOGIN = `${ROOT_URL}/api/mobilepos/login/`
export const API_URL_TOKEN = `${ROOT_URL}/api/v3/token/`

export const variables = {
  DB_USER: process.env.DB_USER || import.meta.env.VITE_DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD || import.meta.env.VITE_DB_PASSWORD,
  DB_HOST: process.env.DB_HOST || import.meta.env.VITE_DB_HOST,
  DB_NAME:process.env.DB_NAME || import.meta.env.VITE_DB_NAME
}
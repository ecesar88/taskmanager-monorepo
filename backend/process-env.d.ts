declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined
      ENV: "DEV" | "PROD"
      DATABASE_URL: string
    }
  }
}

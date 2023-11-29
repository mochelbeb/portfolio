export type Rect = { width: number; height: number };
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CONVERTKIT_API_KEY: string;
      NEXT_PUBLIC_CONVERTKIT_FORM_ID: string;
    }
  }
}

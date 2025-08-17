/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVER_API_URL: string;
  readonly VITE_KAKAO_JS_KEY: string;
  readonly VITE_KAKAO_REST_API_KEY: string;
  readonly VITE_KAKAO_REDIRECT_URI: string;  
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

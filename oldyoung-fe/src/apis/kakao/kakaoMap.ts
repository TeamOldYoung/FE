declare global {
  interface Window {
    kakao: any;
  }
}

export function loadKakaoMap(): Promise<typeof window.kakao> {
  return new Promise((resolve, reject) => {
    if (window.kakao && window.kakao.maps) {
      resolve(window.kakao);
      return;
    }

    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_JS_KEY}&libraries=services`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.kakao) {
        resolve(window.kakao);
      } else {
        reject("Kakao SDK load failed");
      }
    };

    script.onerror = reject;
  });
}

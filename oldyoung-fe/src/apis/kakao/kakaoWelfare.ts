import { loadKakaoMap } from "./kakaoMap";

export async function searchWelfarePlaces(lat: number, lng: number) {
  const kakao = await loadKakaoMap();
  const ps = new kakao.maps.services.Places();

  return new Promise((resolve, reject) => {
    ps.keywordSearch(
      "복지",
      (data: any[], status: string) => {
        if (status === kakao.maps.services.Status.OK) {
          resolve(data);
        } else {
          reject(status);
        }
      },
      {
        location: new kakao.maps.LatLng(lat, lng),
        radius: 5000, 
      }
    );
  });
}

import { useEffect, useState } from "react";
import CommonHeader from "../../components/header/CommonHeader";
import { loadKakaoMap } from "../../apis/kakao/kakaoMap";
import { searchWelfarePlaces } from "../../apis/kakao/kakaoWelfare";

interface WelfarePageProps {
  onBack: () => void;
}

const WelfarePage = ({ onBack }: WelfarePageProps) => {
  const [_places, setPlaces] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const kakao = await loadKakaoMap();

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;

          const mapContainer = document.getElementById("map");
          const mapOption = {
            center: new kakao.maps.LatLng(lat, lng),
            level: 5,
          };
          const map = new kakao.maps.Map(mapContainer, mapOption);

          new kakao.maps.Marker({
            map,
            position: new kakao.maps.LatLng(lat, lng),
          });

          const results = (await searchWelfarePlaces(lat, lng)) as any[];
          setPlaces(results);

          results.forEach((place) => {
            new kakao.maps.Marker({
              map,
              position: new kakao.maps.LatLng(place.y, place.x),
            });
          });
        });
      }
    })();
  }, []);

  return (
    <div className="w-full flex flex-col">
      <CommonHeader title="복지기관" onBack={onBack} />

      <div id="map" className="w-full h-[600px] mt-[3.25rem] px-[1.25rem]" />

      {/* <div className="px-5">
        <ul className="space-y-1">
          {places.map((p) => (
            <li key={p.id}>{p.place_name}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default WelfarePage;

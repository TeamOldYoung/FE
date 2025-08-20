import { useEffect, useState } from "react";
import CommonHeader from "../../components/header/CommonHeader";
import { loadKakaoMap } from "../../apis/kakao/kakaoMap";
import { searchWelfarePlaces } from "../../apis/kakao/kakaoWelfare";

interface WelfarePageProps {
  onBack: () => void;
}

const WelfarePage = ({ onBack }: WelfarePageProps) => {
  const [_places, setPlaces] = useState<any[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<any | null>(null);

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

          const myMarkerImage = new kakao.maps.MarkerImage(
            "/CurrentPin.svg",
            new kakao.maps.Size(32, 32),
            { offset: new kakao.maps.Point(16, 32) }
          );

          const myMarker = new kakao.maps.Marker({
            map,
            position: new kakao.maps.LatLng(lat, lng),
            image: myMarkerImage,
          });

          kakao.maps.event.addListener(myMarker, "click", () => {
            map.setLevel(3);
            map.panTo(new kakao.maps.LatLng(lat, lng));
          });

          const results = (await searchWelfarePlaces(lat, lng)) as any[];
          setPlaces(results);

          const placeMarkerImage = new kakao.maps.MarkerImage(
            "/Pin.svg",
            new kakao.maps.Size(32, 32),
            { offset: new kakao.maps.Point(16, 32) }
          );

          results.forEach((place) => {
            const marker = new kakao.maps.Marker({
              map,
              position: new kakao.maps.LatLng(place.y, place.x),
              image: placeMarkerImage,
            });

            kakao.maps.event.addListener(marker, "click", () => {
              map.setLevel(3);
              map.panTo(new kakao.maps.LatLng(place.y, place.x));
              setSelectedPlace(place); 
            });
          });
        });
      }
    })();
  }, []);

  return (
    <>
      <CommonHeader title="복지기관" onBack={onBack} />
      <div className="w-full flex flex-col px-[1.365rem]">
        <div id="map" className="w-full h-[43rem] mt-[2rem]" />
      </div>

      {selectedPlace && (
        <div className="absolute bottom-0 left-0 right-0 bg-[#06BA96] shadow-2xl rounded-t-2xl p-6 h-1/5 transition-transform duration-300 z-100">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-[1.75rem] font-bold text-white">{selectedPlace.place_name}</h2>
            <button onClick={() => setSelectedPlace(null)} className="text-[#2DC5B3] text-[1.25rem] px-3 py-2 bg-[#F3F3F3] rounded-lg leading-none">닫기</button>
          </div>
          <p className="text-[1.5rem] text-[#f3f3f3]">{selectedPlace.address_name}</p>
        </div>
      )}

    </>
  );
};

export default WelfarePage;

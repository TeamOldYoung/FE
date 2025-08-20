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

          const directionEl = document.createElement("div");
          directionEl.innerHTML = `
            <svg width="36" height="28" viewBox="0 0 24 24" fill="#FFA07A" 
                style="transform: rotate(0deg); position: relative; top: -28px;">
              <polygon points="12,2 19,18 12,14 5,18" 
                      fill="#FF3333" 
                      stroke="#FF3333" 
                      stroke-width="3" 
                      stroke-linejoin="round" />
            </svg>
          `;
          directionEl.style.width = "36px";
          directionEl.style.height = "30px";
          directionEl.style.transformOrigin = "18px 30px"; 

          const directionOverlay = new kakao.maps.CustomOverlay({
            position: new kakao.maps.LatLng(lat, lng),
            content: directionEl,
            yAnchor: 0.6,
            xAnchor: 0.5,
          });
          directionOverlay.setMap(map);

          if (window.DeviceOrientationEvent) {
            window.addEventListener("deviceorientation", (event) => {
              if (event.alpha !== null) {
                const rotation = event.alpha;
                directionEl.style.transform = `translateY(-14px) rotate(${rotation}deg)`; 
              }
            });
          }

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
        <div id="map" className="w-full h-[40rem] mt-[2rem]" />
      </div>
    </>
  );
};

export default WelfarePage;

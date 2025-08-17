import MyInfoCard from "./_components/MyInfoCard.tsx";
import MenuGrid from "./_components/MenuGrid.tsx";

const HomePage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute left-0 right-0 px-5 mb-5 z-20" style={{ bottom: "52%" }}>
        <MyInfoCard />
      </div>

      <div className="absolute bottom-0 w-full h-[58%] bg-[#BBEFE9] rounded-t-[1.25rem] pt-15 p-5 z-10">
        <MenuGrid />
      </div>
    </div>
  );
};

export default HomePage;

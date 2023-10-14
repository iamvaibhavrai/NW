import BackButton from "./BackButton";
import HomeButton from "./HomeButton";

const Sections = () => {
  return (
    <div className="h-screen w-full flex flex-row">
      <BackButton />
      <HomeButton />
      <a
        href="http://iwaicruisetourism.com/"
        target="_blank"
        rel="noreferrer"
        className="flex flex-1"
      >
        <img
          src="RIVER_CRUISE_TOURISM.jpeg"
          alt="splash screen"
          className="object-cover h-full w-full"
        />
        <div className="absolute left-0 bottom-0 h-screen w-1/3 text-white text-5xl font-bold leading-tight bg-gradient-to-b from-transparent from-50% to-black/80 items-end justify-start flex">
          <div className="mb-10 ml-10">
            RIVER
            <br />
            CRUISE TOURISM
          </div>
        </div>
      </a>
      <a href="/networkofwaterways" className="flex flex-1">
        <img
          src="NETWORK_OF_WATERWAYS.jpg"
          alt="splash screen"
          className="object-cover h-full w-full"
        />
        <div className="absolute left-1/3 right-0 bottom-0 h-screen w-1/3 text-white text-5xl font-bold leading-tight bg-gradient-to-b from-transparent from-50% to-black/80 items-end justify-start flex">
          <div className="mb-10 ml-10">
            NETWORK OF
            <br />
            WATERWAYS
          </div>
        </div>
      </a>
      <a href="/harnessingnewtechnology" className="flex flex-1">
        <img
          src="technology.jpeg"
          alt="splash screen"
          className="object-cover h-full w-full"
        />
        <div className="absolute right-0 bottom-0 h-screen w-1/3 text-white text-5xl font-bold leading-tight bg-gradient-to-b from-transparent from-50% to-black/80 items-end justify-start flex">
          <div className="mb-10 ml-10">
            HARNESSING NEW
            <br />
            TECHNOLOGY
          </div>
        </div>
      </a>
    </div>
  );
};

export default Sections;

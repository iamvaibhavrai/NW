import ImageMapper from "react-img-mapper";
import { Dimensions } from "./NetworkOfWaterways";
import { useState } from "react";
import jetty from "../config/jetty.json";
import BackButton from "./BackButton";
import HomeButton from "./HomeButton";

const JettyImageMap = () => {
  const areas = jetty;
  const url = "/jetty.png";

  const getCurrentDimensions = (): Dimensions => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const [currentDimensions, setCurrentDimensions] = useState<Dimensions>({
    width: getCurrentDimensions().width,
    height: getCurrentDimensions().height,
  });

  const MAP = {
    name: "jetty",
    areas: areas,
  };

  return (
    <>
      <BackButton />
      <HomeButton />
      <ImageMapper
        src={url}
        map={MAP}
        width={currentDimensions?.width}
        height={currentDimensions?.height}
        parentWidth={currentDimensions?.width}
        responsive
        onClick={(area) => window.open(area.href, "_self")}
      />
    </>
  );
};

export default JettyImageMap;

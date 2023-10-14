import ImageMapper from "react-img-mapper";
import { useParams } from "react-router-dom";
import { Dimensions } from "./NetworkOfWaterways";
import { useState } from "react";
import nw1Areas from "../config/nw1-areas.json";
import nw2Areas from "../config/nw2-areas.json";
import nw3Areas from "../config/nw3-areas.json";
import nw4Areas from "../config/nw4-areas.json";
import nw5Areas from "../config/nw5-areas.json";
import nw6Areas from "../config/nw6-areas.json";
import BackButton from "./BackButton";
import HomeButton from "./HomeButton";

const ImageMap = () => {
  const { name } = useParams() || "nw1";
  const mapName = name || "nw1";
  const getDetails = () => {
    let areas;
    let url;
    switch (name) {
      case "nw1":
        areas = nw1Areas;
        url = "/NW-1.png";
        break;
      case "nw2":
        areas = nw2Areas;
        url = "/NW-2.png";
        break;
      case "nw3":
        areas = nw3Areas;
        url = "/NW-3.png";
        break;
      case "nw4":
        areas = nw4Areas;
        url = "/NW-4.png";
        break;
      case "nw5":
        areas = nw5Areas;
        url = "/nw-5.png";
        break;
      case "nw6":
        areas = nw6Areas;
        url = "/NW-6.png";
        break;
      default:
        areas = nw1Areas;
        url = "/NW-1.png";
        break;
    }
    return { areas, url };
  };
  const { areas, url } = getDetails();

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
    name: mapName,
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
        stayHighlighted
        onClick={(area) => window.open(area.href, "_blank")}
      />
    </>
  );
};

export default ImageMap;

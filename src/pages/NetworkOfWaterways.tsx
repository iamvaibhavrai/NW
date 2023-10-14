import ImageMapper from "react-img-mapper";
import nwAreas from "../config/nw-areas.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";
import HomeButton from "./HomeButton";

export interface Dimensions {
  width: number;
  height: number;
}

const NetworkOfWaterways = () => {
  const navigate = useNavigate();
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

  const updateDimensions = () => {
    setCurrentDimensions(getCurrentDimensions());
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  });

  const URL = "Main_Map.png";
  const MAP = {
    name: "nw-map",
    areas: nwAreas,
  };

  return (
    <>
      <BackButton />
      <HomeButton />
      <ImageMapper
        src={URL}
        map={MAP}
        width={currentDimensions?.width}
        height={currentDimensions?.height}
        parentWidth={currentDimensions?.width}
        responsive
        stayHighlighted
        onClick={(area) => navigate(`/imageMap/${area.id}`)}
      />
    </>
  );
};

export default NetworkOfWaterways;

import React from "react";
import { useParams } from "react-router-dom";

const FullscreenImage = () => {
  const { imagePath } = useParams();
  return (
    <div className="h-screen w-full">
      <img
        src={`/${imagePath}`}
        alt="hell"
        className="object-contain h-full w-full"
      />
    </div>
  );
};

export default FullscreenImage;

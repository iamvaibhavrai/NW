import React from "react";

const SplashScreen = () => {
  return (
    <div className="h-screen w-full">
      <a href="/sections">
        <img
          src="splash_screen.png"
          alt="splash screen"
          className="object-cover h-full w-full"
        />
      </a>
    </div>
  );
};

export default SplashScreen;

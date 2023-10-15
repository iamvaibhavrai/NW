import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sections from "./pages/Sections";
import SplashScreen from "./pages/SplashScreen";
import NetworkOfWaterways from "./pages/NetworkOfWaterways";
import FullscreenImage from "./pages/FullscreenImage";
import ImageMap from "./pages/ImageMap";
import JettyImageMap from "./pages/JettyImageMap";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="sections" element={<Sections />} />
        <Route
          path="fullscreenImage/:imagePath"
          element={<FullscreenImage />}
        />
        <Route path="networkofwaterways" element={<NetworkOfWaterways />} />
        <Route path="imageMap/:name" element={<ImageMap />} />
        <Route path="jettyImageMap" element={<JettyImageMap />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

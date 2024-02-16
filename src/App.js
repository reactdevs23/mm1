import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import BottomLeft from "./components/BottomLeft";
import TopLeft from "./components/TopLeft";
import TopMiddle from "./components/TopMiddle";
import TopRight from "./components/TopRight";
import MiddleLeft from "./components/MiddleLeft";
import MiddleRight from "./components/MiddleRight";
import BottomRight from "./components/BottomRight";
import BottomMiddle from "./components/BottomMiddle";
import Light from "./images/Light";
import Spark from "./images/Spark";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Open Sans', sans-serif",
    titleFontFamily: "'Rosario', sans-serif",
    mainBg: "#fff",
    centerIcon: <Light firstColor="#fff" secondColor="#020203" />,
    title: "Mind Map",
    titleColor: "#000",
    titleSpark: <Spark color="#000" />,

    data: [
      <TopLeft
        title="Clever Idea"
        titleColor="#000"
        info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        infoColor="#000"
        borderColor="#000"
        background="#DFDE65"
        shadow="#000"
      />,
      <TopMiddle
        title="Simple Idea"
        titleColor="#000"
        info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        infoColor="#000"
        borderColor="#000"
        background="#FFDF88"
        shadow="#000"
      />,
      <TopRight
        title="Unique Idea"
        titleColor="#000"
        info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        infoColor="#000"
        borderColor="#000"
        background="#E7F3FF"
        shadow="#000"
      />,
      <MiddleLeft
        title="Modern Idea"
        info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        borderColor="#000"
        background="#EBBCAB"
        shadow="#000"
      />,
      <MiddleRight
        title="Smart Idea"
        info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        borderColor="#000"
        background="#FFD0E1"
        shadow="#000"
      />,
      <BottomLeft
        title="Creative Idea"
        titleColor="#000"
        info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        infoColor="#000"
        borderColor="#000"
        background="#FFA2B0"
        shadow="#000"
      />,
      <BottomMiddle
        title="Original Idea"
        titleColor="#000"
        info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        infoColor="#000"
        borderColor="#000"
        background="#E9DDFF"
        shadow="#000"
      />,
      <BottomRight
        title="Fresh Idea"
        titleColor="#000"
        info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        infoColor="#000"
        borderColor="#000"
        background="#E4E5E6"
        shadow="#000"
      />,
    ],
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,
          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} titleFontFamily={allData.titleFontFamily} />
      </div>
    </>
  );
}

export default App;

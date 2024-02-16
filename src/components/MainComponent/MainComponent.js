import React from "react";

import classes from "./MainComponent.module.css";
const MainComponent = ({
  titleFontFamily,
  data,
  centerIcon,
  title,
  titleSpark,
  titleColor,
}) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center w-full"
      style={{ background: "var(--mainBg)" }}
    >
      <div
        className={[
          classes.wrapper,
          data.length > 6 && classes.moreThanSixItems,
        ].join(" ")}
      >
        {" "}
        <div className={[classes.row1, classes.row].join(" ")}>
          {" "}
          {data.slice(0, 3).map((el, i) => (
            <div
              className={[classes.item, classes[`item-${i + 1}`]].join(" ")}
              key={i}
              style={{
                "--titleFontFamily": titleFontFamily,
                "--titleColor": el.titleColor,
              }}
            >
              {el}
            </div>
          ))}
        </div>{" "}
        <div className={[classes.row2, classes.row].join(" ")}>
          <div>
            {data.length > 6 && (
              <div
                className={[classes.item, classes.middleLeft].join(" ")}
                style={{ "--titleFontFamily": titleFontFamily }}
              >
                {data[3]}
              </div>
            )}
          </div>
          <div
            className={[
              data.length > 6 && classes.middleMore,
              classes.middle,
            ].join(" ")}
          >
            <h3
              className={classes.title}
              style={{
                "--color": titleColor,
                "--titleFontFamily": titleFontFamily,
              }}
            >
              {title}
              <div className={classes.titleSpark}>{titleSpark}</div>{" "}
              <div className={classes.icon}>{centerIcon}</div>
            </h3>
          </div>
          <div>
            {data.length > 6 && (
              <div
                className={[classes.item, classes.middleRight].join(" ")}
                style={{ "--titleFontFamily": titleFontFamily }}
              >
                {data[4]}
              </div>
            )}
          </div>
        </div>
        <div className={[classes.row3, classes.row].join(" ")}>
          {" "}
          {data.slice(-3).map((el, i) => (
            <div
              className={[
                classes.item,
                classes[`item-${i + 1}`],
                classes.lastThree,
              ].join(" ")}
              key={i}
              style={{ "--titleFontFamily": titleFontFamily }}
            >
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;

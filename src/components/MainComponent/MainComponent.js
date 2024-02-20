import React from "react";
import classes from "./MainComponent.module.css";
import TopLeft from "../TopLeft";
import TopMiddle from "../TopMiddle";
import TopRight from "../TopRight";
import MiddleLeft from "../MiddleLeft";
import MiddleRight from "../MiddleRight";
import BottomLeft from "../BottomLeft";
import BottomMiddle from "../BottomMiddle";
import BottomRight from "../BottomRight";
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
          data.length === 4 && classes.only4Items,
        ].join(" ")}
      >
        {" "}
        <div className={[classes.row1, classes.row].join(" ")}>
          <div
            className={[classes.item, classes[`item-1`]].join(" ")}
            style={{
              "--titleFontFamily": titleFontFamily,
              "--titleColor": titleColor,
            }}
          >
            <TopLeft
              title={data[0].title}
              titleColor={data[0].titleColor}
              info={data[0].info}
              infoColor={data[0].infoColor}
              borderColor={data[0].borderColor}
              background={data[0].background}
              shadow={data[0].shadow}
            />
          </div>
          {data.length > 4 && (
            <div
              className={[classes.item, classes[`item-2`]].join(" ")}
              style={{
                "--titleFontFamily": titleFontFamily,
                "--titleColor": titleColor,
              }}
            >
              <TopMiddle
                title={data[1].title}
                titleColor={data[1].titleColor}
                info={data[1].info}
                infoColor={data[1].infoColor}
                borderColor={data[1].borderColor}
                background={data[1].background}
                shadow={data[1].shadow}
              />
            </div>
          )}{" "}
          <div
            className={[classes.item, classes[`item-3`]].join(" ")}
            style={{
              "--titleFontFamily": titleFontFamily,
              "--titleColor": titleColor,
            }}
          >
            <TopRight
              title={data[data.length > 4 ? 2 : 1].title}
              titleColor={data[data.length > 4 ? 2 : 1].titleColor}
              info={data[data.length > 4 ? 2 : 1].info}
              infoColor={data[data.length > 4 ? 2 : 1].infoColor}
              borderColor={data[data.length > 4 ? 2 : 1].borderColor}
              background={data[data.length > 4 ? 2 : 1].background}
              shadow={data[data.length > 4 ? 2 : 1].shadow}
            />
          </div>
        </div>{" "}
        <div className={[classes.row2, classes.row].join(" ")}>
          <div>
            {data.length > 6 && (
              <div
                className={[classes.item, classes.middleLeft].join(" ")}
                style={{ "--titleFontFamily": titleFontFamily }}
              >
                <MiddleLeft
                  title={data[3].title}
                  titleColor={data[3].titleColor}
                  info={data[1].info}
                  infoColor={data[3].infoColor}
                  borderColor={data[3].borderColor}
                  background={data[3].background}
                  shadow={data[3].shadow}
                />
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
                <MiddleRight
                  title={data[4].title}
                  titleColor={data[4].titleColor}
                  info={data[4].info}
                  infoColor={data[4].infoColor}
                  borderColor={data[4].borderColor}
                  background={data[4].background}
                  shadow={data[4].shadow}
                />
              </div>
            )}
          </div>
        </div>
        <div className={[classes.row3, classes.row].join(" ")}>
          {" "}
          <div
            className={[
              classes.item,
              classes[`item-6`],
              classes.lastThree,
            ].join(" ")}
            style={{
              "--titleFontFamily": titleFontFamily,
              "--titleColor": titleColor,
            }}
          >
            <BottomLeft
              title={data[data.length > 6 ? 5 : data.length > 4 ? 3 : 2].title}
              titleColor={
                data[data.length > 6 ? 5 : data.length > 4 ? 3 : 2].titleColor
              }
              info={data[data.length > 6 ? 4 : data.length > 4 ? 3 : 2].info}
              infoColor={
                data[data.length > 6 ? 5 : data.length > 4 ? 3 : 2].infoColor
              }
              borderColor={
                data[data.length > 6 ? 5 : data.length > 4 ? 3 : 2].borderColor
              }
              background={
                data[data.length > 6 ? 5 : data.length > 4 ? 3 : 2].background
              }
              shadow={
                data[data.length > 6 ? 5 : data.length > 4 ? 3 : 2].shadow
              }
            />
          </div>
          {data.length > 4 && (
            <div
              className={[
                classes.item,
                classes[`item-7`],
                classes.lastThree,
              ].join(" ")}
              style={{
                "--titleFontFamily": titleFontFamily,
                "--titleColor": titleColor,
              }}
            >
              <BottomMiddle
                title={
                  data[data.length > 6 ? 6 : data.length > 4 ? 4 : 1].title
                }
                titleColor={
                  data[data.length > 6 ? 6 : data.length > 4 ? 4 : 1].titleColor
                }
                info={data[data.length > 6 ? 6 : data.length > 4 ? 4 : 1].info}
                infoColor={
                  data[data.length > 6 ? 6 : data.length > 4 ? 4 : 1].infoColor
                }
                borderColor={
                  data[data.length > 6 ? 6 : data.length > 4 ? 4 : 1]
                    .borderColor
                }
                background={
                  data[data.length > 6 ? 6 : data.length > 4 ? 4 : 1].background
                }
                shadow={
                  data[data.length > 6 ? 6 : data.length > 4 ? 4 : 1].shadow
                }
              />
            </div>
          )}{" "}
          <div
            className={[
              classes.item,
              classes[`item-8`],
              classes.lastThree,
            ].join(" ")}
            style={{
              "--titleFontFamily": titleFontFamily,
              "--titleColor": titleColor,
            }}
          >
            <BottomRight
              title={data[data.length > 6 ? 7 : data.length > 4 ? 5 : 3].title}
              titleColor={
                data[data.length > 6 ? 7 : data.length > 4 ? 5 : 3].titleColor
              }
              info={data[data.length > 6 ? 7 : data.length > 4 ? 5 : 3].info}
              infoColor={
                data[data.length > 6 ? 7 : data.length > 4 ? 5 : 3].infoColor
              }
              borderColor={
                data[data.length > 6 ? 7 : data.length > 4 ? 5 : 3].borderColor
              }
              background={
                data[data.length > 6 ? 7 : data.length > 4 ? 5 : 3].background
              }
              shadow={
                data[data.length > 6 ? 7 : data.length > 4 ? 5 : 3].shadow
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;

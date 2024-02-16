import React from "react";
import classes from "./MainComponent/MainComponent.module.css";
const TopRight = ({
  borderColor,
  background,
  shadow,
  title,
  titleColor,
  info,
  infoColor,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={282}
      height={264}
      fill="none"
    >
      <mask
        id="a"
        width={271}
        height={253}
        x={11}
        y={11}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M11.333 11H282v252.615H11.333V11Z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill={shadow}
          fillOpacity={0.5}
          fillRule="evenodd"
          d="M95.23 27.323c2.14 0 21.411-14.276 52.817-15.703 42.823-4.995 60.667 22.838 60.667 22.838-1.428 3.568 29.265-22.125 47.109-19.984 19.271 2.854 27.12 11.422 24.979 29.266-1.427 11.416-13.562 16.416-16.417 22.125 1.428 2.854 17.131 12.135 17.131 37.114s-15.703 38.542-14.99 38.542c.714 0 15.703 24.979 4.281 39.969-11.416 14.989-43.536.713-48.531-2.141-4.995 1.427-4.995 11.417-19.271 13.557-14.276 2.146-32.12-4.281-32.12-4.281l-7.135-5.708-100.635 80.651 64.948-76.37c-9.277 2.854-7.136 4.995-33.547 7.849-22.125 0-17.13-4.281-24.266-7.136-8.563 5.709-43.537 13.558-54.958-7.854-9.276-27.119 4.995-33.541 7.854-38.541-2.854-6.422-12.136-17.131-10.709-37.115 0-25.693 6.422-38.542 12.136-42.823-2.854-5.708-14.276-28.547 10.703-42.823 41.396-10.703 59.24 9.282 59.958 8.568h-.005Z"
          clipRule="evenodd"
        />
      </g>
      <path
        fill={background}
        fillRule="evenodd"
        stroke={borderColor}
        strokeLinejoin="round"
        strokeWidth={5.952}
        d="M86.563 19.62c2.14 0 21.411-14.276 52.817-15.703 42.823-4.995 60.667 22.838 60.667 22.838-1.427 3.568 29.266-22.125 47.109-19.984 19.271 2.854 27.12 11.416 24.98 29.26-1.428 11.422-13.563 16.417-16.417 22.13 1.427 2.855 17.13 12.13 17.13 37.115 0 24.979-15.703 38.537-14.99 38.537.714 0 15.704 24.984 4.287 39.968-11.422 14.99-43.542.719-48.537-2.14-4.994 1.427-4.994 11.422-19.27 13.562-14.276 2.141-32.12-4.281-32.12-4.281l-7.136-5.708-100.635 80.645 64.948-76.369c-9.276 2.854-7.136 4.994-33.547 7.854-22.125 0-17.13-4.287-24.266-7.141-8.562 5.714-43.536 13.563-54.958-7.849-9.276-27.12 5-33.547 7.854-38.541-2.854-6.422-12.135-17.131-10.708-37.115 0-25.693 6.427-38.542 12.135-42.823C13.052 48.167 1.63 25.323 26.61 11.052 68.01.344 85.85 20.328 86.568 19.615l-.005.005Z"
        clipRule="evenodd"
      />
      <foreignObject width="100%" height="100%" className={classes.container}>
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          className={classes.textContainer}
          style={{ "--titleColor": titleColor, "--infoColor": infoColor }}
        >
          <h2 className={classes.heading}>{title}</h2>
          <p className={classes.info}>{info}</p>
        </div>
      </foreignObject>
    </svg>
  );
};

export default TopRight;

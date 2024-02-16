import React from "react";
import classes from "./MainComponent/MainComponent.module.css";
const MiddleRight = ({
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
      width={270}
      height={199}
      fill="none"
    >
      <mask
        id="a"
        width={257}
        height={189}
        x={13}
        y={10}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M13.667 10.333h256v188.464h-256V10.333Z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill={shadow}
          fillOpacity={0.5}
          fillRule="evenodd"
          d="M92.568 25.875c2.02 0 20.208-13.474 49.843-14.818 40.412-4.713 57.256 21.552 57.256 21.552-1.349 3.37 27.614-20.88 44.453-18.859 18.182 2.693 25.594 10.776 23.573 27.615-1.349 10.776-12.797 15.494-15.49 20.88 1.344 2.693 16.162 11.453 16.162 35.026 0 23.573-14.818 36.37-14.141 36.37.672 0 14.818 23.573 4.042 37.718-10.782 14.146-41.089.672-45.802-2.02-4.719 1.349-7.485 26.666-66.943 29.359-49.057 0-69.792-18.583-76.526-21.276-8.084 5.385-41.084 12.797-51.86-7.412-8.76-25.593 4.714-31.656 7.407-36.369-2.693-6.063-11.448-16.167-10.105-35.026 0-24.245 6.063-36.37 11.454-40.412-2.693-5.385-13.47-26.943 10.104-40.411 39.062-10.104 55.9 8.755 56.578 8.083h-.005Z"
          clipRule="evenodd"
        />
      </g>
      <path
        fill={background}
        fillRule="evenodd"
        stroke={borderColor}
        strokeLinejoin="round"
        strokeWidth={5.617}
        d="M81.594 18.292c2.02 0 20.208-13.47 49.843-14.818 40.412-4.714 57.25 21.552 57.25 21.552-1.343 3.37 27.615-20.88 44.459-18.86 18.182 2.693 25.593 10.777 23.573 27.615-1.349 10.782-12.797 15.495-15.495 20.88 1.349 2.698 16.166 11.454 16.166 35.026 0 23.573-14.817 36.37-14.145 36.37.677 0 14.817 23.573 4.041 37.719s-41.083.677-45.802-2.021c-4.713 1.349-7.479 26.667-66.937 29.359-49.057 0-69.792-18.583-76.526-21.276-8.084 5.391-41.089 12.797-51.865-7.406-8.755-25.599 4.719-31.661 7.412-36.375-2.693-6.062-11.448-16.161-10.104-35.02 0-24.25 6.062-36.376 11.453-40.417-2.698-5.386-13.474-26.938 10.099-40.412C64.083.104 80.922 18.963 81.599 18.292h-.005Z"
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

export default MiddleRight;

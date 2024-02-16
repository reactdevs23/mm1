import React from "react";
import classes from "./MainComponent/MainComponent.module.css";
const MiddleLeft = ({
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
      width={269}
      height={200}
      fill="none"
    >
      <mask
        id="a"
        width={255}
        height={190}
        x={14}
        y={10}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M14 10.667h254.667V199.52H14V10.667Z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill={shadow}
          fillOpacity={0.5}
          fillRule="evenodd"
          d="M92.708 26.599c2.021 0 20.203-13.469 49.844-14.818 40.412-4.713 57.25 21.552 57.25 21.552-1.344 3.37 27.615-20.88 44.453-18.859 18.188 2.698 25.594 10.776 23.573 27.615-1.344 10.78-12.797 15.494-15.489 20.88 1.349 2.698 16.166 11.453 16.166 35.026 0 23.573-14.817 36.37-14.146 36.37.672 0 14.818 23.573 4.042 37.718-10.776 14.146-41.088.677-45.802-2.02-4.714 1.348-7.479 26.666-66.943 29.359-49.052 0-69.786-18.583-76.52-21.276-8.084 5.39-41.09 12.797-51.865-7.406-8.755-25.599 4.713-31.657 7.411-36.375-2.698-6.063-11.453-16.162-10.104-35.021 0-24.25 6.063-36.375 11.448-40.417-2.693-5.385-13.469-26.937 10.104-40.411 39.068-10.1 55.907 8.76 56.578 8.083Z"
          clipRule="evenodd"
        />
      </g>
      <path
        fill={background}
        fillRule="evenodd"
        stroke={borderColor}
        strokeLinejoin="round"
        strokeWidth={5.617}
        d="M81.734 19.016c2.021 0 20.203-13.47 49.839-14.818 40.411-4.714 57.255 21.552 57.255 21.552-1.349 3.37 27.615-20.875 44.453-18.854 18.188 2.693 25.594 10.776 23.573 27.614-1.344 10.776-12.797 15.49-15.49 20.88 1.344 2.693 16.162 11.448 16.162 35.021 0 23.578-14.818 36.375-14.141 36.375.672 0 14.818 23.573 4.042 37.714-10.776 14.146-41.089.677-45.802-2.016-4.714 1.344-7.485 26.662-66.943 29.36-49.057 0-69.791-18.584-76.526-21.282-8.078 5.391-41.083 12.802-51.86-7.406-8.754-25.594 4.714-31.656 7.407-36.37C11.01 120.724 2.255 110.62 3.604 91.76c0-24.25 6.057-36.37 11.448-40.411-2.693-5.39-13.469-26.943 10.104-40.411C64.22.832 81.057 19.693 81.734 19.015Z"
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

export default MiddleLeft;

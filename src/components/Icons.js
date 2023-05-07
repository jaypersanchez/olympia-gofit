import { Svg, Path, Rect, G, Defs, ClipPath, Circle } from "react-native-svg";

export const MaleIcons = ({ size }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <Path
        d="M66.6666 36.6667V13.3333H43.3333L52.6433 22.6433L38.2366 37.05C34.8627 34.6332 30.8168 33.3335 26.6666 33.3333C15.6366 33.3333 6.66663 42.3033 6.66663 53.3333C6.66663 64.3633 15.6366 73.3333 26.6666 73.3333C37.6966 73.3333 46.6666 64.3633 46.6666 53.3333C46.6666 49.02 45.28 45.0333 42.95 41.7633L57.3566 27.3567L66.6666 36.6667ZM26.6666 66.6667C19.3133 66.6667 13.3333 60.6867 13.3333 53.3333C13.3333 45.98 19.3133 40 26.6666 40C34.02 40 40 45.98 40 53.3333C40 60.6867 34.02 66.6667 26.6666 66.6667Z"
        fill="white"
      />
    </Svg>
  );
};

export const FemaleIcons = ({ size }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <Path
        d="M40 6.66667C28.97 6.66667 20 15.6367 20 26.6667C20 36.5567 27.2233 44.7733 36.6667 46.3667V56.6667H26.6667V63.3333H36.6667V73.2933H43.3333V63.3333H53.3333V56.6667H43.3333V46.3667C52.7767 44.77 60 36.5567 60 26.6667C60 15.6367 51.03 6.66667 40 6.66667ZM40 40C32.6467 40 26.6667 34.02 26.6667 26.6667C26.6667 19.3133 32.6467 13.3333 40 13.3333C47.3533 13.3333 53.3333 19.3133 53.3333 26.6667C53.3333 34.02 47.3533 40 40 40Z"
        fill="white"
      />
    </Svg>
  );
};

export const ArrowUpIcons = () => {
  return (
    <Svg viewBox="0 0 60 60">
      <Rect width="60" height="60" fill="#E5E5E5" />
      <G clip-path="url(#clip0_928_12719)">
        <Rect
          width="428"
          height="926"
          transform="translate(-184 -520)"
          fill="white"
        />
        <Path
          d="M32.8274 18.423C32.9724 18.5643 33.5924 19.0977 34.1024 19.5945C37.3099 22.5073 42.5599 30.1059 44.1624 34.0831C44.4199 34.687 44.9649 36.2141 44.9999 37.03C44.9999 37.8117 44.8199 38.557 44.4549 39.2681C43.9449 40.1547 43.1424 40.8658 42.1949 41.2555C41.5374 41.5063 39.5699 41.896 39.5349 41.896C37.3824 42.2857 33.8849 42.5 30.0199 42.5C26.3374 42.5 22.9824 42.2857 20.7974 41.9666C20.7624 41.9301 18.3174 41.5404 17.4799 41.1142C15.9499 40.3324 14.9999 38.8054 14.9999 37.1712V37.03C15.0374 35.9657 15.9874 33.7275 16.0224 33.7275C17.6274 29.9647 22.6199 22.5414 25.9374 19.558C25.9374 19.558 26.7899 18.7177 27.3224 18.3524C28.0874 17.7825 29.0349 17.5 29.9824 17.5C31.0399 17.5 32.0249 17.819 32.8274 18.423"
          fill="#6842FF"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_928_12719">
          <Rect
            width="428"
            height="926"
            fill="white"
            transform="translate(-184 -520)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const BackIcon = ({ size, color }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path
        d="M23.3333 14.32C23.3333 14.763 23.0041 15.1291 22.577 15.187L22.4583 15.195L4.95825 15.195C4.475 15.195 4.08325 14.8033 4.08325 14.32C4.08325 13.877 4.41243 13.5109 4.83952 13.453L4.95825 13.445L22.4583 13.445C22.9415 13.445 23.3333 13.8368 23.3333 14.32Z"
        fill={color}
      />
      <Path
        d="M12.6339 20.7284C12.9763 21.0694 12.9775 21.6234 12.6365 21.9659C12.3266 22.2772 11.8405 22.3065 11.4974 22.053L11.3991 21.9685L4.34076 14.9405C4.02852 14.6296 4.00011 14.1418 4.25556 13.7988L4.34071 13.7005L11.399 6.67132C11.7415 6.33032 12.2955 6.33147 12.6365 6.67388C12.9465 6.98517 12.9737 7.47134 12.7188 7.81336L12.6339 7.91132L6.19855 14.3208L12.6339 20.7284Z"
        fill={color}
      />
    </Svg>
  );
};

export const UserIcon = ({ size, color }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.294 7.29105C17.294 10.2281 14.9391 12.5831 12 12.5831C9.0619 12.5831 6.70601 10.2281 6.70601 7.29105C6.70601 4.35402 9.0619 2 12 2C14.9391 2 17.294 4.35402 17.294 7.29105ZM12 22C7.66237 22 4 21.295 4 18.575C4 15.8539 7.68538 15.1739 12 15.1739C16.3386 15.1739 20 15.8789 20 18.599C20 21.32 16.3146 22 12 22Z"
        fill={color}
      />
    </Svg>
  );
};

export const BoxIcon = ({ size, color }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 21" fill="none">
      <Rect
        x="1.5"
        y="2"
        width="17"
        height="17"
        rx="6.5"
        stroke={color}
        strokeWidth="2"
      />
    </Svg>
  );
};

export const RadioIcon = ({ size, color }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Circle cx="10" cy="10" r="8.5" stroke={color} strokeWidth="2" />
    </Svg>
  );
};

export const HomeFilledIcon = ({ size, color }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M7.51 18.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 0 0 2.443-1 3.41 3.41 0 0 0 1.013-2.422V7.867c0-.735-.328-1.431-.895-1.902L12.309.675A3.097 3.097 0 0 0 8.36.748L1.842 5.965a2.474 2.474 0 0 0-.967 1.902v8.702C.875 18.464 2.422 20 4.331 20h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009Z"
        fill={color}
      />
    </Svg>
  );
};

export const HomeOutlineIcon = ({ size, color }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9.157 20.771v-3.066c0-.78.636-1.414 1.424-1.42h2.886c.792 0 1.433.636 1.433 1.42v3.076c0 .662.534 1.204 1.203 1.219h1.924c1.918 0 3.473-1.54 3.473-3.438v0-8.724a2.44 2.44 0 0 0-.962-1.905l-6.58-5.248a3.18 3.18 0 0 0-3.945 0L3.462 7.943A2.42 2.42 0 0 0 2.5 9.847v8.715C2.5 20.46 4.055 22 5.973 22h1.924c.685 0 1.241-.55 1.241-1.229v0"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ChartIcon = ({ size, color }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 24" fill="none">
      <Path
        d="M8.246 10.202v6.86m4.667-10.143v10.143m4.59-3.235v3.235"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M17.56 2H8.19C4.922 2 2.874 4.312 2.874 7.585v8.83C2.875 19.688 4.913 22 8.189 22h9.372c3.276 0 5.314-2.312 5.314-5.585v-8.83C22.875 4.312 20.837 2 17.561 2Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const WalkIcon = ({ size, color }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <G id="SVGRepo_bgCarrier" strokeWidth={0} />
      <G
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G id="SVGRepo_iconCarrier">
        <Path d="M10.1 3A1.9 1.9 0 1 1 12 4.9 1.899 1.899 0 0 1 10.1 3zm6.257 13.26l-2.425-3.377-.293-5.403c-.067-1.287-1.823-1.449-3.401-1.579-.945 1.6-2.48 4.575-3.125 5.838a.721.721 0 0 0 .265.942.74.74 0 0 0 1.033-.264l2.104-3.72.258 4.338 3.47 4.144 1.724 4.858a1.088 1.088 0 0 0 2.081-.496.953.953 0 0 0-.03-.202c-.03-.113-1.66-5.078-1.66-5.078zm-6.014-2.18l1.581 1.887-.335 1.588-3.227 4.285a1.087 1.087 0 1 1-1.808-1.2l3.065-4.285zM18 10.936a.881.881 0 0 1-.824 1.51c-.611-.37-2.35-1.536-2.35-1.536l-.104-1.926z" />
        <Path fill="none" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
};

export const WorkoutIcon = ({ size, color }) => {
  return (
    <Svg
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      width={size}
      height={size}
      fill={color}
    >
      <G strokeWidth={0} />
      <G strokeLinecap="round" strokeLinejoin="round" />
      <G>
        <Path d="M7 25c-1.7 0-3-1.3-3-3V10c0-1.7 1.3-3 3-3s3 1.3 3 3v12c0 1.7-1.3 3-3 3zm18 0c-1.7 0-3-1.3-3-3V10c0-1.7 1.3-3 3-3s3 1.3 3 3v12c0 1.7-1.3 3-3 3z" />
        <Path d="M23 17H9c-.6 0-1-.4-1-1s.4-1 1-1h14c.6 0 1 .4 1 1s-.4 1-1 1zM2 10.2c-1.2.4-2 1.5-2 2.8v6c0 1.3.8 2.4 2 2.8V10.2zm28 0v11.6c1.2-.4 2-1.5 2-2.8v-6c0-1.3-.8-2.4-2-2.8z" />
      </G>
    </Svg>
  );
};

export const SearchIcon = ({ size, color }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <G id="Iconly/Light/Search">
        <G id="Search">
          <Circle
            id="Ellipse_739"
            cx="11.7666"
            cy="11.7666"
            r="8.98856"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            id="Line_181"
            d="M18.0183 18.4852L21.5423 22.0001"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      </G>
    </Svg>
  );
};

export const BookmarkOutlineIcon = ({ size, color }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <G
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path
          clipRule="evenodd"
          d="M19.739 6.154c0-2.751-1.88-3.854-4.589-3.854H8.791C6.167 2.3 4.2 3.328 4.2 5.97v14.724a.95.95 0 0 0 1.413.828l6.382-3.58 6.327 3.574a.95.95 0 0 0 1.417-.827V6.154Z"
        />
        <Path d="M8.271 9.028h7.318" />
      </G>
    </Svg>
  );
};

export const BookmarkFilledIcon = ({ size, color }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.9 2h6.17c2.71 0 4.9 1.07 4.93 3.79v15.18c0 .17-.04.34-.12.49-.13.24-.35.42-.62.5-.26.08-.55.04-.79-.1l-6.48-3.24-6.49 3.24c-.149.079-.32.13-.49.13-.56 0-1.01-.46-1.01-1.02V5.79C4 3.07 6.2 2 8.9 2Zm-.68 7.62h7.53c.43 0 .78-.351.78-.79 0-.44-.35-.79-.78-.79H8.22c-.43 0-.78.35-.78.79 0 .439.35.79.78.79Z"
        fill={color}
      />
    </Svg>
  );
};

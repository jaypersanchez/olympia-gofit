import { Svg, Path, Rect, G, Defs, ClipPath } from "react-native-svg";

export const MaleIcons = () => {
  return (
    <Svg width={80} height={80} viewBox="0 0 80 80" fill="none">
      <Path
        d="M66.6666 36.6667V13.3333H43.3333L52.6433 22.6433L38.2366 37.05C34.8627 34.6332 30.8168 33.3335 26.6666 33.3333C15.6366 33.3333 6.66663 42.3033 6.66663 53.3333C6.66663 64.3633 15.6366 73.3333 26.6666 73.3333C37.6966 73.3333 46.6666 64.3633 46.6666 53.3333C46.6666 49.02 45.28 45.0333 42.95 41.7633L57.3566 27.3567L66.6666 36.6667ZM26.6666 66.6667C19.3133 66.6667 13.3333 60.6867 13.3333 53.3333C13.3333 45.98 19.3133 40 26.6666 40C34.02 40 40 45.98 40 53.3333C40 60.6867 34.02 66.6667 26.6666 66.6667Z"
        fill="white"
      />
    </Svg>
  );
};

export const FemaleIcons = () => {
  return (
    <Svg width={80} height={80} viewBox="0 0 80 80" fill="none">
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

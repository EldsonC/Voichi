import { IconProps } from "../../interfaces";

type LikeProps = Partial<IconProps>;

export function LikeIcon({size, color}: LikeProps) {
  return (
    <svg
      width={size ? size : 22}
      height={size ? size : 20}
      fill="none"
      viewBox="0 0 22 20"
    >
      <path
        fill={color ? color : "#D9D9D9"}
        stroke={color ? color : "#D9D9D9"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M7.25 3.333a4.583 4.583 0 00-4.583 4.584c0 4.583 5.416 8.75 8.333 9.719 2.917-.97 8.333-5.136 8.333-9.72A4.583 4.583 0 0011 5.282a4.578 4.578 0 00-3.75-1.948z"
      ></path>
    </svg>
  );
}
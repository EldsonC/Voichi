import { IconProps } from "../../interfaces";

type NextProps = Partial<IconProps>;

export function NextIcon({size, color}: NextProps) {
  return (
    <svg
      width={size ? size : 20}
      height={size ? size : 20}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill={color ? color : "#D9D9D9"}
        d="M13.883 12.206c1.49-.962 1.49-3.45 0-4.412L4.892 1.987c-1.446-.934-3.225.283-3.225 2.207v11.612c0 1.925 1.778 3.14 3.225 2.207l8.991-5.807zm5.075-8.04a.625.625 0 10-1.25 0v11.667a.625.625 0 001.25 0V4.167z"
      ></path>
    </svg>
  );
}
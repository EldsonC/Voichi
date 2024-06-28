import { IconProps } from "../../interfaces";

type MicProps = Partial<IconProps>;

export function MicrophoneIcon({size, color}: MicProps) {
  return (
    <svg
      width={size ? size : 32}
      height={size ? size : 32}
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        fill={color ? color : "#000"}
        d="M16 2a6 6 0 00-6 6v8a6 6 0 1012 0V8a6 6 0 00-6-6zM7 15a1 1 0 011 1 8 8 0 0016 0 1 1 0 012 0c0 5.186-3.947 9.45-9.001 9.95L17 26v3a1 1 0 01-2 0v-3l.001-.05C9.947 25.45 6 21.187 6 16a1 1 0 011-1z"
      ></path>
    </svg>
  );
}
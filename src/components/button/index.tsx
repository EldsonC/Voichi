import { ButtonProps } from "../../interfaces";
import { Button } from "./style";

type ButtonType = Partial<ButtonProps>;

export function ButtonComponent({type, text, icon}: ButtonType) {
  return (
    <Button className={type ? type : "default"}>
      {icon ? icon : text}
    </Button>
  );
}
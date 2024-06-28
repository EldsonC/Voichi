import { LogoIcon } from "../../assets/icons/logo";
import { ButtonComponent } from "../button";
import { Header } from "./style";

export function HeaderComponent() {
  return (
    <Header>
      <div className="content_header">
        <span>
          <LogoIcon/>
        </span>

        <div className="container_buttons">
          <ButtonComponent type="line" text="Sign Up"/>
          <ButtonComponent text="Sign In"/>
        </div>
      </div>
    </Header>
  );
}
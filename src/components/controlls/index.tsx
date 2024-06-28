import { LikeIcon } from "../../assets/icons/like";
import { MicrophoneIcon } from "../../assets/icons/microphone";
import { NextIcon } from "../../assets/icons/next";
import { ButtonComponent } from "../button";
import { Controller } from "./style";

export function Controlls() {
  return (
    <Controller>
      <div className="content_buttons">
        <ButtonComponent type="options" icon={<LikeIcon/>}/>
        <ButtonComponent type="microphone" icon={<MicrophoneIcon/>}/>
        <ButtonComponent type="options" icon={<NextIcon/>}/>
      </div>
    </Controller>
  );
}
import { useState } from "react";
import "./padbutton.css";

export default function PadButton(props)
{
  const PAD_ON_CLASS = "pad-button on";
  const PAD_OFF_CLASS = "pad-button off";

  return(
    <button
      className={props.on === true ? PAD_ON_CLASS : PAD_OFF_CLASS}
      style={{backgroundColor: props.color}}
      onClick={() => props.toggleOn(props.id)}
    ></button>
  );
}
import { useState } from "react";
import "./soundpadapp.css";
import PadButton from "./components/PadButton";
import PadsData from "./padsInfo.js";

export default function SoundPadApp()
{
  const [padInfos, setPadInfos] = useState(PadsData);
  const [val, setVal] = useState(true);

  function toggleOn(id)
  {
    setPadInfos(prevPadInfos => prevPadInfos.map(
      (prevPadInfo) => {
        return prevPadInfo.id === id ? {...prevPadInfo, on: !prevPadInfo.on} : prevPadInfo
      })
    )
  }

  const padButtons = padInfos.map(padInfo => (
    <PadButton key={padInfo.id} id={padInfo.id} color={padInfo.color} on={padInfo.on} toggleOn={toggleOn}/>
  ));

  return (
    <main className="soundpadapp-main">
      <h1 style={{color: "white"}}>Sound Pad App</h1>
      <div className="pad-container">
        {padButtons}
      </div>
    </main>
  );
}
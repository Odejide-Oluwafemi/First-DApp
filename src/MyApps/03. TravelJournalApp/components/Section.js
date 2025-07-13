import Card from "./Card.js";
import "./section.css";
import travelJSON from "../travelapp_data.js";

export default function Section()
{
  const travelCardElements = travelJSON.map((travelData) => {
    return <Card
            key =  {travelData.id}
            data = {travelData}
            // {...travelData} -> using spread to achieve same as below, but more concise
            // img =            {travelData.img}
            // title =          {travelData.title}
            // country =        {travelData.country}
            // googleMapsLink = {travelData.googleMapsLink}
            // text =           {travelData.text}
            // dates =          {travelData.dates}
        />
  });

  return(
    <main className="section">
      <div className="cards">
        {travelCardElements}
      </div>
    </main>
  );
}
import { useState, useEffect } from "react";
import "../styles/main.css";

export default function Main() {
  const [allMemes, setAllMemes] = useState([]);

  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: " http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event)
  {
    const {value, name} = event.currentTarget;
    setMeme(prevMeme => ({...prevMeme, [name]: value}));
  }

  useEffect(function(){
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(jsonObj => setAllMemes(jsonObj.data.memes));
  }, []);

  function getRandomMeme()
  {
    const meme = allMemes[Math.floor(Math.random() * allMemes.length)];
    setMeme(prevMeme => ({
      ...prevMeme,
      imageUrl: meme.url
    }))
  }

  return (
    <main className="meme-generator-main">
      <div className="meme-generator-form-container">
        <div className="meme-generator-form-row">
          <div>
            <label>Top Text</label>
            <br />
            <input type="text" placeholder={meme.topText}
              name="topText"
              onChange={handleChange}
              value={meme.topText}
            />
          </div>

          <div>
            <label>Bottom Text</label>
            <br />
            <input type="text" placeholder={meme.bottomText}
              name="bottomText"
              onChange={handleChange}
              value={meme.bottomText}
            />
          </div>
        </div>

        <button onClick={getRandomMeme}>Generate Meme Image 🖼</button>
      </div>

      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}

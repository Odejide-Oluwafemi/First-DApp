import { useState, useEffect, useRef } from "react";

export default function Home() {
  return (
    <div className="App">
      <Counter />
      <br />
      <TextUpdater />
      <br />
      <List />
    </div>
  );
}

function Counter() {
  const [myNumber, setMyNumber] = useState(0);

  function increment() {
    setMyNumber(myNumber + 1);
  }

  return (
    <div className="App">
      <h1>{myNumber}</h1>

      <button onClick={increment}>Increment</button>
    </div>
  );
}

function TextUpdater() {
  const [text, setText] = useState("");

  function update(text) {
    setText(text);
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          update(e.target.value);
        }}
      ></input>
      <p>{text}</p>
    </div>
  );
}

function List() {
  const [list, setList] = useState(["Say"]);
  const [currentItem, setCurrentItem] = useState("");

  const [searchText, setSearchText] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  function updateList() {
    const newList = [...list, currentItem];
    setList(newList);
  }

  useEffect(() => {
    if (searchText.length === 0) setRecommendations([]);
    else if (searchText.length > 0) {
      const newRecs = list.filter((item) =>
        item.toLowerCase().includes(searchText.toLowerCase())
      );
      setRecommendations(newRecs);
    }
  }, [searchText]);

  return (
    <div>
      <input type="text" onChange={(e) => setCurrentItem(e.target.value)} />
      <button onClick={updateList}>Add Item</button>
      <br />
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <span>Search</span>
      <input type="text" onChange={(e) => setSearchText(e.target.value)}/>
      <h2>Recommendations</h2>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </div>
  );
}

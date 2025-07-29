import { useState, useEffect, useRef } from "react";
import { useWindowSize } from "react-use";
import Die from "./components/Die";
import "./styles/tenzies.css";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function Tenzies() {
  const actionButton = useRef(null);

  const [dice, setDice] = useState(() => generateNewDice());

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);
  
  useEffect(() => {
    if (gameWon)  actionButton.current.focus();
  }, [gameWon]);

  const { width, height } = useWindowSize();

  const diceElements = dice.map((dieObj) => (
    <Die
      id={dieObj.id}
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={hold}
    />
  ));

  function generateNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function playGame() {
    if (!gameWon) {
      setDice((prevDice) =>
        prevDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
    }
    else {
      setDice(generateNewDice());
    }
  }

  function hold(id) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  return (
    <main className="tenzies-main">
      {gameWon && <Confetti width={width} height={height} />}
      <div aria-live="polite" className="sr-only">
        {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
      </div>

      <div className="game-canvas">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-container">{diceElements}</div>

        <button className="roll-dice-btn" onClick={playGame} ref={actionButton}>
          {gameWon ? "New Game" : "Roll"}
        </button>
      </div>
    </main>
  );
}

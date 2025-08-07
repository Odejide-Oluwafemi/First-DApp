import { nanoid } from "nanoid";
import "./assembly_end_game.css";
import Chip from "./component/chip";
import { languages } from "./languages";
import { useState } from "react";
import KeyButton from "./component/key";
import clsx from "clsx";
import { getFarewellText, getRandomWord } from "./utils";
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

export default function AssemblyEndGame() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter.toLowerCase())
  ).length;
  
  const numGuessesLeft = languages.length - 1;
  const isGameLost = wrongGuessCount >= numGuessesLeft;
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter.toUpperCase()));
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter.toLowerCase());

  const keyboard = alphabet.split("").map((letter) => {
    letter = letter.toUpperCase();

    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.toUpperCase().includes(letter);
    const isWrong = isGuessed && !currentWord.toUpperCase().includes(letter);

    return (
      <KeyButton
        key={letter}
        value={letter.toUpperCase()}
        handleInput={handleInput}
        status={{ correct: isCorrect, wrong: isWrong }}
        isGameOver={isGameOver}
      />
    );
  });


  const chips = languages.map((language, index) => (
    <Chip
      key={nanoid()}
      name={language.name}
      color={language.color}
      backgroundColor={language.backgroundColor}
      isLanguageLost={index < wrongGuessCount}
      isGameOver={isGameOver}
    />
  ));


  const statusClassName = clsx(
    "status",
    isGameOver ? isGameWon ? "game-won" : "game-lost" : "",
    (!isGameOver && isLastGuessIncorrect) ? "farewell" : ""
  );

  function handleInput(letter) {
    if (isGameOver)
    {
      alert(isGameWon ? "Game Won!!!" : isGameLost ? "Game Over!!!" : "");
      return;
    }

    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  function renderGameStatus() {
        if (!isGameOver && isLastGuessIncorrect) {
            return <p className="farewell-message">{getFarewellText(languages[wrongGuessCount - 1].name)}</p>
        }

        if (isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        }
        if (isGameLost) {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }

        return null;
    }
  
  function newGame()
  {
    setGuessedLetters([]);
    setCurrentWord(getRandomWord());
  }

  const { width, height } = useWindowSize();

  return (
    <main className="assembly-endgame-main">
      {
        isGameWon &&
          <Confetti
            width={width}
            height={height}
            recycle={false} 
            numberOfPieces={1000}
          />
      }
      <header className="assembly-endgame-header">
        <h1>Assembly: EndGame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>

      <section className={statusClassName} aria-live="polite" role="status">
        {renderGameStatus()}
      </section>

      <section className="chips-section">{chips}</section>

      {(!isGameOver || isGameWon) && <section className="word-section">
        {currentWord.split("").map((letter, index) => (
          <span key={index} className="letter-container">
            {guessedLetters.includes(letter.toUpperCase()) ? letter : ""}
          </span>
        ))}
      </section>}

      {isGameLost && <section className="word-section">
        {currentWord.split("").map((letter, index) => (
          <span key={index}
          className={`letter-container ${!guessedLetters.includes(letter.toUpperCase()) ? "lost" : ""}`}
          >
            {letter}
          </span>
        ))}
      </section>}

      {/* Combined visually-hidden aria-live region for status updates */}
      <section className="sr-only" aria-live="polite" role="status">
        <p>
          {currentWord.toUpperCase().includes(lastGuessedLetter) ?
            `Correct! ${lastGuessedLetter} is in the word!` :
            `Incorrect! ${lastGuessedLetter} is not in the word!`
          }

          You have {numGuessesLeft} attempts left!
        </p>
        <p>Current word: {
            currentWord
            .split("")
            .map(letter => guessedLetters.includes(letter) ? letter + "." : "blank.")
            .join(' ')
          }
        </p>
            
      </section>

      <section className="keyboard-section">{keyboard}</section>

      {isGameOver && <button className="new-game-btn" onClick={newGame}>New Game</button>}
    </main>
  );
}

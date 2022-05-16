import React, {createContext, useEffect, useState} from 'react';
import useEventListener from '@use-it/event-listener';

import Header from './components/Header/Header.js';
import Board from './components/Board/Board.js';
import Keyboard from './components/Keyboard/Keyboard.js';
import ExplainingPopup from './components/Popups/Explaining_popup.js';
import StartingPopup from './components/Popups/Starting_popup.js';
import WinningPopup from './components/Popups/Winning_popup.js';
import LosingPopup from './components/Popups/Losing_popup.js';
import allPossibleWords from './dictionary_searches/English_six.js';

import './App.css';

export const AppContext = createContext();

const App = () => {
  const [word, setWord] = useState(["s", "w", "o", "r", "d", "s"])
  const [board, setBoard] = useState([
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""]
  ]);
  const [colorBoard, setColorBoard] = useState([
    ["black", "black", "black", "black", "black", "black"],
    ["black", "black", "black", "black", "black", "black"],
    ["black", "black", "black", "black", "black", "black"],
    ["black", "black", "black", "black", "black", "black"],
    ["black", "black", "black", "black", "black", "black"],
    ["black", "black", "black", "black", "black", "black"]
  ]);
  const [colorKeyboard, setColorKeyboard] = useState([
    ["black", "black", "black", "black", "black", "black", "black", "black", "black", "black"],
    ["black", "black", "black", "black", "black", "black", "black", "black", "black"],
    ["black", "black", "black", "black", "black", "black", "black"]
  ]);
  const keyboard = [
    ["Q", 0, 0], ["W", 0, 1], ["E", 0, 2], ["R", 0, 3], ["T", 0, 4], ["Y", 0, 5], ["U", 0, 6], ["I", 0, 7], ["O", 0, 8], ["P", 0, 9], ["A", 1, 0], ["S", 1, 1], ["D", 1, 2], ["F", 1, 3], ["G", 1, 4], ["H", 1, 5], ["J", 1, 6], ["K", 1, 7], ["L", 1, 8], ["Z", 2, 0], ["X", 2, 1], ["C", 2, 2], ["V", 2, 3], ["B", 2, 4], ["N", 2, 5], ["M", 2, 6]
  ];
  const [currentRow, setCurrentRow] = useState(0);
  const [currentTile, setCurrentTile] = useState(0);
  const [showExplainingPopup, setShowExplainingPopup] = useState(0);
  const [showWinningPopup, setShowWinningPopup] = useState(false);
  const [showLosingPopup, setShowLosingPopup] = useState(false);
  const contents = Object.values(allPossibleWords);
  function loadHandler() {
    let index = 7 * Math.floor(Math.random() * 10500);
    let newWord = [];
    for (let j = 0; j < 6; j++) {
      newWord.push(contents[0].substr(index + j, 1));
    }
    console.log(newWord);
    setWord(newWord);
  }
  const keyHandler = ({key}) => {
    if (String(key) === "Backspace") {
      const newBoard = [...board];
      newBoard[currentRow][currentTile - 1] = "";
      setBoard(newBoard);
      if (currentTile > 0) {
      setCurrentTile(currentTile - 1);
    } else {
      setCurrentTile(0);
    }
  } else if (String(key).toLowerCase() !== String(key).toUpperCase() && String(key).length === 1 && currentTile < 6) {
      const newBoard = [...board];
      newBoard[currentRow][currentTile] = String(key);
      setBoard(newBoard);
      setCurrentTile(currentTile + 1);
    } else if (String(key) === "Enter" && currentTile === 6) {
      let colorRow = [];
      let newColorKeyboard = [...colorKeyboard];
      for (let i = 0; i < 6; i++) {
        if (board[currentRow][i] === word[i]) {
          colorRow.push("green");
          for (let k = 0; k < 26; k++) {
            if (board[currentRow][i].toUpperCase() === keyboard[k][0]) {
              newColorKeyboard[keyboard[k][1]][keyboard[k][2]] = "green";
            }
          }
        } else if (board[currentRow][i] !== word[i] && word.includes(board[currentRow][i])) {
          colorRow.push("#B59F3B");
          for (let l = 0; l < 26; l++) {
            if (board[currentRow][i].toUpperCase() === keyboard[l][0] && newColorKeyboard[keyboard[l][1]][keyboard[l][2]] !== "green") {
              newColorKeyboard[keyboard[l][1]][keyboard[l][2]] = "#B59F3B";
            }
          }
        } else {
          colorRow.push("gray");
          for (let m = 0; m < 26; m++) {
            if (board[currentRow][i].toUpperCase() === keyboard[m][0] && newColorKeyboard[keyboard[m][1]][keyboard[m][2]] !== "green" && newColorKeyboard[keyboard[m][1]][keyboard[m][2]] !== "#B59F3B") {
              newColorKeyboard[keyboard[m][1]][keyboard[m][2]] = "gray"
            }
          }
        }
        setColorKeyboard(newColorKeyboard);
      }
      const newColorBoard = [...colorBoard];
      newColorBoard[currentRow] = colorRow;
      setColorBoard(newColorBoard);
      console.log(word);
      if (board[currentRow].every((val, index) => val === word[index])) {
        setShowWinningPopup(true);
      }
      setCurrentTile(0);
      setCurrentRow(currentRow + 1);
      if (showWinningPopup === false && currentRow === 5) {
        setShowLosingPopup(true);
      }
    }
  }
  function headerClickHandler() {
    setShowExplainingPopup(showExplainingPopup + 1);
  }
  useEffect(() => {
    document.getElementById("Header").addEventListener("click", headerClickHandler)
  }, [showExplainingPopup]);
  useEventListener("keydown", keyHandler);
  useEventListener("load", loadHandler);
  return (
    <>
    <Header />
    <StartingPopup />
    <AppContext.Provider value={{board, setBoard, colorBoard, setColorBoard, showExplainingPopup, setShowExplainingPopup, showWinningPopup, setShowWinningPopup, showLosingPopup, setShowLosingPopup, keyboard, colorKeyboard, setColorKeyboard}}>
    <ExplainingPopup />
    <WinningPopup />
    <LosingPopup />
    <Board />
    <br/>
    <Keyboard />
    </AppContext.Provider>
    </>
  )
}


export default App;

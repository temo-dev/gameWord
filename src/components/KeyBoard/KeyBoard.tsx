import React from "react";
import Key from "../Key/Key";
import "./keyboard.css";
import { isBack, incRow } from "../../redux/boardSlice";
import { rootState } from "../interface";
import { useDispatch, useSelector } from "react-redux";
import wordList from "../../word-list.json";

interface IProps {}
const KeyBoard: React.FC<IProps> = (props) => {
  const dispatch = useDispatch();
  const position = useSelector((state: rootState) => state.board.pos);
  const row = useSelector((state: rootState) => state.board.row);
  const board = useSelector((state: rootState) => state.board.board);
  const correctWord = useSelector(
    (state: rootState) => state.board.correctWord
  );
  const allWords: string[] = wordList.words;
  let currentRow = Math.floor((position - 1) / 5);
  let board5Word: string = `${board[position - 5]}${board[position - 4]}${
    board[position - 3]
  }${board[position - 2]}${board[position - 1]}`.toLowerCase();

  const chooseBack = () => {
    if (currentRow < row) return;
    dispatch(isBack());
  };

  const chooseEnter = () => {
      if (position !== 0 && position % 5 === 0) {
        if (!allWords.includes(board5Word)){
          return alert("Invalid words !");
        } 
        if (position === 30 && correctWord !== board5Word) {
          return alert(`The word is ${correctWord}`);
        }
        dispatch(incRow());
      }
  };

  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];

  return (
    <div className="keyboard-container">
      {rows.map((row, idx) => {
        return (
          <>
            <div className="row">
              {idx === 2 && (
                <span className="letter-row" onClick={chooseEnter}>
                  Enter
                </span>
              )}

              {row.split(" ").map((letter) => (
                <div className="letter-row">
                  <Key letter={letter.toUpperCase()} />
                  {letter === "m" && <span onClick={chooseBack}>Back</span>}
                </div>
              ))}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default KeyBoard;

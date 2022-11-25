import React from "react";
import Key from "../Key/Key";
import "./keyboard.css";
import {isBack} from "../../redux/boardSlice"
import {rootState} from "../interface"
import {useDispatch,useSelector} from "react-redux"
interface IProps {}

const KeyBoard: React.FC<IProps> = (props) => {
  const position = useSelector((state:rootState)=> state.board.pos)
  const dispatch = useDispatch()
  const chooseBack = () => {
    if (position <= 0 ) return
    dispatch(isBack())
  }
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
              
              { idx === 2 && (
                <span className="letter-row">Enter</span>
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

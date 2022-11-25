import React, { useState, useEffect } from "react";
import "./square.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { rootState } from "../interface";

interface IProps {
  val: string;
  squareIdx: number;
}

const Square: React.FC<IProps> = (props) => {
  const { val, squareIdx } = props;

  const correctWord = useSelector(
    (state: rootState) => state.board.correctWord
  );
  const postion = useSelector((state: rootState) => state.board.pos);
  const reduxRow = useSelector((state: rootState) => state.board.row);

  const [correct, setCorrect] = useState<Boolean>(false);
  const [almost, setAlmost] = useState<Boolean>(false);
  const [wrong, setWrong] = useState<Boolean>(false);

  let wordLastIndex = 4;
  let currentPositionWord =
    postion === 5
      ? wordLastIndex
      : postion > 5 && postion % 5 === 0
      ? wordLastIndex
      : (postion - 1) % 5;

  const variants = {
    filled: () => ({
      scale: [1.2, 1],
      transtion: {
        duration: 0.2,
      },
    }),
    unfilled: () => ({
      scale: [1.2, 1],
      transtion: {
        duration: 0.2,
      },
    }),
  };

  useEffect(() => {
    if (correctWord[currentPositionWord] === val){
      setCorrect(true)
    }else if (!correct && val !== "" && correctWord.includes(val)){
      setAlmost(true)
    } else if (!correct && val !== "" && !correctWord.includes(val)){
      setWrong(true)
    }

    return () => {
      setCorrect(false)
      setAlmost(false)
      setWrong(false)
    }
  }, [val]);

  const status: any = Math.floor(squareIdx/5) < reduxRow && (correct ? "correct" : almost ? "almost" : wrong ? "wrong" : " ")

  return (
    <motion.div animate={val ? "filled" : "unfilled"} variants={variants}>
      <div className="square" id={status}>{val}</div>
    </motion.div>
  );
};

export default Square;

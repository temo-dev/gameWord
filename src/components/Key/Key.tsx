import React from 'react'
import "./key.css"
import {useSelector, useDispatch} from "react-redux"
import {rootState} from "../interface"
import {setBoard, incPos} from "../../redux/boardSlice"


interface IProps {
  letter: String
}

const Key: React.FC<IProps> = (props) => {
  const { letter } = props
  const board = useSelector((state:rootState)=> state.board.board)
  const position = useSelector((state:rootState)=> state.board.pos)
  const dispatch = useDispatch()
  const chooseLetter = () => {
    if (position >= 30) return
    const newBoard = [...board]
    newBoard[position] = letter
    dispatch(setBoard(newBoard))
    dispatch(incPos())
  }
  return (
    <div className='letter' onClick={chooseLetter}>{letter}</div>
  )
}

export default Key
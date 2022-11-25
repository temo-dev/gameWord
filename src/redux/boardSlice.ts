import {createSlice} from "@reduxjs/toolkit"
import wordList from "../word-list.json"

let radomNum = Math.floor(Math.random() * wordList.words.length)
const initialState = {
  board:
  [ "","","","","",
    "","","","","",
    "","","","","",
    "","","","","",
    "","","","","",
    "","","","","",
  ],
  pos: 0,
  row: 0,
  correctWord: wordList.words[radomNum].toUpperCase()
}

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers:{
      setBoard: (state, action) => {
        state.board = action.payload
      },

      incPos: (state) => {
        state.pos++
      },

      isBack: (state) => {
        state.pos--
        state.board[state.pos] = ""
      },
      incRow: (state) => {
        state.row++
      },

  }
})

export const {
  setBoard,
  incPos,
  isBack,
  incRow,
} = boardSlice.actions

export default boardSlice.reducer
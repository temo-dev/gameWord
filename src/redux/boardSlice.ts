import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  board:
  [ "","","","","",
    "","","","","",
    "","","","","",
    "","","","","",
    "","","","","",
    "","","","","",
  ],
  pos: 0
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
      }
  }
})

export const {
  setBoard,
  incPos,
  isBack
} = boardSlice.actions

export default boardSlice.reducer
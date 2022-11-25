interface boardState {
  board: String[],
  pos: number
}

export interface rootState {
  board: boardState,
}
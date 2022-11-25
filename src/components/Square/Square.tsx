import React from 'react'
import "./square.css"

interface IProps {
  val: String,
  squareIdx: Number
}

const Square: React.FC<IProps> = (props) => {
  const { val, squareIdx } = props
  return (
    <div className='square'>
      {val}
    </div>
  )
}

export default Square
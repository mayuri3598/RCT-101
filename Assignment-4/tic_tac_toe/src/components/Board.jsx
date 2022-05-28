import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Box } from "./Box"
import "./Board.css"

export const Board = ({ board, handleClick}) => {
  return (
    <div className="board">
     {board.map((value,idx)=>{
         return <Box value={value} handleClick={handleClick} idx={idx} key={uuidv4()}/>
     })}
    </div>
  )
}
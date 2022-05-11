import React from 'react'
import {Box} from './box.js'
import './board.css'

export const Board=({board, onClick})=>{
    return(
        <div className="board">
        {board.map((value,idx)=>{  //to map the whole function to check on which box it was clicked.
            return <Box value={value} onClick={()=>value===null && onClick(idx)}/>  //to identify which box was clicked on.
        })}
        </div>
        
    )
}
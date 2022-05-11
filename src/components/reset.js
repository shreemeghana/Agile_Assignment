import React from 'react';
import './reset.css'

export const ResetButton=({resetBoard})=>{
    return(
        <button className="reset" onClick={resetBoard}>Reset</button>  //to reset the whole board to play new game
    )
}
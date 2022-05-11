import React from 'react';
import './score.css'

export const Score=({scores,xPlaying})=>{
    const{xScore,oScore}=scores;
    return(
        <div className="scoreboard">
        <span classname={`score x-score ${!xPlaying && "inactive"}`}>X-{xScore}</span>  
        <span classname={`score o-score ${xPlaying && "inactive"}`}>O-{oScore}</span>   
        </div>
    )
}

import React from 'react'
import './box.css'

export const Box=({value, onClick})=>{
    const style=value==="X"?"box x":"box o";  //to alternatively lace X and O
    return(
        <button className={style} onClick={onClick}>{value}</button>
    )
}
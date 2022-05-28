import React from 'react';

import "./Box.css";

export const Box = ({ value, handleClick ,idx}) => {
    const style = value === "x" ? "box x" : "box o";

    return (
        <button className={style} onClick={()=>{
           value==null && handleClick(idx)
        }}>{value}</button>
    )
}
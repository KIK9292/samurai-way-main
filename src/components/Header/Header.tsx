import React from "react";
import style from "./Header.module.css"


export const Header =()=>{
    return(
    <div className={style.Header}>
        <img className={style.imgHeader} src="https://images.freeimages.com/images/previews/09e/moon-art-1641879.png" alt="logo"/>
    </div>
    )
}
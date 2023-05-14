import React from "react";
import style from "./ProfileInfo.module.css"


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://flamingo-anapa.ru/smt_images/header_beatch.jpg" alt="sea"/>
            </div>
            <div className={style.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
import React from "react";
import style from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src="https://flamingo-anapa.ru/smt_images/header_beatch.jpg" alt="sea"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}
import style from "./Post.module.css";
import React from "react";


type PostTypeProps={
    message:string
}


export const Post = (props:PostTypeProps) => {
    return (
        <div>
            <div className={style.post}>
                <img src="https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg" alt="Avatar_User"/>
                {props.message}
                <div>
                    <span>Like</span>
                </div>


            </div>
        </div>
    )
}
import style from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Posts/Post";


export const MyPosts = () => {
    return (
        <div className={style.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.post}>
                <Post message={"Hi, how are you?"}/>
                <Post message={"It's my first post!"}/>
            </div>
        </div>
    )
}
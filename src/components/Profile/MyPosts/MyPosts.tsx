import style from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Posts/Post";


export const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message={"Hi, how are you?"}/>
                <Post message={"It's my first post!"}/>
            </div>
        </div>
    )
}
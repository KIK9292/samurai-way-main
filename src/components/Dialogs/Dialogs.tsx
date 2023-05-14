import React from 'react';
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogsPropsType = {}

type DialogItemPropsType = {
    name: string
    id: string
}


const DialogItem = (props: DialogItemPropsType) => {
    let path = "/Dialogs/ + props.id"
    return <div className={style.dialog + " " + style.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

type MessagePropsType = {
    message: string
}


const Message = (props: MessagePropsType) => {
    return <div className={style.dialog}>{props.message}</div>
}


export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                <DialogItem name={"Dimych"} id={"1"}/>
                <DialogItem name={"Andey"} id={"2"}/>
                <DialogItem name={"Sveta"} id={"3"}/>
                <DialogItem name={"Sasha"} id={"4"}/>
                <DialogItem name={"Victor"} id={"5"}/>
                <DialogItem name={"Valera"} id={"6"}/>
                {/*    <div className={style.dialog}>*/}
                {/*        <NavLink to={"/Dialogs/2"}>Andey</NavLink>*/}
                {/*    </div>*/}
                {/*    <div className={style.dialog}>*/}
                {/*        <NavLink to={"/Dialogs/3"}>Sveta</NavLink>*/}
                {/*    </div>*/}
                {/*    <div className={style.dialog}>*/}
                {/*        <NavLink to={"/Dialogs/4"}>Sasha</NavLink>*/}
                {/*    </div>*/}
                {/*    <div className={style.dialog}>*/}
                {/*        <NavLink to={"/Dialogs/5"}>Victor</NavLink>*/}
                {/*    </div>*/}
                {/*    <div className={style.dialog}>*/}
                {/*        <NavLink to={"/Dialogs/6"}>Valera</NavLink>*/}
                {/*    </div>*/}
                </div>
                <div className={style.messages}>
                    <Message message={"Hi"}/>
                    <Message message={"How are it-kamasutra"}/>
                    <Message message={"Yo man!"}/>
                    <Message message={"Yo man!"}/>
                    <Message message={"Yo man!"}/>
                    {/*<div className={style.dialog}>Hi</div>*/}
                    {/*<div className={style.dialog}>How are it-kamasutra</div>*/}
                    {/*<div className={style.dialog}>Yo man!</div>*/}

                </div>
            </div>

    );
};


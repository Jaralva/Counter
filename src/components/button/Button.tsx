import React from "react";
import b from './Button.module.css'

type ButtonType = {

    callback: ()=> void
    title: string
    disable?: boolean
}



export const Button = (props: ButtonType) => {

    const onClickCallback = () =>{
        props.callback()
    }


    return (
        <>
            <button
                className={b.def}
                disabled={props.disable}
                    onClick={onClickCallback}>{props.title}</button>
        </>
    )
}
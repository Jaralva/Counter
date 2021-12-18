import React, {ChangeEvent} from "react";
import i from "./Input.module.css"

type InputType = {
    text: string
    callback: (num: number) => void
    error?: boolean
}


export const Input = ({text, callback, error, ...restProps}: InputType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        callback(Number(e.currentTarget.value))
    }

    return (
        <div>
            <span>{text}</span>
            <input className={error ? i.err : ''} type={"number"} onChange={onChangeHandler}/>
        </div>
    )
}
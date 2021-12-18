import React from "react";
import {Button} from "./components/button/Button";
import {Input} from "./components/input/Input";

type SetingsType = {
    setmaxnumber: () => void
    setstartnumber: () => void
    setsetings: () => void
}

export const Setings = (props: SetingsType) => {

    const setMaxNumber = () => {
        props.setmaxnumber()
    }
    const setStartNumber = () => {
        props.setstartnumber()
    }

    return (
        <>

        </>
    )

}

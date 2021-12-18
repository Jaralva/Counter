import React, {useState} from 'react';
import a from './App.module.css';
import {Button} from "./components/button/Button";
import {Input} from "./components/input/Input";

function App() {

    let [number, setNumber] = useState(0)
    let [maxNumber, setMaxNumber] = useState(5)
    let [startNumber, setStartNumber] = useState(0)
    let [guide, setGuide] = useState('')
    let [page, setPage] = useState(true)

    let errorSettings = startNumber < 0 || maxNumber <= startNumber

    const resetNumber = () => {
        setNumber(startNumber)
    }

    const increaseNumber = () => {
        setNumber(number + 1)
    }

    const setSetings = () => {
        setPage(true)
        setGuide('')
        setNumber(startNumber)
    }

    const setMaxNumberHandler = (numM: number) => {
        setMaxNumber(numM)
        setGuide('Enter values and press "Set"')
        setNumber(0)
    }

    const setStartNumberHandler = (numS: number) => {
        setStartNumber(numS)
        setGuide('Enter values and press "Set"')
        setNumber(0)
    }

    const setPageHandler = () => {
        setPage(false)
    }

    const output = () => {
        if (startNumber < 0 || maxNumber <= startNumber){
            return (
                <div className={a.dis}>Invalid Value</div>
            )
        } else if (guide) {
            return (
                <div className={a.def}>{guide}</div>
            )
        } else {
            return (
            <div className={number < maxNumber ? a.def : a.dis}>
                {number}
            </div>
            )
        }
    }



    return (
        <div>
            { page ? <div className={a.App}>
                {output()}
                <div>
                    <Button
                        disable={number >= maxNumber}
                        title={'Inc'}
                        callback={increaseNumber}
                    />
                    <Button
                        title={'Reset'}
                        callback={resetNumber}/>
                    <Button callback={setPageHandler} title={'Set'}/>
                </div>
            </div>
            :<div className={a.App}>
                <div>
                    <Input text={'max value:'} callback={setMaxNumberHandler} error={maxNumber <= startNumber}/>
                    <Input text={'start value:'} callback={setStartNumberHandler} error={errorSettings}/>
                </div>
                <div>
                    <Button callback={setSetings} title={'Set'} disable={errorSettings}/>
                </div>
            </div> }
        </div>
    );
}

export default App;

import './App.css';
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FaDice, FaDiceFive, FaDiceFour, FaDiceOne, FaDiceSix, FaDiceThree, FaDiceTwo} from "react-icons/fa";
import Box from "./components/Box";
import {oneStep} from "./features/playerOne";
import {twoStep} from "./features/playerTwo";

function App() {

    const disp = useDispatch()
    const [randNum, setRandNum] = useState(0)
    const [oneTwo, setOneTwo] = useState(true)
    const {numbers} = useSelector(state => state.nums.value)
    const one = useSelector(state => state.one.value)
    const two = useSelector(state => state.two.value)

    function randomNum() {
        const num = Math.floor(Math.random() * 6) + 1
        setRandNum(num)
        oneTwo ? disp(oneStep(num)) : disp(twoStep(num))
        setOneTwo(!oneTwo)
        setTimeout(() => {
            setRandNum(0)
        }, 1200)
    }

    function dice() {
        if (randNum === 1) return <FaDiceOne/>
        if (randNum === 2) return <FaDiceTwo/>
        if (randNum === 3) return <FaDiceThree/>
        if (randNum === 4) return <FaDiceFour/>
        if (randNum === 5) return <FaDiceFive/>
        if (randNum === 6) return <FaDiceSix/>
    }


    return (
        <>
            {(one.money >= 0 && two.money >= 0) && <div className={'dices'}>
                <div className={'dice'} style={{color: oneTwo ? 'red' : "blue"}} onClick={randomNum}>
                    <FaDice/>
                </div>
                <div>

                </div>
                <div className="dice" style={{color: !oneTwo ? 'red' : "blue"}}>
                    {dice()}
                </div>
            </div>}
            <div className={'money'}>
                <h3 style={{color: "red"}}>{one.money >= 0 ? "Money: " + one.money : 'Game Over'}</h3>
                <h3 style={{color: "blue"}}>{two.money >= 0 ? "Money: " + two.money : 'Game Over'}</h3>
            </div>
            <div className="road">
                {numbers.map((x, i) => <Box key={i} number={x.number} price={x.prise} oneTwo={oneTwo}/>)}
            </div>
        </>
    );
}

export default App;

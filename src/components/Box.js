import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getOneMoney, loseOneMoney, oneBuy} from "../features/playerOne";
import {getTwoMoney, loseTwoMoney, twoBuy} from "../features/playerTwo";

const Box = ({number, oneTwo, price}) => {
    const one = useSelector(state => state.one.value)
    const two = useSelector(state => state.two.value)
    const disp = useDispatch()

    useEffect(() => {
        if (one.items.includes(number) && two.step === number) {
            disp(getOneMoney(price * .5))
            disp(loseTwoMoney(price * .5))
            console.log('a')
        }
    }, [two.step])

    useEffect(()=> {
        if (two.items.includes(number) && one.step === number) {
            disp(loseOneMoney(price * .5))
            disp(getTwoMoney(price * .5))
            console.log('b')
        }
    }, [one.step])

    function buyItem() {
        if (oneTwo) {
            if (one.money >= price && !one.items.includes(number)) disp(oneBuy({price, number}))
        } else {
            if (two.money >= price && !two.items.includes(number)) disp(twoBuy({price, number}))
        }
    }

    function checkPosition() {
        return !one.items.includes(number) && !two.items.includes(number)
            && (oneTwo ? one.step === number : two.step === number)
    }

    function checkColor() {
        if (one.items.includes(number)) return '#ff8585'
        if (two.items.includes(number)) return 'rgba(141,130,255,0.64)'
    }

    return (
        <div id={number} className={'box'}
             style={{
                 backgroundColor: number === 0 ? '' : checkColor() ? checkColor() : "rgba(2,2,2,.1)",
             }}>
            <div className="playerOne" style={{
                backgroundColor: number === 0 ? '' : "red",
                display: one.step === number ? 'flex' : "none"
            }}/>
            <div className="playerTwo" style={{
                backgroundColor: number === 0 ? '' : "blue",
                display: two.step === number ? 'flex' : "none"
            }}/>
            {number !== 0 && <div>
                <h6 style={{
                    margin: '0'
                }}>Price: {price}</h6>
                {checkPosition() && <button onClick={() => buyItem(number)}>Buy</button>}
            </div>}
        </div>
    );
};

export default Box;
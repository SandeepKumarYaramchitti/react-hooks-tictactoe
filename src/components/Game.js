import React, {useState} from 'react'
import { Helper} from '../helper'
import {Board} from './Board'

export const Game = () => {

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = Helper(history[stepNumber]);
    const XO = xIsNext ? "X" : "O";
    
    const handleClick = (index) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        //return if won or occupied
        if (winner || squares[index]) return;
    }
    return (
        <div>
            
        </div>
    )
}

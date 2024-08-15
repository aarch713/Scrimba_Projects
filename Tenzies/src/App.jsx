import React from 'react'
import {useState, useEffect} from 'react'
import './App.css'
import Counter from "./Components/Counter.jsx"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import Die from './Components/Die.jsx'
export default function App (){
    const [dice,setDice] = useState(newDice())
    const [tenzies, setTenzies] = useState(false)
    const [isStart,setIsStart] = useState(false)
    const [time, setTime] = useState(0)
        
    
    function monitor() {
        const anyHeld = dice.some(die => die.isHeld);
        setIsStart(anyHeld);
    }


    useEffect(() => {
        const firstVal = dice[0].value;
        const allHeld = dice.every(die => die.isHeld);
        const allSame = dice.every(die => die.value === firstVal);
        if (allHeld && allSame) {
            setTenzies(true);
            setIsStart(false);
        } else {
            monitor();
        }
    }, [dice]);

    useEffect(() => {
        let interval;
        if (isStart) {
            
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 10);
        } else if (!isStart && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isStart]);

    function newDice(){
        const newDice =[]
        for(let i = 0; i < 10; i++){
            newDice.push(
                createNewDie()
            )
        
        }
        return newDice;
    }

    function createNewDie(){
        return {
            id:nanoid(),
            value:getRandomNum(),
            isHeld:false
        }
    }

    function getRandomNum (){
        return Math.ceil(Math.random() * 6)
    }
    const [countC,setCountC] = useState(0)
    function reRollDice(){
        setCountC(old => {return old+1})
        if(tenzies){
            setTenzies(false)
            setDice(newDice())
            setCountC(0)
            
            setTime(0)
        }else{
            setDice(oldDice => oldDice.map (die =>{
                return die.isHeld? die:createNewDie()
            }
            ))
        }
        
    }

    function holdDice(id){

        setDice(old => old.map(die =>{
            return die.id === id? {...die, isHeld : !die.isHeld}:die
        }))
    }
    


    const diceEl = dice.map(die => (
        <Die
        key={die.id}
        value={die.value}
        isHeld = {die.isHeld}
        holdDice={() => holdDice(die.id)}
        />
    ))
    
    function countT(){
        if(isStart){
            setInterval(() => {
                return setTime(old=> {
                    old + 1
                })
            }, 1000);
        }
    }

    return(
        <main>
            {tenzies && <Confetti />}
            <Counter countC ={countC} countT ={time/100} />
            <section>
            <h1 className="title">Tenzies</h1>
            {tenzies ? <p className="desc">Congratulation! You've got Tenzies!</p> :<p className="desc">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p> }
            </section>
            
            <section className="Dice-con">
                {diceEl}
            </section>

            <button onClick={reRollDice} className="roll-btn">{tenzies? "New Game" : "Roll"}</button>

        </main>
    )
}
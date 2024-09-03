import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const TextChange = () => {

    const texts = ["Oi eu sou william "," OI, eu sou William "," Oi, eu sou William"];
    const [currentText, setCurrentText] = useState("");
    const [endValue, setEndValue] = useState(false);
    const [isForward, setIsForward] = useState(true);
    const [index, setIndex] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentText(texts[index].substring(0, endValue));
            if (isForward) {
                setEndValue((prev) => prev + 1);
            } else {
                setEndValue((prev) => prev - 1)
            }

            if(endValue > texts[index].length+10){
                setIsForward(false)
            }

            if(endValue < 2.1){
                setIsForward(true)
                setIndex((prev)=>prev&texts.length)
            }
        },  50);

        return ()=>clearInterval(intervalId)
    }, [endValue, isForward, index, texts])


    return (
        <div className='transtion ease duaretion-300'>{currentText}</div>
    )
}

export default TextChange
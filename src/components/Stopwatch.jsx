import React, { useState, useEffect } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
    const [seconds, setSeconds] = useState(0); // кількість секунд, які пройшли з моменту старту
    const [isActive, setIsActive] = useState(false); // чи активний таймер
    const [pausedTimes, setPausedTimes] = useState([]); // масив зберігає усі паузові часи
    const [showPausedTime, setShowPausedTime] = useState(false); // чи відображати паузові часи

    useEffect(() => {
        let interval; // якщо таймер активний кількість секунд збільшується на 1, якщо ні - відлік зупиняється

        if (isActive) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isActive]);

    const startTimer = () => {
        setIsActive(true); // таймер стартує
    };

    const pauseTimer = () => {
        setIsActive(false); // таймер зупиняється
        setPausedTimes(prevPausedTimes => [...prevPausedTimes, seconds]); // паузові часи додаються у масив
        setShowPausedTime(true); // виводимо паузові часи
    };

    const resetTimer = () => { // скидаємо таймер до 00:00:00
        setIsActive(false);
        setSeconds(0);
    };

    return (
        <div className='stopwatch'>
            <div className='buttons'>
                <button onClick={startTimer} className='start'></button>
                <button onClick={pauseTimer} className='pause'></button>
                <button onClick={resetTimer} className='reset'></button>
            </div>
            <div className='scoreboard'>
                <div className='timer'>
                    {`${String(Math.floor(seconds / 3600)).padStart(2, '0')}:${String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`}
                {/*передає у рядок години (ділить к-сть секунд на 3600 і заокруглює), хвили (попередній залишок ділимо на 60), секунди (залишок від ділення зігальної к-сті секунд на 60).
                padStart додає 0 перед числом, якщо воно з однієї цифри */}
                </div>
                <div className='pausedTimes'>
                    {pausedTimes.map((pausedTime, index) => ( // до кожного елементу у масиві додаємо pausedTime
                        <div key={index} className='pausedTime'>
                            {`${String(Math.floor(pausedTime / 3600)).padStart(2, '0')}:${String(Math.floor((pausedTime % 3600) / 60)).padStart(2, '0')}:${String(pausedTime % 60).padStart(2, '0')}`}
                            {/* кожні паузові часи перетворюються у рядок*/}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stopwatch
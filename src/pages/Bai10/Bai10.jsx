import { useEffect, useState } from "react";

const Bai10 = () => {
    const [second, setSecond] = useState(0);
    const [resetSecond, SetResetSecond] = useState(0);

    const [isRunning, setIsRunning] = useState(false);
    const handleOnChange = (e) => {
        const val = +e.target.value || 0;
        setSecond(val);
        SetResetSecond(val);
    }
    const handleStartButton = () => {
        if (second > 0) {
            setIsRunning(true);
        }
    }
    const handlePauseButton = () => {
        setIsRunning(false);
    }
    const handleResetButton = () => {
        setIsRunning(false);
        setSecond(resetSecond);
    }
    useEffect(() => {
        let timer = null;
        if (isRunning && second > 0) {
            timer = setInterval(() => {
                setSecond(second - 1);
                if (second - 1 === 0) {
                    clearInterval(timer);
                    setIsRunning(false);
                }
            }, 1000)
        }
        return () => {
            if (timer) {
                clearInterval(timer);
            }
        }
    }, [isRunning, second])
    return (
        <div className="bai10">
            <label className="input-second">
                <input type="text" onChange={(e) => handleOnChange(e)} value={resetSecond} />
            </label>
            <button onClick={handleStartButton}>Start</button>
            <button onClick={handleResetButton}>Reset</button>
            <button onClick={handlePauseButton}>Pause</button>
            {second && second > 0 ?
                <div>{second}</div>
                : <div>Hết giờ!</div>
            }
        </div>
    )
}

export default Bai10;
import { useState, useEffect } from "react";

const Bai4 = () => {
    const [time, setTime] = useState(new Date());
    const modifyTime = (time) => {
        const second = time.getSeconds().toString();
        const minute = time.getMinutes().toString();
        const hour = time.getHours().toString();
        if (second.length < 2) {
            second = '0' + second;
        }
        if (minute.length < 2) {
            minute = '0' + minute;
        }
        if (hour.length < 2) {
            hour = '0' + hour;
        }
        return `${hour}:${minute}:${second}`;
    }
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <div className="bai4">
            {time ? modifyTime(time) : '00:00:00'}
        </div>
    )
}

export default Bai4;
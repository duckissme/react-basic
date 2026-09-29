import { useState } from "react";

const Bai1 = () => {
    const [point, setPoint] = useState(0);
    const handleClickAdd = () => {
        setPoint(point + 1);
    }
    
    const handleClickSub = () => {
        setPoint(point - 1);
    }
    
    const handleClickReset = () => {
        setPoint(0);
    }

    return (
        <div className="bai1">
            <h1>Điểm: {point}</h1>
            <button onClick={handleClickAdd}>Tăng</button>
            <button onClick={handleClickSub}>Giảm</button>
            <button onClick={handleClickReset}>Reset</button>
        </div>
    )
}

export default Bai1;
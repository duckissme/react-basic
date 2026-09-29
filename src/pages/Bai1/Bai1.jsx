import { useState } from "react";

const Bai1 = () => {
    // Khởi tạo state point với giá trị ban đầu là 0, mỗi khi click nút tương ứng, giá trị point sẽ thay đổi
    const [point, setPoint] = useState(0);
    //Tăng giá trị point lên 1 khi click tăng
    const handleClickAdd = () => {
        setPoint(point + 1);
    }
    //Giảm giá trị point xuống 1 khi click giảm
    const handleClickSub = () => {
        setPoint(point - 1);
    }
    //Reset point về giá trị 0
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
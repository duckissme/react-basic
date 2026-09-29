import { useState } from "react";
import './Bai8.scss';

const Bai8 = () => {
    //Khởi tạo input1, input2 tương ứng giá trị nhập vào từ bàn phím 
    const [input1, setInput1] = useState();
    const [input2, setInput2] = useState();

    //Khởi tạo result để lưu kết quả
    const [result, setResult] = useState();

    //Sử dụng "+" trước các biến để biến đổi kiểu dữ liệu từ string sang number và thực hiện tính toán cơ bản
    const handleSum = () => {
        setResult(+input1 + +input2)
    }
    const handleSubtract = () => {
        setResult(+input1 - +input2)
    }
    const handleMultiply = () => {
        setResult(+input1 * +input2)
    }
    const handleDivision = () => {
        if(+input2 === 0){
            alert("Không thể chia cho 0");
            return;
        }
        setResult(+input1 / +input2);
    }
    return (
        <div className="bai8">
            <div>Simple Calculator</div>
            <div className="input-data">
                <input onChange={(e) => setInput1(e.target.value)} value={input1}></input>
                <input onChange={(e) => setInput2(e.target.value)} value={input2}></input>
            </div>
            <div className="calculate-button">
                <button onClick={handleSum}>+</button>
                <button onClick={handleSubtract}>-</button>
                <button onClick={handleMultiply}>x</button>
                <button onClick={handleDivision}>/</button>
            </div>
            <div className="result">{result}</div>
        </div>
    )
}


export default Bai8;
import { useEffect, useState } from "react";

const Bai10 = () => {
    //Khởi tạo second để lưu giữ liệu nhập vào
    const [second, setSecond] = useState(0);
    //Khởi tạo resetSecond để có thể gán lại giá trị ban đầu đã nhập mỗi khi nhấn reset
    const [resetSecond, SetResetSecond] = useState(0);
    //Khởi tạo biến boolean isRunning để kiểm tra bộ đếm ngược có đang chạy không
    const [isRunning, setIsRunning] = useState(false);

    //Hàm xử lý khi dữ liệu được nhập từ bàn phím
    const handleOnChange = (e) => {
        const val = +e.target.value || 0;
        setSecond(val);
        SetResetSecond(val);
    }
    //Hàm xử lý bắt đầu bộ đếm, nếu số giây nhập vào > 0 => isRunning được set true;
    const handleStartButton = () => {
        if (second > 0) {
            setIsRunning(true);
        }
    }

    //Xử lý dừng bộ đếm
    const handlePauseButton = () => {
        setIsRunning(false);
    }

    //Xử lý reset bộ đếm, gán second giá trị resetSecond
    const handleResetButton = () => {
        setIsRunning(false);
        setSecond(resetSecond);
    }
    
    //Khởi tạo useEffect để xử lý interval
    useEffect(() => {
        let timer = null;
        //Mỗi lần useEffect được gọi chạy lại, interval sẽ được khởi tạo mới và tiếp tục xử lý bộ đếm
        if (isRunning && second > 0) {
            timer = setInterval(() => {
                setSecond(second - 1);
                //Nếu giá trị second về 0 thì giải phóng interval và setIsRunning = false;
                if (second - 1 === 0) {
                    clearInterval(timer);
                    setIsRunning(false);
                }
            }, 1000)
        }

        //Giải phóng interval mỗi lần useEffect bị gọi chạy lại hoặc component unmount
        return () => {
            if (timer) {
                clearInterval(timer);
            }
        }
    }, [isRunning, second]) //Truyền vào 2 biến isRunning và second, nếu 1 trong 2 biến này thay đổi thì hàm useEffect
                            //mới sẽ được gọi và hàm useEffect cũ sẽ gọi hàm return để giải phóng interval cũ
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
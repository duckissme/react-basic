import { useState } from "react";
import './Bai2.scss';

const Bai2 = () => {
    //Khởi tạo giá trị background ban đầu là white
    const [color, setColor] = useState('white');
    //Khởi tạo hàm check cho từng nút, khi 1 nút được chấm sẽ set true để đánh dấu bôi đen đâm viền nút
    const [isClicked1, setIsClicked1] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);
    const [isClicked3, setIsClicked3] = useState(false);
    const [isClicked4, setIsClicked4] = useState(false);

    const handleColorChange = (newColor, buttonNumber) => {
        setIsClicked1(false);
        setIsClicked2(false);
        setIsClicked3(false);
        setIsClicked4(false);
        setColor(newColor);
        switch (buttonNumber) {
            case 1:
                setIsClicked1(true);
                break;
            case 2:
                setIsClicked2(true);
                break;
            case 3:
                setIsClicked3(true);
                break;
            case 4:
                setIsClicked4(true);
                break;
            default:
                break;
        }
    };
    return (
        <div className="bai2" style={{ backgroundColor: color }}>
            {/* Kiểm tra điều kiện isClick cho từng nút để xử lý css bôi đen viền nút nếu giá trị isClick = true */}
            <button className={`btn-1 ${isClicked1 ? 'clicked1' : ''}`} onClick={() => handleColorChange('red', 1)}>1</button>
            <button className={`btn-2 ${isClicked2 ? 'clicked2' : ''}`} onClick={() => handleColorChange('blue', 2)}>2</button>
            <button className={`btn-3 ${isClicked3 ? 'clicked3' : ''}`} onClick={() => handleColorChange('green', 3)}>3</button>
            <button className={`btn-4 ${isClicked4 ? 'clicked4' : ''}`} onClick={() => handleColorChange('yellow', 4)}>4</button>
        </div>
    )
}

export default Bai2;
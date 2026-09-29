import { useState, useEffect } from "react";

const Bai4 = () => {
    //Khởi tạo biến time lưu giá trị đối tượng Date biểu thị thời gian hiện tại
    const [time, setTime] = useState(new Date());

    //Xử lý lấy ra giờ/phút/giây và biến đổi thêm giá trị 0 vào trước nếu mỗi trường giờ/phút/giây nếu giá trị chỉ có 1 chữ số
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

    //Khởi tạo useEffect để khi render lần đầu sẽ được gọi tới
    useEffect(() => {
        //Sử dụng setInterval, cập nhật lại time sau mỗi 1s
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        //Khi đóng component hàm return được gọi để giải phóng interval, tránh chạy ngầm lãng phí tài nguyên
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="bai4">
            {time ? modifyTime(time) : '00:00:00'}
        </div>
    )
}

export default Bai4;
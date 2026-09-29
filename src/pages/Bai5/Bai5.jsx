import { useState } from 'react';
import './Bai5.scss';

const Bai5 = () => {
    //Khởi tạo các trường state nhập dữ liệu name/email/password
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //Khởi tạo state errors để lưu các lỗi xuất hiện
    const [errors, setErrors] = useState({});
    //Khởi tạo state isSuccess, làm điều kiện để hiển thị đăng ký thành công
    const [isSuccess, setIsSuccess] = useState(false);

    //validate dữ liệu
    const validate = () => {
        //Khởi tạo đối tượng newErrors để lưu các lỗi liên quan
        //Mỗi khi có lỗi sẽ thêm vào đối tượng 1 key là loại lỗi và value là thông tin lỗi
        const newErrors = {}
        if (!name.trim()) {
            newErrors.name = "Họ tên không được để trống";
        }
        //Regex xử lý email chứa @ và .
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            newErrors.email = "Email không được để trống";
        }
        else if (!emailRegex.test(email.trim())) {
            newErrors.email = 'Email không đúng định dạng (cần có @ và tên miền chứa dấu chấm)';
        }
        if (!password.trim()) {
            newErrors.password = "Password không được để trống";
        }
        else if (password.trim().length < 6) {
            newErrors.password = "Password phải có ít nhất 6 ký tự";
        }
        return newErrors;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const validateErrors = validate();
        if (Object.keys(validateErrors).length > 0) {
            setErrors(validateErrors);
            setIsSuccess(false);
            return;
        }
        setErrors({});
        setIsSuccess(true);
    }
    return (
        // Nếu mỗi trường có xuất hiện errors tương ứng thì hiển thị lỗi dưới ô input
        <form className="signup-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            {errors.name && errors.name.length > 0 ?
                <div className='error'>{errors.name}</div> : <></>}
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            {errors.email && errors.email.length > 0 ?
                <div className='error'>{errors.email}</div> : <></>}
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            {errors.password && errors.password.length > 0 ?
                <div className='error'>{errors.password}</div> : <></>}
            <button type="button" onClick={handleSubmit}>Sign Up</button>
            {/* Hiển thị đăng ký thành công nếu isSuccess = true */}
            {isSuccess ? <div className='is_success'>Đăng ký tài khoản thành công</div> : <></>}
        </form>
    );
};

export default Bai5;
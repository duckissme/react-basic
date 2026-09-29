import { useState } from 'react';
import './Bai5.scss';

const Bai5 = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        const newErrors = {}
        if (!name.trim()) {
            newErrors.name = "Họ tên không được để trống";
        }
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
            {isSuccess ? <div className='is_success'>Đăng ký tài khoản thành công</div> : <></>}
        </form>
    );
};

export default Bai5;
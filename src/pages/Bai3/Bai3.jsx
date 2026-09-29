import { useState } from "react";
import './Bai3.scss';

const Bai3 = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    return (
        <div className="bai3">
            <div className="question-1">
                <div className="btn-1">
                    <button onClick={() => setChecked1(!checked1)}>{checked1 ? 'Xem thêm' : 'Thu gọn'}</button>
                </div>
                <div className="content-1">
                    {!checked1 && `What's your name?`}
                </div>
            </div>
            <div className="question-2">
                <div className="btn-2">
                    <button onClick={() => setChecked2(!checked2)}>{checked2 ? 'Xem thêm' : 'Thu gọn'}</button>
                </div>
                <div className="content-2">
                    {!checked2 && `How old are you?`}
                </div>
            </div>
            <div className="question-3">
                <div className="btn-3">
                    <button onClick={() => setChecked3(!checked3)}>{checked3 ? 'Xem thêm' : 'Thu gọn'}</button>
                </div>
                <div className="content-3">
                    {!checked3 && `Where are you from?`}
                </div>
            </div>
        </div>
    )
}

export default Bai3;
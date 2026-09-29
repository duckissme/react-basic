import { useState } from "react";
import './Bai6.scss';

const Bai6 = () => {
    //Khởi tạo biến todo để lưu giá trị input nhập từ bàn phím
    const [todo, setTodo] = useState('');
    //Khởi tạo danh sách todo để hiển thị danh sách ra giao diện
    const [todoList, setTodoList] = useState([]);

    //Xử lý khi người dùng thêm todo vào danh sách todo
    const handleClickAdd = () => {
        //Chỉ xử lý khi giá trị todo không bị trống
        if (todo && todo.length > 0) {
            //Sử dụng toán tử 3 chấm để copy lại mảng cũ, đồng thời thêm todo mới để tạo thành một mảng mới
            setTodoList([...todoList, todo]);
            //Sau khi cập nhật mảng mới, reset todo về rỗng để ô input hiển thị trống
            setTodo('');
        }
    }
    //Xử lý xóa 1 todo theo index truyền vào
    const handleClickDelete = (deleteIndex) => {
        //Xử dụng filter để lọc ra các giá trị mới cho mảng mới với điều kiện bỏ giá trị có index trùng với index được truyền vào
        setTodoList(todoList.filter((_, index) => index !== deleteIndex));
    }
    return (
        <div className="bai6">
            <div className="input-todo">
                <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
                <button onClick={handleClickAdd}>Add</button>
            </div>
            <hr />
            <div className="list-todo">
                {/* Sử dụng render có điều kiện, nếu danh sách todo trống thì hiển thị "Chưa có dữ liệu" */}
                {
                    (todoList && todoList.length > 0) ?
                        todoList.map((item, index) => {
                            return (
                                <div key={`todo-${index}`} className="item-todo">
                                    {item}
                                    <button onClick={() => handleClickDelete(index)}>Delete</button>
                                </div>

                            )
                        })
                        :
                        <>Chưa có dữ liệu</>
                }
            </div>
        </div>
    )
}

export default Bai6;
import { useState } from "react";
import './Bai7.scss';

const Bai7 = () => {
    //Khởi tạo biến todo để lưu giá trị input nhập từ bàn phím
    const [todo, setTodo] = useState('');
    //Khởi tạo danh sách todo để hiển thị danh sách ra giao diện
    const [todoList, setTodoList] = useState([]);
    //Khởi tạo số lượng task chưa hoàn thành để hiển thị giao diện số lượng task chưa xong
    const [incompleteTask, setIncompleteTask] = useState(0);
    //Khởi tạo id tương ứng cho mỗi todo
    const [id, setId] = useState(0);

    //Xử lý khi thêm todo vào danh sách
    const handleClickAdd = () => {
        //Chỉ xử lý khi giá trị todo không bị trống
        if (todo && todo.length > 0) {
            //Khi 1 todo được thêm mới thì số lượng task chưa xong sẽ tăng lên 1
            setIncompleteTask(incompleteTask + 1);
            //Cập nhật đối tượng todo mới vào danh sách todo với các trường thuộc tính id, to_do, is_incompleted
            setTodoList([...todoList,
            {
                id: id,
                to_do: todo,
                is_incompleted: true
            }
            ]);
            //Cập nhật lại todo sang trống để hiển thị input trống cho lượt thêm kế tiếp
            setTodo('');
            //Tăng giá trị id lên 1 để không trùng id giữa từng todo
            setId(id + 1);
        }
    }

    //Xử lý xóa 1 todo theo index truyền vào
    const handleClickDelete = (deleteIndex) => {
        //Xử dụng filter để lọc ra các giá trị mới cho mảng mới với điều kiện bỏ giá trị có index trùng với index được truyền vào
        setTodoList(todoList.filter((item) => {
            if (item.id !== deleteIndex) return true;

            //item bị loại khỏi mảng, nếu thuộc tính is_incompleted = true thì giảm số lượng task chưa xong đi 1
            else {
                item.is_incompleted && setIncompleteTask(incompleteTask - 1);
                return false;
            }
        }));
    }

    //Xử lý click hoàn thành công việc cho todo tương ứng thông qua id 
    const handleClickCheckbox = (index) => {

        //Sử dụng map để cập nhật lại danh sách todo
        setTodoList(todoList => todoList.map((item) => {
            //Trường hợp trùng index, nếu giá trị is_incompleted trước khi click checkbox là false (task đã xong)
            //Thì sau khi nhấn checkbox, giá trị is_incompleted sẽ cập nhật true (task chưa xong) => số lượng task chưa xong tăng 1
            //Và ngược lại với trường hợp is_incompleted trước khi click checkbox là true
            if (item.id === index) {
                //Sử dụng toán tử 3 ngôi để cập nhật giá trị
                !item.is_incompleted ? setIncompleteTask(incompleteTask + 1) : setIncompleteTask(incompleteTask - 1)

                //Cập nhật lại giá trị is_incompleted khi nhấn checkbox
                return {
                    ...item,
                    is_incompleted: !item.is_incompleted
                }
            }
            return item;
        }))
    }

    return (
        <div className="bai7">
            <div className="input-todo">
                <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
                <button onClick={handleClickAdd}>Add</button>
            </div>
            <hr />
            {/* Sử dụng render có điều kiện, nếu danh sách todo trống thì hiển thị "Chưa có dữ liệu" */}
            <div className="list-todo">
                {
                    (todoList && todoList.length > 0) ?
                        todoList.map((item) => {
                            return (
                                <div key={`todo-${item.id}`} className="item-todo">
                                    <div style={{ textDecoration: !item.is_incompleted ? 'line-through' : 'none' }}>{item.to_do}</div>
                                    <input type="checkbox" onClick={() => handleClickCheckbox(item.id)} />
                                    <button onClick={() => handleClickDelete(item.id)}>Delete</button>
                                </div>

                            )
                        })
                        :
                        <>Chưa có dữ liệu</>
                }
            </div>
            <div className="incompleted-todo">Số lượng việc chưa hoàn thành: {incompleteTask}</div>
        </div>
    )
}

export default Bai7;
import { useState } from "react";
import './Bai6.scss';

const Bai6 = () => {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    const handleClickAdd = () => {
        if (todo && todo.length > 0) {
            setTodoList([...todoList, todo]);
            setTodo('');
        }
    }
    const handleClickDelete = (deleteIndex) => {
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
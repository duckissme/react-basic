import { useState } from "react";
import './Bai7.scss';

const Bai7 = () => {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [incompleteTask, setIncompleteTask] = useState(0);
    const [id, setId] = useState(0);
    const handleClickAdd = () => {
        if (todo && todo.length > 0) {
            setIncompleteTask(incompleteTask + 1);
            setTodoList([...todoList,
            {
                id: id,
                to_do: todo,
                is_incompleted: true
            }
            ]);
            setTodo('');
            setId(id + 1);
        }
    }
    const handleClickDelete = (deleteIndex) => {
        setTodoList(todoList.filter((item) => {
            if(item.id !== deleteIndex) return true;
            else{
                item.is_incompleted && setIncompleteTask(incompleteTask - 1);
                return false;
            }
        }));
    }
    const handleClickCheckbox = (index) => {
        setTodoList(todoList => todoList.map((item) => {
            if(item.id === index){
                !item.is_incompleted ? setIncompleteTask(incompleteTask + 1) : setIncompleteTask(incompleteTask - 1)
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
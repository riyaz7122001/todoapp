const TodosList = ({ todos, setTodos }) => {
    const onCompleteHandler = ({ id, completed }) => {
        setTodos(prevTodos => prevTodos.map((item) => item.id === id ? { ...item, completed: !completed } : item))
    }
    const onEditHandler = () => { }

    const onDeleteHandler = ({ id }) => {
        setTodos(prevTodos => prevTodos.filter((item) => item.id !== id));
    }
    return (
        <div>
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input type="text" name="todoslist" id="todoslist" value={todo.title} className="list" onChange={(e) => e.preventDefault()} />
                    <div className="icons">
                        <button className="button-complete task-button" onClick={() => onCompleteHandler(todo)}>
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button className="button-edit task-button" onClick={() => onEditHandler()}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="button-delete task-button" onClick={() => onDeleteHandler(todo)}>
                            <i className="fa fa-trash"></i>
                        </button>
                        <p>{console.log('todo', todo.id)}</p>
                    </div>
                </li>
            ))
            }
        </div>
    )
}

export default TodosList
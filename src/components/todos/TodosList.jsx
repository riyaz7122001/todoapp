const TodosList = ({ todos, setTodos }) => {
    return (
        <div>
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input type="text" name="todoslist" id="todoslist" value={todo.title} className="list" onChange={(e) => e.preventDefault()} />
                    <div className="icons">
                        <button className="button-complete task-button">
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button className="button-edit task-button">
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="button-delete task-button">
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))
            }
        </div>
    )
}

export default TodosList
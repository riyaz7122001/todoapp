import { v4 as uuidv4 } from "uuid";

const Input = ({ input, setInput, todos, setTodos }) => {
    const formHandler = (event) => {
        event.preventDefault();
        setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
        setInput('');
    }

    const inputHandler = (event) => {
        setInput(event.target.value);
    }

    return (
        <form onSubmit={formHandler}>
            <input type="text" name="todo" id="todo" className="task-input" value={input} onChange={inputHandler} />
            <button type="submit" className="button-add">Add</button>
        </form>
    )
}

export default Input
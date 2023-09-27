import { useState } from 'react';
import './App.css'
import Header from './components/header/Header';
import Input from './components/input/Input';
import TodosList from './components/todos/TodosList';

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className='container'>
      <div className="app-wrapper">
        <Header />
        <Input input={input} setInput={setInput} todos={todos} setTodos={setTodos} />
        <TodosList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  )
}

export default App;

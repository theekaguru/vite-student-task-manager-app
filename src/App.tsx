import { useState } from 'react';
import type { Todo, FilterType } from './types/todo';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Filters from './components/Filters';
import './styles/App.scss';

function App() {
  const initialTodos: Todo[] = [
    { id: 1, text: 'Complete online JavaScript course', completed: true },
    { id: 2, text: 'Jog around the park 3x', completed: false },
    { id: 3, text: '10 minutes meditation', completed: false },
    { id: 4, text: 'Read for 1 hour', completed: false },
    { id: 5, text: 'Pick up groceries', completed: false },
    { id: 6, text: 'Complete Todo App on Frontend Mentor', completed: false }
  ];

  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [filter, setFilter] = useState<FilterType>('all');

  const addTodo = (text: string) => {
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false }
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const itemsLeft = todos.filter(todo => !todo.completed).length;

  return (
    <div className="app">
      <div className="app__header">
        <h1 className="app__title">TODO</h1>
      </div>
      <div className="app__container">
        <TodoInput onAddTodo={addTodo} />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
        <Filters
          currentFilter={filter}
          onFilterChange={setFilter}
          itemsLeft={itemsLeft}
          onClearCompleted={clearCompleted}
        />
      </div>
    </div>
  );
}

export default App;

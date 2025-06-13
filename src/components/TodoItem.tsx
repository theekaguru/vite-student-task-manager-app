import React from 'react';
import type { Todo } from '../types/todo';
import '../styles/TodoItem.scss';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <label className="todo-item__checkbox">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className="checkmark"></span>
      </label>
      <span className="todo-item__text">{todo.text}</span>
      <button
        className="todo-item__delete"
        onClick={() => onDelete(todo.id)}
      >
        ×
      </button>
    </div>
  );
};

export default TodoItem;

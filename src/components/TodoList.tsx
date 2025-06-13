import React from 'react';
import type { Todo } from '../types/todo';
import TodoItem from './TodoItem';
import '../styles/TodoList.scss';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
      {todos.length === 0 && (
        <div className="todo-list__empty">No todos yet. Add one above!</div>
      )}
    </div>
  );
};

export default TodoList;

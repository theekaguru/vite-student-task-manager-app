import { useState } from 'react';
import '../styles/TodoInput.scss';

// Define the props interface
interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

const TodoInput = ({ onAddTodo }: TodoInputProps) => {
  // State for the input field
  const [inputText, setInputText] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      onAddTodo(inputText.trim());
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Create a new todo..."
        className="todo-input__field"
      />
    </form>
  );
};

export default TodoInput;

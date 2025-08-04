// Define the shape of a todo item
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Define the possible filter types
export type FilterType = 'all' | 'active' | 'completed'; 
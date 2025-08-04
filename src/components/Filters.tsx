import React from 'react';
import type { FilterType } from '../types/todo';
import '../styles/Filters.scss';

interface FiltersProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  itemsLeft: number;
  onClearCompleted: () => void;
}

const Filters = ({
  currentFilter,
  onFilterChange,
  itemsLeft,
  onClearCompleted
}: FiltersProps) => {
  return (
    <div className="filters">
      <span className="filters__count">{itemsLeft} items left</span>
      <div className="filters__buttons">
        <button
          className={`filters__btn ${currentFilter === 'all' ? 'active' : ''}`}
          onClick={() => onFilterChange('all')}
        >
          All
        </button>
        <button
          className={`filters__btn ${currentFilter === 'active' ? 'active' : ''}`}
          onClick={() => onFilterChange('active')}
        >
          Active
        </button>
        <button
          className={`filters__btn ${currentFilter === 'completed' ? 'active' : ''}`}
          onClick={() => onFilterChange('completed')}
        >
          Completed
        </button>
      </div>
      <button className="filters__clear" onClick={onClearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default Filters;

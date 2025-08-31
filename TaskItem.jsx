import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

export default function TaskItem({ task, onToggleComplete, onDeleteTask }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200 mb-3">
      <div className="flex items-center gap-3">
        <input 
          type="checkbox"
          checked={task.completed} 
          onChange={() => onToggleComplete(task.id)} 
          className="mr-2 leading-tight w-4 h-4"
        />
        <div>
          <h3 className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
            {task.title}
          </h3>
          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
            {task.category}
          </span>
        </div>
      </div>
      
      <button 
        onClick={() => onDeleteTask(task.id)}
        className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded transition-colors"
      >
        <FaRegTrashAlt className="h-4 w-4" />
      </button>
    </div>
  );
}
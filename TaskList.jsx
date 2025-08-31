import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onToggleComplete, onDeleteTask }) {
  return (
    <>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
        />
      ))}
    {tasks.length === 0 && (
  <div className="text-center py-8 text-gray-500">
    No tasks yet. Add your first trading task above!
  </div>
)}
    </>
  );
}

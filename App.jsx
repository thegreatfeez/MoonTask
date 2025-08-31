import { useState } from 'react'
import AddTaskForm from './AddTaskForm'
import TaskList from './TaskList'

function App() {
    const [tasks, setTasks] = useState([])

    const handleAddTasks = (newTask) =>{
        setTasks([...tasks,newTask])
    }
    const handleToggleComplete = (taskId) => {
      setTasks(tasks.map(task => 
        task.id === taskId ? {...task, completed: !task.completed} : task
      ))
    }
    const handleDeleteTask = (taskId) => {
      setTasks(tasks.filter(task => task.id !== taskId))
    }

     return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          MoonTask Trading Tracker
        </h1>
        
        <AddTaskForm onAddTask={handleAddTasks} />
        
       <TaskList
       tasks={tasks}
       onToggleComplete={handleToggleComplete}
        onDeleteTask={handleDeleteTask}
       />
        <div className="mt-8">
          <p>Tasks added: {tasks.length}</p>
        </div>
      </div>
    </div>
  );
}

export default App

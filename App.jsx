import { useState } from 'react'
import AddTaskForm from './AddTaskForm'

function App() {
    const [task, setTask] = useState([])

    const handleAddTasks = (newTask) =>{
        setTask([...task,newTask])
    }
     return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          MoonTask Trading Tracker
        </h1>
        
        <AddTaskForm onAddTask={handleAddTasks} />
        
        {/* You'll add TaskList component here later */}
        
        {/* Temporary - just to see if tasks are being added */}
        <div className="mt-8">
          <p>Tasks added: {task.length}</p>
        </div>
      </div>
    </div>
  );
}

export default App

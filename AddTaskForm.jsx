import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { IoMdPricetag } from "react-icons/io"


export default function AddTaskForm({ onAddTask }){
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Buy Alert');

  function handleSubmit(e){
    e.preventDefault();

    if(!title.trim()) return;

    const newTask ={
        id: Date.now(),
        title: title.trim(),
        category,
        completed: false
    }

    onAddTask(newTask)

    setTitle('')
    setCategory('Buy Alert')
  }
  
  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
  <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
    <IoMdPricetag className="h-5 w-5 text-blue-500" />
    Add New Task
  </h2>
  
  <div className="space-y-4">
    
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Task Title
      </label>
      <input 
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="e.g., Check BTC price at $45k"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
      />
    </div>

  
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Category
      </label>
      <select 
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
      >
        <option value="Buy Alert">Buy Alert</option>
        <option value="Sell Alert">Sell Alert</option>
        <option value="Research">Research</option>
      </select>
    </div>

   
    <button 
      type="submit"
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-200 flex items-center justify-center gap-2"
    >
      <FaPlus className="h-4 w-4" />
      Add Task
    </button>
  </div>
</form>
  );
};
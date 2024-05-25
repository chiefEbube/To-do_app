import { useState } from "react";

import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

// import Form from "./components/Form"

const App = () => {
  const [newTask, setNewTask] = useState("");

  const [tasks, setTasks] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()

    setTasks(prevTasks => {
      return [
        ...prevTasks,
        {
          id: Date.now(),
          name: newTask,
          completed: false
        }
      ]
    }
    )

    setNewTask("")

  }

  return (
    <div className="pt-6 px-3 max-w-[350px] mx-auto">

      <h1 className="text-2xl font-semibold mb-4">
        Todo App
      </h1>



      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={newTask}
          className="bg-slate-200 pl-4 w-full h-14 rounded-lg"
          placeholder="Enter new task"
          onChange={e => setNewTask(e.target.value)}
        />

        <button
          className="bg-blue-600 p-5 ml-2 text-white rounded-lg hover:bg-blue-500">
          <FaPlus />
        </button>
      </form>




      <ul className="mt-8">
        {
          tasks.length === 0 && "No tasks added"
        }

        {
          tasks.map(task => {
            return (
              <li className="bg-slate-200 mt-4 p-4 h-14 rounded-lg flex items-center justify-between">

                <label className="text-md text-gray-800 flex items-center">

                  <input
                    type="checkbox"
                    className="w-6 h-6 mr-2 accent-blue-800" />

                  {task.name}

                </label>

                <button className="text-red-600 text-3xl"><MdDelete /></button>
              </li>
            )
          })
        }
      </ul>



    </div>
  )
}

export default App
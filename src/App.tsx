import Header from "./components/header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasksArray, setTasks] = useState([{
    id: 1,
    text: 'Meeting',
    day: 'Feb 6th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Food Shopping',
    day: 'Feb 5th at 1:30pm',
    reminder: false,
  },])

  const addTask = (task: any) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasksArray, newTask]);
  }

  // delete Tasks
  const deleteTask = (id: number) => {
    setTasks(tasksArray.filter((task) => task.id !== id));
  }

  const toggleReminder = (id: number) => {
    setTasks(
      tasksArray.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      ))

  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasksArray.length > 0 ?
        (<Tasks tasks={tasksArray} onDelete={deleteTask}
          onToggle={toggleReminder} />
        ) : ('No Tasks to Show')}
    </div>
  );
}


export default App;

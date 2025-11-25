import viteLogo from '/vite.svg'
import './App.css'
import Task from './components/Task'
import NewTaskForm from './components/NewTaskForm'
import TypeWriter from './components/TypeWriter'
import { useEffect, useState } from "react";

function App() {
 const [tasks, setTasks] = useState([]);
 // Use Django REST framework from local backend server
 // details: https://github.com/RafaelFloimayr/Aufgabenliste
 const url = "http://127.0.0.1:8000/tasks/";
 
 useEffect(() => {
    async function loadTasks() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP-Error: ${response.status}`);
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Fehler beim Laden:", error);
      }
    }
    loadTasks();
  }, []);
 return (
    <>
      <div style={{ display: "flex"}}>
      <h1>📝</h1>
      <TypeWriter texts={[{ text: "Aufgabenliste", color:"rot" }]} />
      </div>
      <div className="layout">
        <div className="column">
          <ul>
          {tasks.length ? tasks.map((t) => ( <Task url={url} setTasks={setTasks} task={t} /> )) : <li>Keine Einträge vorhanden.</li>}
          </ul>
        </div>
          <div className="column">
          <NewTaskForm url={url} setTasks={setTasks} />
          </div>
      </div>
    </>
  )
}

export default App

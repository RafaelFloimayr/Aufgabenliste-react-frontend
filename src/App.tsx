import './App.css'
import Task from './components/Task'
import NewTaskForm from './components/NewTaskForm'
import TypeWriter from './components/TypeWriter'
import { useEffect } from "react";
import store from './redux/store'
import {getNumberOfTasks, getTasks, setTasks} from './redux/tasksSlice'
import { useSelector, useDispatch } from "react-redux";
function App() {

 // Use Django REST framework from local backend server
 // details: https://github.com/RafaelFloimayr/Aufgabenliste
 const url = "http://127.0.0.1:8000/tasks/";
 const dispatch = useDispatch();
 const tasks = useSelector(getTasks);
 useEffect(() => {
    async function loadTasks() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP-Error: ${response.status}`);
        }
        const data = await response.json();
        dispatch(setTasks(data));
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
          {useSelector(getNumberOfTasks) ? tasks.map((t) => ( <Task key={t.id} url={url} task={t} /> )) : <li>Keine Einträge vorhanden.</li>}
          </ul>
        </div>
          <div className="column">
          <NewTaskForm url={url}/>
          </div>
      </div>
    </>
  )
}

export default App

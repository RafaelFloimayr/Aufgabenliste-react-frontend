import './App.css'
import Task from './components/Task'
import NewTaskForm from './components/NewTaskForm'
import TypeWriter from './components/TypeWriter'
import { useEffect, useState } from "react";
import store from './redux/store'
import {getNumberOfTasks, getTasks, setTasks} from './redux/tasksSlice'
import { useSelector, useDispatch } from "react-redux";
import useStyles from './App-jss';

function App() {
  // switch body style with JSS
  const classes = useStyles();
  const [isOn, setIsOn] = useState(true);
  useEffect(() => {
    document.body.className = isOn ? 'bodyStyle1' : 'bodyStyle2';
  }, [isOn]);
  
 // use Django REST framework from local backend server (see https://github.com/RafaelFloimayr/Aufgabenliste)
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
          <ul className={isOn ? classes.taskListStyle1 : classes.taskListStyle2}>
          {useSelector(getNumberOfTasks) ? tasks.map((t) => ( <Task key={t.id} url={url} task={t} /> )) : <li>Keine Einträge vorhanden.</li>}
          </ul>
        </div>
          <div className="column">
          <NewTaskForm url={url}/>
          </div>
      </div>
      <div className={`theme-toggle ${isOn ? 'on' : 'off'}`} onClick={() => setIsOn(!isOn)} />
    </>
  )
}

export default App

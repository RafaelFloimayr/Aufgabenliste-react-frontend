import { useDispatch } from "react-redux";
import {setTasks} from '../redux/tasksSlice'
import {deleteTask, updateTask} from '../redux/tasksSlice'

interface TaskProps
{
    url : string
    task: {id: int, name: string, status: boolean}
}

async function deleteItem(url, itemId, dispatch) {
  try {
      const response = await fetch(`${url}${itemId}/`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error(`Fehler beim Löschen: ${response.status}`);
      }
  
      console.log(`Task ${itemId} erfolgreich gelöscht`);

      dispatch(deleteTask(itemId));

    } catch (error) {
      console.error("Fehler beim Löschen:", error);
    }
}

async function toggleItemDone(url, task, itemDone, dispatch) {
  const response = await fetch(`${url}${task.id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ item_done: itemDone }),
  });

  if (!response.ok) {
    throw new Error(`Fehler: ${response.status}`);
  } else {
      const updatedTask = await response.json();

      //redux state:
      dispatch(updateTask(updatedTask));
  }
}

function Task({url, task} : TaskProps) {
  //redux state:
  const dispatch = useDispatch();
  return (
    <>
        <li id={`item-${task.id}`} className="item-row">
            <span className="item-col id"> #{task.id}</span>
            <span className="item-col name"> <strong>{task.item_name}</strong> </span>
            <span className="item-col status {task.item_done}">
            <input type="checkbox" id={`todo${task.id}`} checked={task.item_done} onChange={(e)=>toggleItemDone(url, task, e.target.checked, dispatch)}/>
            <label htmlFor={`todo${task.id}`}>{task.item_done ? "Erledigt" : "Offen" }</label>
            </span>
            <span className="item-col action"> 
              <button onClick={()=>deleteItem(url, task.id, dispatch)}>🗑️</button>
            </span>
        </li>
    </>
  )
}

export default Task

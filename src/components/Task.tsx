interface TaskProps
{
    url : string
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
    task: {id: int, name: string, status: boolean}
}

async function deleteItem(url, setTasks, itemId) {
  try {
      const response = await fetch(`${url}${itemId}/`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error(`Fehler beim Löschen: ${response.status}`);
      }
  
      console.log(`Task ${itemId} erfolgreich gelöscht`);
      // Optional: State aktualisieren
      setTasks((prev) => prev.filter((t) => t.id !== itemId));
    } catch (error) {
      console.error("Fehler beim Löschen:", error);
    }
}

async function toggleItemDone(url, task, itemDone, setTasks) {
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
      setTasks((prev) => prev.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
  }
}

function Task({url, setTasks, task} : TaskProps) {
  return (
    <>
        <li id={`item-${task.id}`} className="item-row">
            <span className="item-col id"> #{task.id}</span>
            <span className="item-col name"> <strong>{task.item_name}</strong> </span>
            <span className="item-col status {task.item_done}">
            <input type="checkbox" id={`todo${task.id}`} checked={task.item_done} onChange={(e)=>toggleItemDone(url, task, e.target.checked, setTasks)}/>
            <label htmlFor={`todo${task.id}`}>{task.item_done ? "Erledigt" : "Offen" }</label>
            </span>
            <span className="item-col action"> 
              <button onClick={()=>deleteItem(url, setTasks, task.id)}>🗑️</button>
            </span>
        </li>
    </>
  )
}

export default Task

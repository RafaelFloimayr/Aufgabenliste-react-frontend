import { useState } from "react";
import { useDispatch } from "react-redux";
import {addTask} from '../redux/tasksSlice'

interface NewTaskProps
{
    url : string
}

function NewTaskForm({ url } : NewTaskProps) {
  const [title, setTitle] = useState("");
  
  //redux state:
  const dispatch = useDispatch();
  
  const handleSubmit = async (e) => {
    e.preventDefault(); // verhindert Seitenreload

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item_name: title, item_done: false }),
      });

      if (!response.ok) {
        throw new Error(`HTTP-Error: ${response.status}`);
      }

      const newTask = await response.json();
      
      dispatch(addTask(newTask));

      // Eingabefeld zurücksetzen
      setTitle("");
    } catch (error) {
      console.error("Fehler beim Erstellen:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Aufgabe</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Neue Aufgabe..."
        required />
    </form>
);
}

export default NewTaskForm
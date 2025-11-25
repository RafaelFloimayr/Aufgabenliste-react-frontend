import { useState } from "react";

interface NewTaskProps
{
    url : string
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
}



function NewTaskForm({ url, setTasks } : NewTaskProps) {
  const [title, setTitle] = useState("");

  async function handleSubmit(e) {
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

      // State sofort aktualisieren
      setTasks((prev) => [...prev, newTask]);

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
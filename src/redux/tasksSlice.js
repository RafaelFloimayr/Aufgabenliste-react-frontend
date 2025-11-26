import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
  name: 'taskState',
  initialState: {
    tasks: [],
  },
  reducers: {
    setTasks: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      
      // state is here slice‑state: ({ tasks: [] })
      state.tasks = action.payload
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload); // id
    },
    updateTask: (state, action) => {
      state.tasks = state.tasks.map((t) => (t.id === action.payload.id ? action.payload : t)); // updatedTask
    },
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    }
  },
})

// Action creators are generated for each case reducer function
export const { setTasks, deleteTask, updateTask, addTask } = tasksSlice.actions
export default tasksSlice.reducer

// getter
export const getNumberOfTasks = (state) => state.taskState.tasks.length
export const getTasks = (state) => state.taskState.tasks
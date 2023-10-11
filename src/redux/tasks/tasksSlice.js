import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  taskItems: [],
  filter: "all",
};


const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state,action) => {
      state.taskItems = [...state.taskItems, action.payload];
    },
    editTask: (state,action) => {
      state.taskItems = action.payload;
    },
  },
});

export const tasksReducer = tasksSlice.reducer;

export const {addTask, deleteTask, editTask} = tasksSlice.actions;

import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  taskItems: [],
};


const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state,action) => {
      state.taskItems = [...state.taskItems, action.payload];
    },
    deleteTask: (state,action) => {
      state.taskItems = action.payload;
    },
    editTask: (state,action) => {
      state.taskItems = action.payload;
    },
  },
});

export const tasksReducer = tasksSlice.reducer;

export const {addTask, deleteTask, editTask} = tasksSlice.actions;

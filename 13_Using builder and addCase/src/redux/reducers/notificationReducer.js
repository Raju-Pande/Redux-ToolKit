import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./todoReducer";
import { noteActions } from "./noteReducer";

const initialState = {
  message: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.message = "";
    },
  },
  // extraReducers:{
  //     "todo/add":(state, action)=>{
  //       state.message="Todo is created";
  //     },
  //   "note/add":(state, action)=>{
  //       state.message="Todo is created";
  //     },
  //     "note/delete":(state, action)=>{
  //       state.message="Todo is created";
  //     }
  // }
  extraReducers: (builder) => {
    builder.addCase(actions.add, (state, action) => {
      state.message = "Todo is created";
    });
    builder.addCase(noteActions.add, (state, action) => {
      state.message = "Note is created";
    });
    builder.addCase(noteActions.delete, (state, action) => {
      state.message = "Note is deleted";
    });
  },
});

export const notificationReducer = notificationSlice.reducer;

export const resetNotification = notificationSlice.actions.reset;

export const notificationSelector = (state) =>
  state.notificationReducer.message;

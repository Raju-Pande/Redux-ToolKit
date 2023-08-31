const { createSlice } = require("@reduxjs/toolkit");

const INITIAL_STATE = {
  message: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: {
    "todo/add": (state, action) => {
      state.message = "Todo is created";
    },
    "note/add": (state, action) => {
      state.message = "Note is created";
    },
    "note/delete": (state, action) => {
      state.message = "Note is deleted";
    },
  },
});

export const notificationReducer = notificationSlice.reducer;

export const notificationSelector = (state) =>
  state.notificationReducer.message;

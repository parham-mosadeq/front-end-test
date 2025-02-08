import { createSlice } from "@reduxjs/toolkit";
import { SiloState } from "./silo-slice.types";
import { REDUX_SILO_SLICE_NAME } from "@/constants";

const initialState: SiloState = {
  status: "free",
  timeLeft: 0,
};

const siloSlice = createSlice({
  name: REDUX_SILO_SLICE_NAME,
  initialState,
  reducers: {
    reserveSilo: (state) => {
      state.status = "occupied";
      state.timeLeft = 15;
    },
    freeSilo: (state) => {
      state.status = "free";
      state.timeLeft = 0;
    },
    decrementTime: (state) => {
      if (state.timeLeft > 0) {
        state.timeLeft -= 1;
        if (state.timeLeft === 0) {
          state.status = "free";
        }
      }
    },
  },
});

const { reserveSilo, freeSilo, decrementTime } = siloSlice.actions;
const siloSliceReducer = siloSlice.reducer;

export { reserveSilo, freeSilo, decrementTime, siloSliceReducer };

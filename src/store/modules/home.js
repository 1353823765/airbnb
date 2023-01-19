import { getHomeGoodPriceData } from "@/services/modules/home";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchHomeDataAction = createAsyncThunk("fetchData", async () => {
  const res = await getHomeGoodPriceData();

  return res;
});

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPrice: {},
  },
  reducers: {
    changeGoodPriceInfoAcion(state, { payload }) {
      state.goodPrice = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeDataAction.fulfilled, (state, action) => {
      console.log(action.payload);
      state.goodPrice = action.payload;
    });
  },
});
export const { changeGoodPriceInfoAcion } = homeSlice.actions;
export { fetchHomeDataAction };

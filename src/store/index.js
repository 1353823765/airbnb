import {configureStore} from "@reduxjs/toolkit"
import { homeSlice } from "./modules/home"
 import {rootRouter} from "./entire/index"
export const store=configureStore({
    reducer:{
        homeReducer:homeSlice.reducer,
        rootRouter
    }
}) 
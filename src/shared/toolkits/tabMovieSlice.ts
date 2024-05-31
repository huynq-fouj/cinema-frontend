import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TabMovieType } from "../types/TabMovieType";

type TabMovieState = {
    value: TabMovieType,
};

const initialState: TabMovieState = {
    value: TabMovieType.NOW,
};

const tabMovieSlice = createSlice({
    name: 'tabMovie',
    initialState,
    reducers: {
        setTabMovie: (state, action: PayloadAction<TabMovieType>) => {
            state.value = action.payload;
        }
    }
});

export const { setTabMovie } = tabMovieSlice.actions;
export default tabMovieSlice.reducer;
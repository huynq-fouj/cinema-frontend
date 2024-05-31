import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type WatchTrailerType = {
    visible: boolean;
    url: string;
}

const initialState: WatchTrailerType = {
    visible: false,
    url: '',
};

const watchTrailerSlice = createSlice({
    name: 'trailer',
    initialState,
    reducers: {
        setOptionTrailer: (state, action: PayloadAction<WatchTrailerType>) => {
            state.url = action.payload.url;
            state.visible = action.payload.visible;
        }
    }
});

export const { setOptionTrailer } = watchTrailerSlice.actions;
export default watchTrailerSlice.reducer;
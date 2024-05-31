import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Seat } from "../interfaces/Seat";

type SelectedSeatState = {
    selectedSeat: Seat[],
}

const initialState: SelectedSeatState = {
    selectedSeat: [],
};

const seatSlice = createSlice({
    name: 'seat',
    initialState,
    reducers: {
        setSelectedSeat: (state, action: PayloadAction<Seat>) => {
            const newSelectedSeat: Seat[] = [...state.selectedSeat];
            const index = newSelectedSeat.findIndex(item => item.id === action.payload.id);
            if(index === -1) newSelectedSeat.push(action.payload);
            else newSelectedSeat.splice(index, 1);
            state.selectedSeat = newSelectedSeat;
        },
        clearSelectedSeat: state => {
            state.selectedSeat = [];
        }
    }
});

export const { setSelectedSeat, clearSelectedSeat } = seatSlice.actions;
export default seatSlice.reducer;
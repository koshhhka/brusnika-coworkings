// features/booking/bookingSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addDays, formatISO } from 'date-fns';

interface BookingState {
    selectedDate: string | null;
    emails: string[];
    selectedCoworking: string | null;
    selectedHours: { start: string; end: string } | null;
    selectedSeats: string[];
}

const initialState: BookingState = {
    selectedDate: formatISO(addDays(new Date(), 1), { representation: 'date' }), // Завтрашняя дата по умолчанию
    emails: [],
    selectedCoworking: null,
    selectedHours: null,
    selectedSeats: [],
};

export const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        setDate: (state, action: PayloadAction<string>) => {
            state.selectedDate = action.payload;
        },
        addEmail: (state, action: PayloadAction<string>) => {
            const email = action.payload.trim();
            if (email && !state.emails.includes(email)) {
                state.emails.push(email);
            }
        },
        removeEmail: (state, action: PayloadAction<string>) => {
            state.emails = state.emails.filter(email => email !== action.payload);
        },
        clearEmails: (state) => {
            state.emails = [];
        },
        setCoworking: (state, action: PayloadAction<string>) => {
            state.selectedCoworking = action.payload;
        },
        setHours: (state, action: PayloadAction<{ start: string; end: string }>) => {
            state.selectedHours = action.payload;
        },
        setSeats: (state, action: PayloadAction<string[]>) => {
            state.selectedSeats = action.payload;
        },
        resetBooking: (state) => {
            Object.assign(state, {
                ...initialState,
                selectedDate: formatISO(addDays(new Date(), 1), { representation: 'date' }),
            });
        },
    },
});

export const {
    setDate,
    addEmail,
    removeEmail,
    clearEmails,
    setCoworking,
    setHours,
    setSeats,
    resetBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;
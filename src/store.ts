// import { configureStore } from '@reduxjs/toolkit';
//
// const initialState = {
//     booking: {
//         date: null,
//         emails: [],
//         coworkingId: null,
//     },
// };
//
// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'SET_DATE':
//             return { ...state, booking: { ...state.booking, date: action.payload } };
//         case 'ADD_EMAIL':
//             return { ...state, booking: { ...state.booking, emails: [...state.booking.emails, action.payload] } };
//         default:
//             return state;
//     }
// };
//
// export const store = configureStore({
//     reducer: rootReducer,
// });
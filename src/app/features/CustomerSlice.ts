// import {createSlice} from '@reduxjs/toolkit';
// import type {PayloadAction} from '@reduxjs/toolkit';
// import {RootState} from '../store';

// interface Customer {
//   id: string;
//   name: string;
//   food: string[];
// }

// interface CustomerProps {
//   value: Customer[];
// }
// const initialState: CustomerProps = {
//   value: [],
// };

// export const CustomerSlice = createSlice({
//   name: 'customer',
//   initialState,
//   reducers: {
//     addCustomer: (state: RootState, action: PayloadAction<Customer>) => {
//       state.value.push(action.payload);
//     },
//   },
// });

// export const  { CustomerSlice } = CustomerSlice.action;
// export default CustomerSlice.reducer;
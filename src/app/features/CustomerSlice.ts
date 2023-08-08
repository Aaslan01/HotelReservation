import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface Customer {
  id: string;
  name: string;
  food: string[];
}

interface CustomerProps {
  value: Customer[];
}
const initialState: CustomerProps = {
  value: [],
};

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
  },
});

export const {} = customerSlice.actions;
export default customerSlice.reducer;

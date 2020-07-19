import {createSlice} from '@reduxjs/toolkit';

const pointsSlice = createSlice({
  name: 'points',
  initialState: 0 as number,
  reducers: {},
});

export const samplePoints = 25903.36;

export default pointsSlice;

import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Matt Hook' },
  { id: '1', name: 'Who Name' },
  { id: '2', name: 'Maybe Me' }
]

const usersSlice = createSlice({
  name: 'users', 
  initialState,
  reducers: {}
})

export default usersSlice.reducer
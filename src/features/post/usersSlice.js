import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', name: 'Fernando de Paula' },
  { id: '2', name: 'Marcelo Campos Santos' },
  { id: '3', name: 'Livia Mara' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
})

export default usersSlice.reducer

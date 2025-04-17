import { createSlice } from '@reduxjs/toolkit'


export interface UserState {
  name: string,
  email: string,
  role: string,
  isLoading: boolean,
  isError: boolean,
  error: string,
}

const initialState : UserState = {
  name: '',
  email: '',
  role: '',
  isLoading: true,
  isError: false,
  error: '',
}



export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {}


})
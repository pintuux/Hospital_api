import {createSlice} from '@reduxjs/toolkit'
const INITIAL_STATE = {isSigned:false,closebtn:false};


const signinSlice = createSlice({
    name:'signin',
    initialState:INITIAL_STATE,
    reducers:{
        signIn:(state,action)=>{
            
            state.isSigned = !state.isSigned
            
            state.closebtn = true
        },
        signOut:(state,action)=>{
            state.isSigned = !state.isSigned
        },
        close:(state,action)=>{
            state.closebtn = false
        }
    }
})
export const siginReducer = signinSlice.reducer;
export const actions = signinSlice.actions;
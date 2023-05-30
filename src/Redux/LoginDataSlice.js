import { createSlice } from "@reduxjs/toolkit";




 const LoginDataSlice =createSlice({
    name:'LoginData',
    initialState:{
 
    },
    reducers:{
        FetchData:(state,e)=>{
           state=e
           console.log(state.payload.first_name)
        },
    
    
    
    }

} ) ;

 export const{FetchData}=LoginDataSlice.actions
 export default LoginDataSlice.reducer;
import { loginFaliure, loginStart, loginSuccess,logOut } from "./userRedux"
import { publicReq } from "../requestMethod"
import { getProduct, removeProductSuccess } from "./cartRedux"

export const login = async (dispatch,user)=>{
    dispatch(loginStart())
    try{
        const res = await publicReq.post("/auth/login",user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFaliure())     
    }
}
export const register = async (user)=>{
    try{
         await publicReq.post("/auth/register",user)
    }catch(err){
    }
}
export const logout = async (dispatch)=>{   
    dispatch(logOut())
    
}

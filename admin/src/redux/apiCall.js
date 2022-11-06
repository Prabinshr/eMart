import { loginFaliure, loginStart, loginSuccess, logOut } from "./userRedux"
import { publicReq, userReq } from "../requestMethod"
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux"

export const login = async (dispatch,user)=>{
    dispatch(loginStart())
    try{
        const res = await publicReq.post("/auth/login",user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFaliure())
    }
}  
export const logout = async (dispatch)=>{
    dispatch(logOut())
    
}
export const getProducts = async (dispatch)=>{
    dispatch(getProductStart())
    try{
        const res = await publicReq.get("/product")
        dispatch(getProductSuccess(res.data))
    }catch(err){
        dispatch(getProductFailure())
    }
}
export const deleteProduct = async (id,dispatch)=>{
    dispatch(deleteProductStart())
    try{
        const res = await userReq.delete(`/product/${id}`)
        dispatch(deleteProductSuccess(id))  
    }catch(err){
        dispatch(deleteProductFailure())
    }
}
export const updateProduct = async (id,product,dispatch)=>{
    dispatch(updateProductStart())
    try{
        //update
        dispatch(updateProductSuccess({id,product}))
    }catch(err){
        dispatch(updateProductFailure())
    }
}
export const addProduct = async (product,dispatch)=>{
    dispatch(addProductStart())
    try{
        const res = await userReq.post(`/product`,product)
        dispatch(addProductSuccess(res.data))
    }catch(err){
        dispatch(addProductFailure())
    }
}
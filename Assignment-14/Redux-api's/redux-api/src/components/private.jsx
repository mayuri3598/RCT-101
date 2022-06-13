import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "./authcontext"

export const Private = ({children})=>{
   
    let {auth} = useContext(AuthContext)


    if(!auth.status){
       return <Navigate to="/login" replace={false}></Navigate>
    }
    return children
}
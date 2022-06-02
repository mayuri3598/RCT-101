import {useState} from 'react'
import {AuthContext} from "./AuthContext";
import {useContext} from 'react'
function Loginform(){
    const {handleToken} =useContext(AuthContext)

    const [form, setForm]= useState({
        email:"",
        password:""
    });
    
    const handlechange=(e)=>{
        const {name, value}= e.target;
        setForm ({...form, [name]:value})
    }
    
    const handleSubmit= async(e)=>{
        e.preventDefault();
        let logindata=form;
        let login_data= JSON.stringify(logindata);
        let res= await fetch("https://reqres.in/api/login",
        {
            method:"POST",
            body:login_data,
            headers:
            {"Content-type":"application/json"}
        });
        let data=await res.json();
        if(data.token){
            handleToken(data.token)
        }
        else
        {
            alert("Email or Passowrd is invalid")
        }
        // console.log(data)

    }
    // "email": "eve.holt@reqres.in",
    // "password": "cityslicka"

    return(
        <form onSubmit={handleSubmit} className="login">
            <input name='email' onChange={handlechange} type="email" placeholder="enter email"></input>
            <input name='password' onChange={handlechange} type="password" placeholder="enter password"></input>
            <input name='submit'  type="submit" value="submit"></input> 
        </form>
    )
}
export {Loginform};
// https://reqres.in/api/login
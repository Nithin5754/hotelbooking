import { RegisterFormData } from "../pages/Register";
import { SignInFormData } from "../pages/SignIn";

const API_BASE_URL=import.meta.env.VITE_API_BASE_URL

// user creation endpoint

export const register=async (formData:RegisterFormData)=>{
  
  const response=await fetch(`${API_BASE_URL}/api/users/register`,{
    method:'POST',
    credentials:'include',
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(formData)
  })

  const responseBody=await response.json()

  if(!response.ok){
    throw new Error(responseBody.message );
    
   }

}
// login already existed user endpoint

export const SignIn=async(formData:SignInFormData)=>{
  const response=await fetch(`${API_BASE_URL}/api/auth/login`,{
    method:'POST',
    credentials:'include',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(formData)
  })
  const responseBody=await response.json()
  if(!response.ok){
    throw new Error(responseBody.message);
    
  }
  return responseBody
}

//validation endpoint whather the token available or not

export const validateToken=async ()=>{
  const response =await fetch(`${API_BASE_URL}/api/auth/validate-token`,{
    credentials:'include'
  })

  if(!response.ok){
    throw new Error("invalid token");
    
  }

  return response.json()
}



//LOGOUT CURRENT USER


export const logoutUser=async ()=>{

  const response=await fetch(`${API_BASE_URL}/api/auth/logout`,{
    method:'POST',
    credentials:'include'
  })

  if(!response.ok){
    throw new Error("error in sign-out");
    
  }



}
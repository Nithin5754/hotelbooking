import { useMutation, useQueryClient } from "react-query"
import * as apiClient from '../api/api-client'

import { useAppContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom"


const SignOutButton = () => {

  const queryClient=useQueryClient()

  const { showToast } = useAppContext();
  const navigate = useNavigate();

const mutation=useMutation(apiClient.logoutUser,{
  onSuccess:async()=>{
    console.log("log out sucessfully");
    await  queryClient.invalidateQueries("validateToken")
    showToast({ message: "logout sucessfully", type: "SUCCESS" });
    navigate("/sign-in");
    
  },
  onError:(error:Error)=>{
    console.log(error.message);
    
  }
})

const onSubmit=()=>{
  console.log("hello");
  
 mutation.mutate()
}

  return (
      <button onClick={onSubmit}  className="flex items-center text-white px-3 font-bold hover:bg-blue-600" type="button">Sign Out</button>
  )
}
export default SignOutButton
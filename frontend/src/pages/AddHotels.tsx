import { useMutation } from "react-query"
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm"
import { useAppContext } from "../context/AppContext"
import * as apiClient from "../api/api-client";

const AddHotels = () => {
  const{showToast}=useAppContext()
const {isLoading,mutate}=useMutation(apiClient.addMyHotel,{
    onSuccess:()=>{
      showToast({message:"Hotel saved!",type:"SUCCESS"})
    },
    onError:(err:Error)=>{
      showToast({message:err.message,type:'ERROR'})
    }
})

const handleSave=(hotelFormData:FormData)=>{
  console.log(hotelFormData);
  
  mutate(hotelFormData)
}

  return (
   <ManageHotelForm onSave={handleSave} isLoading={isLoading}/>
  )
}
export default AddHotels
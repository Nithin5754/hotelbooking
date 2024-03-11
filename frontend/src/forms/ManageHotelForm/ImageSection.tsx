import { useFormContext } from "react-hook-form"
import { HotelFormData } from "./ManageHotelForm"
import React from "react"

const ImageSection = () => {
  const {register,formState:{errors},watch,setValue}=useFormContext<HotelFormData>()

  const existingImageUrls=watch("imageUrls")

const hanldeDelete=(event:React.MouseEvent<HTMLButtonElement,MouseEvent>,imageUrl:string)=>{
  event.preventDefault()
setValue("imageUrls",existingImageUrls.filter((url)=>(
  url !==imageUrl
)))


}

  return (
<div>
<h2 className="text-2xl font-bold mb-3">Images</h2>

<div className="border rounded p-4 flex flex-col gap-4">
  {
    existingImageUrls&&(
      <div className="grid grid-cols-6 gap-4">
        {
          existingImageUrls.map((url)=>(
            <div className="relative group">
               <img src={url} className="max-h-full object-cover" />
               <button onClick={(e)=>hanldeDelete(e,url)} className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white">Delete</button>
            </div>
          ))
        }
      </div>
    )
  }
     <input multiple accept="image/*" className="w-full text-gray-700 font-normal " type="file" {...register('imageFiles',{
      validate:(imageFiles)=>{
        const totalLength=imageFiles.length+(existingImageUrls?.length||0);
        if(totalLength===0){
          return "atleat on image should be added"
        }
        if(totalLength>6){
          return "total image cannot be more than 6"
        }
        return true
      }
     })}  />
      <span className="text-red-500">{errors?.imageFiles?.message}</span>
</div>
</div>
  )
}
export default ImageSection
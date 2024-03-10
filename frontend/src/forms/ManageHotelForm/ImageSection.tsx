import { useFormContext } from "react-hook-form"
import { HotelFormData } from "./ManageHotelForm"

const ImageSection = () => {
  const {register,formState:{errors}}=useFormContext<HotelFormData>()
  return (
<div>
<h2 className="text-2xl font-bold mb-3">Images</h2>

<div className="border rounded p-4 flex flex-col gap-4">
     <input multiple accept="image/*" className="w-full text-gray-700 font-normal " type="file" {...register('imageFiles',{
      validate:(imageFiles)=>{
        const totalLength=imageFiles.length;
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
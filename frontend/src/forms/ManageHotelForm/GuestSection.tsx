import { useFormContext } from "react-hook-form"
import { HotelFormData } from "./ManageHotelForm"

const GuestSection = () => {
const {register,formState:{errors}}=useFormContext<HotelFormData>()

  return (
    <div>
           <h2 className="text-2xl font-bold mb-3">Facilities</h2>
           <div className="grid grid-cols-2 p-4 rounded-md gap-5 bg-gray-300">
            {/* adults count */}
             <label className="text-gray-700 text-sm font-semibold ">
              Adults
              <input type="number" className="border rounded w-full py-2 px-3 font-normal" min={1} {...register('adultCount',{
                required:'this field is required'
              })}/>

             <span className="text-red-500">{errors?.adultCount?.message}</span>
             </label>

{/*  */}
<label className="text-gray-700 text-sm font-semibold ">
              Children
              <input type="number" className="border rounded w-full py-2 px-3 font-normal" min={0} {...register('childCount',{
                required:'this field is required'
              })}/>

             <span className="text-red-500">{errors?.childCount?.message}</span>
             </label>

           </div>
    </div>
  )
}
export default GuestSection
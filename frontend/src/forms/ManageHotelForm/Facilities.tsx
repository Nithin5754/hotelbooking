import { useFormContext } from "react-hook-form"

import { HotelFormData } from "./ManageHotelForm"
import {hotelFacilities} from '../../config/hotel-options-config'

const Facilities = () => {
  const {register,formState:{errors}}=useFormContext<HotelFormData>()
  return (
    <div>
        <h2 className="text-2xl font-bold mb-3">Facilities</h2>
        <div className="grid grid-cols-5 gap-2">
        {hotelFacilities.map((facility,index) => (
          <label key={index} className="text-sm flex gap-1 text-gray-700 ">
            <input
              type="checkbox"
              value={facility}
              {...register('facilities',{
                validate:(facilities)=>{
             if(facilities&&facilities.length>0){
              return true
             }else{
              return "select atleast on facilities!"
             }
                }
         
              })}
            />
            <span>{facility}</span>
          </label>
        ))}
      </div>
      <span className="text-red-500">{errors?.facilities?.message}</span>
    </div>
  )
}
export default Facilities
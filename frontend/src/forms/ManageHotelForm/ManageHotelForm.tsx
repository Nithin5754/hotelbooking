import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import TypeSection from "./TypeSection";
import Facilities from "./Facilities";
import GuestSection from "./GuestSection";
import ImageSection from "./ImageSection";
import { HotelType } from "../../../../backend/src/shared/types";
import { useEffect } from "react";

export type HotelFormData = {
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  adultCount: number;
  childCount: number;
  facilities: string[];
  pricePerNight: number;
  startRating: number;
  imageFiles: FileList;
  imageUrls:string[]
};

type Props={
  hotel?:HotelType
  onSave:(hotelFormData:FormData)=>void,
  isLoading:boolean
}

const ManageHotelForm = ({onSave,isLoading,hotel}:Props) => {
  const formMethods = useForm<HotelFormData>();

  const {handleSubmit,reset }=formMethods

  useEffect(() => {
    reset(hotel);
  }, [hotel, reset]);
  

  const submitButton=handleSubmit((formDataJson:HotelFormData)=>{
    const formData=new FormData()
    formData.append("name", formDataJson.name);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);
    formData.append("description", formDataJson.description);
    formData.append("type", formDataJson.type);
    formData.append("pricePerNight", formDataJson.pricePerNight.toString());
    formData.append("starRating", formDataJson.startRating.toString());
    formData.append("adultCount", formDataJson.adultCount.toString());
    formData.append("childCount", formDataJson.childCount.toString());


    formDataJson.facilities.forEach((facility, index) => {
      formData.append(`facilities[${index}]`, facility);
    });

      // Array.from(formDataJson.imageFiles).forEach((url,index)=>{
      //   formData.append(`imageUrls[${index}]`, url);
      // })

      
      Array.from(formDataJson.imageFiles).forEach((imageFile)=>{
        formData.append(`imageFiles`, imageFile);
      })


    onSave(formData)

  })

  return (
    <FormProvider {...formMethods}>
      <form className="flex flex-col gap-10" onSubmit={submitButton}>
        <DetailsSection />
        <TypeSection/>
        <Facilities/>
        <GuestSection/>
        <ImageSection/>
        <span className="flex justify-end">
  <button disabled={isLoading} type="submit" className="bg-blue-600 text-white p-2 font-bold text-xl hover:bg-blue-400 disabled:bg-gray-600">{isLoading?'Saving...':'Save'} </button>            
        </span>
      </form>
    </FormProvider>
  );
};
export default ManageHotelForm;

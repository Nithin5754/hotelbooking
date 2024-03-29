import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold mb-3 ">Add Hotel</h1>
      {/* NAME */}
      <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
        Name
        <input
          type="text"
          className="border w-full py-1 px-2 font-normal "
          {...register("name", { required: "This field is required" })}
        ></input>
        <span className="text-red-500">{errors?.name?.message}</span>
      </label>

      <div className="flex gap-4">
        {/* city */}
        <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
          City
          <input
            type="text"
            className="border w-full py-1 px-2 font-normal "
            {...register("city", { required: "This field is required" })}
          ></input>
          <span className="text-red-500">{errors?.city?.message}</span>
        </label>
        {/* country */}
        <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
          Country
          <input
            type="text"
            className="border w-full py-1 px-2 font-normal "
            {...register("country", { required: "This field is required" })}
          ></input>
          <span className="text-red-500">{errors?.country?.message}</span>
        </label>
      </div>
      {/* description */}
      <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
        Description
        <textarea
          rows={10}
          className="border w-full py-1 px-2 font-normal "
          {...register("description", { required: "This field is required" })}
        ></textarea>
        <span className="text-red-500">{errors?.description?.message}</span>
      </label>
      {/* price per night */}
      <label htmlFor="" className="text-gray-700 text-sm font-bold max-w-[50%]">
        price per night
        <input
          type="number"
          min={1}
          className="border w-full py-1 px-2 font-normal "
          {...register("pricePerNight", { required: "This field is required" })}
        ></input>
        <span className="text-red-500">{errors?.pricePerNight?.message}</span>
      </label>
      {/* star rating */}
      <label htmlFor="" className="text-gray-700 text-sm font-bold max-w-[50%]">
        Star Rating
        <select
          {...register("startRating", {
            required: "this fiels is required",
          })}
          className="border rounded w-full  p-2 text-gray-700 font-bold "
        >
          <option value="" className="text-sm font-bold">
            Select as Rating
          </option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        <span className="text-red-500">{errors?.startRating?.message}</span>
      </label>
    </div>
  );
};
export default DetailsSection;

import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from '../api/api-client'
import { useAppContext } from "../context/AppContext";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const {showToast} =useAppContext( )
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation=useMutation(apiClient.register,{
    onSuccess:()=>{
     showToast({message:"Registration success",type:"SUCCESS"})
      
    },
    onError:(error:Error)=>{
      showToast({message:error.message,type:"ERROR"})
      
    }
  })

  const onSubmit = handleSubmit((data) => {
      mutation.mutate(data)
  });
  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold text-center">Create an Account</h2>

      <div className="flex flex-col md:flex-row gap-5 m-auto">
        <div className=" w-full">
          <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
            First Name
          </label>
          <input
            type="text"
            className="border w-full py-1 px-2 font-normal"
            {...register("firstName", { required: "This field is required" })}
          ></input>
          <span className="text-red-500">{errors?.firstName?.message}</span>
        </div>

        <div className=" w-full">
          <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
            Last Name
          </label>
          <input
            type="text"
            className="border w-full py-1 px-2 font-normal "
            {...register("lastName", { required: "This field is required" })}
          ></input>
          <span className="text-red-500">{errors?.lastName?.message}</span>
        </div>
      </div>
      <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
        Email
      </label>
      <input
        type="email"
        className="border w-full py-1 px-2 font-normal "
        {...register("email", { required: "This field is required" })}
      ></input>
      <span className="text-red-500">{errors?.email?.message}</span>
      {/* password */}

      <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
        Password
      </label>
      <input
        type="password"
        className="border w-full py-1 px-2 font-normal "
        {...register("password", {
          required: "This field is required",
          minLength: {
            value: 5,
            message: "password must be atleast 5 characters",
          },
        })}
      ></input>
      <span className="text-red-500">{errors?.password?.message}</span>
      {/* confirm password  */}

      <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
        Confirm Password
      </label>
      <input
        type="password"
        className="border w-full py-1 px-2 font-normal "
        {...register("confirmPassword", {
          validate: (val) => {
            if (!val) {
              return "this field is required";
            } else if (watch("password") !== val) {
              return "your password do not match";
            }
          },
        })}
      ></input>
      <span className="text-red-500">{errors?.confirmPassword?.message}</span>

      <span>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500"
        >
          submit
        </button>
      </span>
    </form>
  );
};
export default Register;

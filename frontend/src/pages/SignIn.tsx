import { useForm } from "react-hook-form";
import * as apiClient from "../api/api-client";
import { useMutation, useQueryClient } from "react-query";
import { useAppContext } from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.SignIn, {
    onSuccess: async () => {
      console.log("user has been logged in");
      await queryClient.invalidateQueries("validateToken");

      showToast({ message: "Sign in Successful!", type: "SUCCESS" });
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message , type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form className="flex flex-col gap-5" onClick={onSubmit}>
      <h2 className="text-3xl font-bold">Sign In</h2>
      {/* LOGIN EMAIL TYPING INPUT SECTION START HERE */}
      <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
        Email
        <input
          type="email"
          className="border w-full py-1 px-2 font-normal "
          {...register("email", { required: "This field is required" })}
        ></input>
        <span className="text-red-500">{errors?.email?.message}</span>
      </label>

      {/* LOGIN PASSWORD SECTION INPUT */}
      <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
        Password
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
      </label>

      <span className="flex items-center justify-between">
        <span className="text-sm">
          Not regestered? <Link className="underline" to={'/register'}>Create an account here</Link>
        </span>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500"
        >
           Login
        </button>
      </span>
    </form>
  );
};
export default SignIn;

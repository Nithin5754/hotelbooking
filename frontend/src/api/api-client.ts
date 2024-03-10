import { RegisterFormData } from "../pages/Register";
import { SignInFormData } from "../pages/SignIn";
import { HotelType } from '../../../backend/src/shared/types'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

// user creation endpoint

export const register = async (formData: RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};
// login already existed user endpoint

export const SignIn = async (formData: SignInFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const responseBody = await response.json();
  if (!response.ok) {
    throw new Error(responseBody.message);
  }
  return responseBody;
};

//validation endpoint whather the token available or not

export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("invalid token");
  }

  return response.json();
};

//LOGOUT CURRENT USER

export const logoutUser = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("error in sign-out");
  }
};

export const addMyHotel = async (hotelFormData: FormData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/myHotels`, {
      method: "POST",
      credentials: "include",
      body: hotelFormData,
    });
    if (!response.ok) {
      throw new Error("error in adding new hotel");
    }
    return response.json();
  } catch (error) {
    console.log(error);
    throw new Error("error in adding new hotel");
  }
};

export const fetchMyHotels = async ():Promise<HotelType[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/myHotels`, {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("error in FETCHING hotel");
    }

  return response.json()
  } catch (error) {
 
    
    throw new Error("error in FETCHING hotel");
  }

};


export type HotelType = {
  _id: String;
  userId: string;
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
  imageUrls: string[];
  lastUpdated: Date; 
};
import React, { createContext } from "react";
import { TripPlace } from "@/types";

type CreateTripContextType = {
  trip: TripPlace | null;
  setTrip: React.Dispatch<React.SetStateAction<TripPlace | null>>;
};

export const CreateTripContext = createContext<CreateTripContextType | null>(
  null
);

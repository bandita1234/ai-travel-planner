// utils/generatePrompt.ts
import { TripPlace, TravelerOption, BudgetOption } from "@/types"; // update path as needed
import { AI_PROMT } from "@/constants/Options";

export function generateAIPrompt(trip: TripPlace): string {
  const location = trip.place_name ?? "Unknown Location";
  const days = trip.totalNumberOfDays ?? 1;
  const nights = days - 1;
  const traveler = trip.traveler?.title ?? "traveler";
  const totalNumberOfPeople = trip.traveler?.people ?? "1 Person";
  const budget = trip.budget ?? "moderate";

  return AI_PROMT
    .replaceAll("{location}", location)
    .replaceAll("{days}", String(days))
    .replaceAll("{nights}", String(nights))
    .replaceAll("{traveler}", traveler)
    .replaceAll("{totalNumberOfPeople}", totalNumberOfPeople)
    .replaceAll("{budget}", budget);
}

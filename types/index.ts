export type TravelerOption = {
    id: number;
    title: string;
    desc: string;
    icon: string;
    people: string;
  };
  
export type TripPlace = {
  place_name?: string;
  name?:string,
  lat?: string;
  lon?: string;
  traveler?: TravelerOption | null;
};
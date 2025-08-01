export type OptionBase = {
  id: number;
  title: string;
  desc: string;
  icon: string;
};

export type TravelerOption = OptionBase & {
  people: string;
};

export type BudgetOption = OptionBase;

export type TripPlace = {
  place_name?: string;
  name?: string;
  lat?: string;
  lon?: string;
  traveler?: TravelerOption | null;
  startDate?: Date;
  endDate?: Date;
  totalNumberOfDays?: number;
  budget?:string;
};

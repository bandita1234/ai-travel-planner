export const SelectTravelerList = [
  {
    id: 1,
    title: "Just Me!",
    desc: "A solo adventure to explore the world.",
    icon: "✈️",
    people: "1 Person",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "A romantic getaway for two.",
    icon: "💑",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "Quality time with your loved ones.",
    icon: "🏡",
    people: "3 to 6 People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "An exciting trip with your crew.",
    icon: "⛺️",
    people: "5 to 12 People",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Balance between quality and cost",
    icon: "⚖️",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Premium experiences without compromise",
    icon: "💎",
  },
];

export const AI_PROMT = `Generate a detailed travel plan for the location: {location}, for {days} days and {nights} nights.
The plan is for a {traveler} trip ({totalNumberOfPeople}) with a {budget} budget.

Include:
- Flight details: airline name, price, and booking URL.
- At least 3 hotel options: name, address, price, rating, description, geo coordinates (lat/lon), and a realistic AI-generated image URL.
- At least 3 nearby tourist attractions: name, description, ticket pricing, geo coordinates, estimated travel time from hotel, and a realistic AI-generated image URL.
- A suggested itinerary for the {days} days and {nights} nights stay with time-based activity breakdown.
- Best time to visit each location.
- A main banner image URL representing {location} using a realistic AI-generated image.

Provide everything in well-formatted **JSON**.
`

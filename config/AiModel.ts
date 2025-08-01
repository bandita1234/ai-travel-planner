import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY,
});

export const getChat = async () => {
  return ai.chats.create({
    model: "gemini-2.5-flash",
    config: {
      responseMimeType: "application/json",
    },
    history: [
      {
        role: "user",
        parts: [
          {
            text:
              "Generate a detailed travel plan for the location: Bhubaneswar (M.Corp.), Khordha, Odisha, India, for 4 days and 3 nights.\n\n" +
              "The plan is for a Family trip (3 to 6 People) with a Moderate budget.\n\n" +
              "Include:\n\n" +
              "- Flight details: airline name, price, and booking URL.\n" +
              "- At least 3 hotel options: name, address, price, rating, description, geo coordinates (lat/lon), and a realistic AI-generated image URL.\n" +
              "- At least 3 nearby tourist attractions: name, description, ticket pricing, geo coordinates, estimated travel time from hotel, and a realistic AI-generated image URL.\n" +
              "- A suggested itinerary for the 4 days and 3 nights stay with time-based activity breakdown.\n" +
              "- Best time to visit each location.\n" +
              "- A main banner image URL representing Bhubaneswar (M.Corp.), Khordha, Odisha, India using a realistic AI-generated image.\n\n" +
              "Provide everything in well-formatted **JSON**.",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: JSON.stringify({
              main_banner_image_url:
                "https://storage.googleapis.com/gemini-holidays.appspot.com/bhubaneswar_banner.jpeg",
              destination: "Bhubaneswar (M.Corp.), Khordha, Odisha, India",
              trip_duration: "4 Days and 3 Nights",
              trip_type: "Family Trip (3 to 6 People)",
              budget: "Moderate",
              best_time_to_visit_bhubaneswar:
                "October to February (Winter months are ideal with pleasant temperatures rarely exceeding 28°C)",
              flight_details: {
                from_city: "Hyderabad (HYD)",
                to_city:
                  "Bhubaneswar (BBI - Biju Patnaik International Airport)",
                airline_name: "IndiGo",
                price_per_person_approx: "₹9,357 (Round Trip)",
                booking_url: "https://www.google.com/travel/flights/HYD-BBI",
                notes:
                  "Prices are indicative and subject to change. It's recommended to check for current prices and availability on the airline's website or other travel aggregators. Direct flights are available from major Indian cities like Kolkata, Chennai, Hyderabad, Bengaluru, Mumbai, and New Delhi.",
              },
              hotel_options: [
                {
                  name: "Hotel Kalinga Bapuji Nagar",
                  address:
                    "3.6 km to City centre, Bapuji Nagar, Bhubaneswar, Odisha",
                  price_per_night_approx:
                    "₹1,448 - ₹2,500 (for family room, prices vary by season)",
                  rating: "8.1/10 (Very good)",
                  description:
                    "A well-located hotel offering comfortable stays with decent amenities suitable for families. It provides a good balance of comfort and affordability.",
                  geo_coordinates: {
                    latitude: 20.2709,
                    longitude: 85.8353,
                  },
                  image_url:
                    "https://storage.googleapis.com/gemini-holidays.appspot.com/hotel_kalinga.jpeg",
                },
                {
                  name: "Treebo Trend Sidhartha Elite",
                  address:
                    "8.5 km to City centre, Jayadev Vihar, Bhubaneswar, Odisha",
                  price_per_night_approx:
                    "₹1,608 - ₹2,800 (for family room, prices vary by season)",
                  rating: "8.2/10 (Very good)",
                  description:
                    "A clean and comfortable hotel known for its good service and value for money. It's a reliable option for families looking for a pleasant stay.",
                  geo_coordinates: {
                    latitude: 20.3015,
                    longitude: 85.8309,
                  },
                  image_url:
                    "https://storage.googleapis.com/gemini-holidays.appspot.com/treebo_sidhartha.jpeg",
                },
                {
                  name: "Cozzet Victoria Hotel",
                  address:
                    "4.3 km to City centre, Nayapalli, Bhubaneswar, Odisha",
                  price_per_night_approx:
                    "₹2,751 - ₹4,000 (for family room, prices vary by season)",
                  rating: "8.5/10 (Excellent)",
                  description:
                    "A well-regarded hotel offering modern amenities and a comfortable environment. It provides a slightly more upscale experience within a moderate budget, suitable for families.",
                  geo_coordinates: {
                    latitude: 20.291,
                    longitude: 85.8078,
                  },
                  image_url:
                    "https://storage.googleapis.com/gemini-holidays.appspot.com/cozzet_victoria.jpeg",
                },
              ],
              nearby_tourist_attractions: [
                {
                  name: "Lingaraj Temple",
                  description:
                    "One of the oldest and largest temples in Bhubaneswar, dedicated to Lord Harihara (a form of Shiva and Vishnu). It's a prime example of Kalinga architecture and a significant pilgrimage site. Non-Hindus can view the temple from a raised platform outside.",
                  ticket_pricing:
                    "Free entry (Restricted to Hindus inside. View from platform for non-Hindus is free).",
                  geo_coordinates: {
                    latitude: 20.252,
                    longitude: 85.834,
                  },
                  estimated_travel_time_from_hotel:
                    "15-25 minutes (depending on hotel location and traffic)",
                  best_time_to_visit:
                    "Morning (6:00 AM - 12:00 PM) or Evening (4:00 PM - 9:00 PM) for prayers and a peaceful experience. During festivals like Mahashivratri for a vibrant atmosphere.",
                  image_url:
                    "https://storage.googleapis.com/gemini-holidays.appspot.com/lingaraj_temple.jpeg",
                },
                {
                  name: "Udayagiri and Khandagiri Caves",
                  description:
                    "These ancient rock-cut caves, dating back to the 2nd century BCE, are a testament to early Jain rock-cut architecture. Udayagiri has 18 caves and Khandagiri has 15, with Rani Gumpha (Queen's Cave) in Udayagiri being the most prominent. They offer insights into ancient Indian history and art.",
                  ticket_pricing:
                    "₹15 per person for Indians, ₹200 per person for Foreign Tourists. ₹25 for still camera.",
                  geo_coordinates: {
                    latitude: 20.2862,
                    longitude: 85.7876,
                  },
                  estimated_travel_time_from_hotel:
                    "20-30 minutes (depending on hotel location and traffic)",
                  best_time_to_visit:
                    "Morning (9:00 AM - 12:00 PM) or Late Afternoon (3:00 PM - 6:00 PM) to avoid the midday sun and enjoy the carvings.",
                  image_url:
                    "https://storage.googleapis.com/gemini-holidays.appspot.com/udayagiri_khandagiri_caves.jpeg",
                },
                {
                  name: "Dhauli Shanti Stupa (Peace Pagoda)",
                  description:
                    "Located on Dhauli Hills, this white stupa was built by the Kalinga Nippon Buddha Sangha in the early 1970s. It marks the place where the Kalinga War was fought and Emperor Ashoka embraced Buddhism. The stupa offers panoramic views of the surrounding landscape and the Daya River. There is also a light and sound show in the evening.",
                  ticket_pricing:
                    "Free entry to the Stupa. Light & Sound Show: ₹25 per person.",
                  geo_coordinates: {
                    latitude: 20.2185,
                    longitude: 85.8647,
                  },
                  estimated_travel_time_from_hotel:
                    "30-45 minutes (depending on hotel location and traffic)",
                  best_time_to_visit:
                    "Late Afternoon (4:00 PM - 6:00 PM) for views and sunset, followed by the light and sound show (check timings).",
                  image_url:
                    "https://storage.googleapis.com/gemini-holidays.appspot.com/dhauli_shanti_stupa.jpeg",
                },
                {
                  name: "Konark Sun Temple",
                  description:
                    "A UNESCO World Heritage Site, the Konark Sun Temple is a 13th-century CE Sun Temple, also known as the Black Pagoda. Built in the form of a gigantic chariot with elaborately carved stone wheels and horses, it is an architectural marvel and a symbol of Odisha's rich cultural heritage. (Note: This is a day trip from Bhubaneswar).",
                  ticket_pricing:
                    "₹40 per person for Indians, BIMSTEC, SAARC citizens. ₹600 per person for Foreign citizens. Free entry for children below 15 years.",
                  geo_coordinates: {
                    latitude: 19.8876,
                    longitude: 86.0967,
                  },
                  estimated_travel_time_from_hotel:
                    "1.5 - 2 hours (approx. 65 km from Bhubaneswar)",
                  best_time_to_visit:
                    "Morning (9:00 AM - 12:00 PM) for good lighting and fewer crowds. Best visited during the cooler months (October to February).",
                  image_url:
                    "https://storage.googleapis.com/gemini-holidays.appspot.com/konark_sun_temple.jpeg",
                },
                {
                  name: "Odisha State Museum",
                  description:
                    "The Odisha State Museum houses a vast collection of artifacts, including archaeological exhibits, rare manuscripts, tribal art, sculptures, and natural history specimens, offering a comprehensive insight into the state's history, culture, and art.",
                  ticket_pricing:
                    "Adults: ₹20, Children below 10 years: ₹10, Foreign Visitors: ₹20. Still Photography (Indian): ₹10, Still Photography (Foreigner): ₹100. Video Photography (Indian): ₹200, Video Photography (Foreigner): ₹2000.",
                  geo_coordinates: {
                    latitude: 20.273,
                    longitude: 85.83,
                  },
                  estimated_travel_time_from_hotel:
                    "10-20 minutes (depending on hotel location and traffic)",
                  best_time_to_visit:
                    "Anytime during opening hours (typically 10:00 AM - 5:00 PM, closed on Mondays). Best enjoyed when you have a couple of hours to explore.",
                  image_url:
                    "https://storage.googleapis.com/gemini-holidays.appspot.com/odisha_state_museum.jpeg",
                },
              ],
              suggested_itinerary: {
                day_1: {
                  theme: "Arrival and Temple Trails",
                  activities: [
                    {
                      time: "Afternoon (1:00 PM - 2:00 PM)",
                      activity:
                        "Arrive at Biju Patnaik International Airport (BBI), Bhubaneswar. Transfer to hotel and check-in.",
                    },
                    {
                      time: "Afternoon (2:00 PM - 3:00 PM)",
                      activity:
                        "Lunch at a local restaurant near the hotel, trying authentic Odia cuisine.",
                    },
                    {
                      time: "Afternoon (3:30 PM - 5:30 PM)",
                      activity:
                        "Visit Lingaraj Temple. Explore the architectural marvel from the viewing platform (for non-Hindus) or inside (for Hindus). Immerse in the spiritual ambiance.",
                    },
                    {
                      time: "Evening (6:00 PM - 7:30 PM)",
                      activity:
                        "Explore the Old Town area around Lingaraj Temple, soaking in the local atmosphere and perhaps some local street food.",
                    },
                    {
                      time: "Evening (8:00 PM onwards)",
                      activity:
                        "Dinner at the hotel or a nearby family-friendly restaurant. Relax and unwind.",
                    },
                  ],
                },
                day_2: {
                  theme: "Ancient Caves and Peace Pagoda",
                  activities: [
                    {
                      time: "Morning (9:00 AM - 12:00 PM)",
                      activity:
                        "Visit Udayagiri and Khandagiri Caves. Explore the ancient rock-cut caves, marvel at the intricate carvings, and learn about their historical significance.",
                    },
                    {
                      time: "Lunch (12:30 PM - 1:30 PM)",
                      activity:
                        "Lunch at a restaurant near the caves or on the way to Dhauli.",
                    },
                    {
                      time: "Afternoon (2:30 PM - 5:30 PM)",
                      activity:
                        "Proceed to Dhauli Shanti Stupa (Peace Pagoda). Enjoy the serene environment, panoramic views, and reflect on the historical importance of the Kalinga War.",
                    },
                    {
                      time: "Evening (6:30 PM - 7:30 PM)",
                      activity:
                        "Witness the Light and Sound Show at Dhauli Shanti Stupa (check timings beforehand as they can vary). It's a great way to learn about Emperor Ashoka's transformation.",
                    },
                    {
                      time: "Evening (8:00 PM onwards)",
                      activity:
                        "Dinner back in Bhubaneswar. Explore a different part of the city for dinner or enjoy a meal at the hotel.",
                    },
                  ],
                },
                day_3: {
                  theme: "Day Trip to Konark and Cultural Exploration",
                  activities: [
                    {
                      time: "Morning (8:00 AM - 10:00 AM)",
                      activity:
                        "Breakfast at the hotel and depart for Konark Sun Temple (approx. 1.5-2 hour drive).",
                    },
                    {
                      time: "Morning (10:00 AM - 1:00 PM)",
                      activity:
                        "Explore the magnificent Konark Sun Temple. Allocate ample time to admire the intricate carvings, the chariot wheels, and understand the temple's history with a guide if desired.",
                    },
                    {
                      time: "Lunch (1:00 PM - 2:00 PM)",
                      activity:
                        "Lunch at a restaurant in Konark or on the way back to Bhubaneswar.",
                    },
                    {
                      time: "Afternoon (3:30 PM - 5:30 PM)",
                      activity:
                        "Visit the Odisha State Museum. Explore the diverse collections, including art, archaeology, and tribal artifacts, offering a deeper understanding of Odisha's heritage.",
                    },
                    {
                      time: "Evening (6:00 PM - 7:30 PM)",
                      activity:
                        "Visit Ekamra Haat, a craft village showcasing traditional Odishan handicrafts and textiles. You can shop for souvenirs here.",
                    },
                    {
                      time: "Evening (8:00 PM onwards)",
                      activity:
                        "Farewell dinner at a specialty restaurant in Bhubaneswar, perhaps trying some seafood if your family enjoys it.",
                    },
                  ],
                },
                day_4: {
                  theme: "Leisure and Departure",
                  activities: [
                    {
                      time: "Morning (9:00 AM - 11:00 AM)",
                      activity:
                        "Enjoy a leisurely breakfast at the hotel. Depending on your flight schedule, you can do some last-minute souvenir shopping or revisit a favorite spot.",
                    },
                    {
                      time: "Morning (11:00 AM - 12:00 PM)",
                      activity: "Check-out from the hotel.",
                    },
                    {
                      time: "Afternoon (Time flexible based on flight)",
                      activity:
                        "Transfer to Biju Patnaik International Airport (BBI) for your departure.",
                    },
                  ],
                },
              },
              notes:
                "This itinerary is a suggestion and can be customized based on your family's interests and pace. Bhubaneswar has a rich spiritual and historical heritage, and many other temples and parks can be explored if time permits. Always check the opening hours and any special notices for attractions before visiting. For family trips, consider carrying snacks, water, and comfortable footwear. Booking flights and accommodations in advance, especially during peak season, is highly recommended.",
            }),
          },
        ],
      },
    ],
  });
};

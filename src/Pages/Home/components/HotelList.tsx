const hotels = [
  {
    name: "Grand Hotel",
    city: "Mumbai",
    rooms: [
      {
        id: "0663ea42-f4ad-4821-901a-75be334cb285",
        name: "Deluxe Room",
        price: 900,
      },
      {
        id: "f99d6d37-192f-4358-82cb-8f51b31263d5",
        name: "Executive Suite",
        price: 2000,
      },
      {
        id: "daae3bb6-56e0-448c-b996-671920c88b96",
        name: "Family Room",
        price: 4500,
      },
    ],
    image_url:
      "https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/hotels/grand-hotel.jpg",
    id: "8412ebe0-752e-447b-8ea0-7013959ce84d",
    rating: "2.33",
  },
  {
    name: "Royal Palace",
    city: "Jaipur",
    rooms: [
      {
        id: "f1993d01-2fcb-4167-ab3b-3a19b003c03f",
        name: "Standard Room",
        price: 1400,
      },
      {
        id: "d05fe982-fa31-4661-9b71-52df080b8f17",
        name: "Superior Room",
        price: 2700,
      },
      {
        id: "c4a2c3dc-f117-4895-91e3-44fbe354569c",
        name: "Luxury Suite",
        price: 5400,
      },
      {
        id: "65006d56-3c59-4076-b3f8-d53616e26060",
        name: "Presidential Suite",
        price: 6300,
      },
    ],
    image_url:
      "https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/hotels/royal-palace.jpg",
    id: "03024652-7fb2-4813-9ad7-93d467d8f50e",
    rating: "2.73",
  },
  {
    name: "Taj Mahal Palace",
    city: "Mumbai",
    rooms: [
      {
        id: "f4ebe77b-fbbe-4aa9-ae3d-6d1e379e8eb1",
        name: "Taj King Room",
        price: 2000,
      },
      {
        id: "8fb0571d-108d-4f15-ae57-1efc160f8aa1",
        name: "Taj Queen Room",
        price: 3200,
      },
      {
        id: "0664785c-6cfe-49cf-916b-336fbea8fcb1",
        name: "Taj Suite",
        price: 4900,
      },
    ],
    image_url:
      "https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/hotels/taj-mahal-palace.jpg",
    id: "32fbd8a7-7579-459a-95c0-7a577549016c",
    rating: "1.93",
  },
  {
    name: "Leela Palace",
    city: "Bengaluru",
    rooms: [
      {
        id: "5736f28d-d8d8-4e67-8f51-533f9ac9e2ee",
        name: "Garden View Room",
        price: 1000,
      },
      {
        id: "fff9913c-8fb3-4e7a-8469-bfb06447b91e",
        name: "Sea View Room",
        price: 2000,
      },
      {
        id: "1b7baccb-5601-4293-af06-afe3d406380a",
        name: "Grand Suite",
        price: 4600,
      },
    ],
    image_url:
      "https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/hotels/leela-palace.jpg",
    id: "6b3269f6-0665-49ad-9efd-0f3aaa544ea4",
    rating: "0.83",
  },
  {
    name: "Oberoi Amarvilas",
    city: "Agra",
    rooms: [
      {
        id: "6acffd2d-f761-4746-be88-8c5d991adce0",
        name: "Premier Room",
        price: 1600,
      },
      {
        id: "df06a9dd-2bbf-46cf-9480-bdcafc0b858c",
        name: "Premier Room with Balcony",
        price: 3000,
      },
      {
        id: "7bc3b14a-a8cb-4a57-bfa5-e0abc0e086ea",
        name: "Kohinoor Suite",
        price: 5800,
      },
      {
        id: "750fb817-3325-49fc-856d-012a7144bbd3",
        name: "Taj Mahal Suite",
        price: 6100,
      },
    ],
    image_url:
      "https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/hotels/oberoi-amarvilas.jpg",
    id: "1a40d1cb-0e2d-4b5a-8501-85a28676b189",
    rating: "1.53",
  },
  {
    name: "ITC Grand Chola",
    city: "Chennai",
    rooms: [
      {
        id: "09a0e226-e4c5-4570-970e-336d280c53e8",
        name: "Chola Suite",
        price: 600,
      },
      {
        id: "9c02bb3f-fabb-4fd7-b0c9-94a07fb91b06",
        name: "Chola Deluxe Room",
        price: 3700,
      },
      {
        id: "00a44243-bf4c-4945-82ec-3f6264255cd8",
        name: "Chola Executive Room",
        price: 4300,
      },
    ],
    image_url:
      "https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/hotels/itc-grand-chola.jpg",
    id: "8c3d2a45-fc74-45cf-8d77-b9d8ee64a4ea",
    rating: "1.33",
  },
  {
    name: "Park Hyatt",
    city: "Goa",
    rooms: [
      {
        id: "6c502282-35e7-449f-8cab-9a424cf51d2d",
        name: "Park King Room",
        price: 2000,
      },
      {
        id: "096a96b4-f3fd-44bc-a017-e89df5d401b2",
        name: "Park Twin Room",
        price: 3400,
      },
      {
        id: "903ea7ed-0ffe-48c3-a2e1-c0e3b1467cc5",
        name: "Park Suite",
        price: 5100,
      },
    ],
    image_url:
      "https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/hotels/park-hyatt.jpg",
    id: "c57d5edc-652f-44b8-9efc-e77c99cc9276",
    rating: "1.23",
  },
  {
    name: "Hyatt Regency",
    city: "Delhi",
    rooms: [
      {
        id: "97bfaff3-55fa-4048-ba89-997da1f14da6",
        name: "Regency King Room",
        price: 2000,
      },
      {
        id: "c1ff58ec-f1b7-42fb-b717-665ae7baecb7",
        name: "Regency Twin Room",
        price: 3900,
      },
    ],
    image_url:
      "https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/hotels/hyatt-regency.jpg",
    id: "d941d22b-ecf5-44c7-9df0-83491a0c1c6a",
    rating: "0.03",
  },
  {
    name: "Marriott Jaipur",
    city: "Jaipur",
    rooms: [
      {
        id: "d9c324c0-cb48-42b4-9715-af3eef2125c0",
        name: "Deluxe Room",
        price: 1700,
      },
      {
        id: "8478b5df-0726-4c73-83a8-91f39decacae",
        name: "Executive Room",
        price: 2100,
      },
      {
        id: "eb740988-9db5-4708-8304-bb949c64867a",
        name: "Executive Suite",
        price: 5100,
      },
    ],
    image_url:
      "https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/hotels/marriott-jaipur.jpg",
    id: "21705e12-b3c8-4026-81f6-5f107665e68a",
    rating: "2.03",
  },
  {
    name: "Ritz-Carlton Bangalore",
    city: "Bengaluru",
    rooms: [
      {
        id: "f0df733e-c272-4541-9192-160d4e36fc90",
        name: "Deluxe Room",
        price: 1600,
      },
      {
        id: "2fdb817d-8091-4153-a1e0-70416b1a2414",
        name: "Executive Room",
        price: 2200,
      },
      {
        id: "75aa10f2-f2a2-47cb-b857-0e77a22c52a8",
        name: "Ritz Suite",
        price: 4900,
      },
    ],
    image_url:
      "https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/hotels/ritz-carlton-bangalore.jpg",
    id: "e7d72cad-f390-4e2d-b13b-459165160d7e",
    rating: "0.73",
  },
];

import { Hotel } from "./Hotel";
import style from "./HotelList.module.css";

export function HotelList() {
  return (
    <div className={style.hotel_list}>
      {hotels.map((h) => (
        <Hotel key={h.id} data={h} />
      ))}
    </div>
  );
}

import { useParams } from "react-router-dom";
import { HotelHeader } from "./components/HotelHeader";
import { HotelRooms } from "./components/DisplayRooms";
import { HotelDescription } from "./components/HotelDescription";

export function Hotel() {
  const params = useParams();

  const hotelId = params.hotelId;

  // if(!hotelId) {
  //   return 404
  // }

  return (
    <div>
      <HotelHeader
        name="The Penincula Hotel"
        rating="4.8"
        city="Mumbai"
        image="https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/hotels/grand-hotel.jpg"
      />
      <HotelRooms
        rooms={[
          {
            id: "0663ea42-f4ad-4821-901a-75be334cb285",
            name: "Deluxe Room",
            price: 900,
            amenities: ["Air Conditioning", "TV", "Free Wi-Fi"],
            image_urls: [
              "https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/rooms/4/4-1.jpg",
              "https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/rooms/4/4-2.jpg",
              "https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/rooms/4/4-3.jpg",
            ],
          },
          {
            id: "f99d6d37-192f-4358-82cb-8f51b31263d5",
            name: "Executive Suite",
            price: 2000,
            amenities: ["Air Conditioning", "TV", "Free Wi-Fi", "Balcony"],
            image_urls: [
              "https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/rooms/7/7-1.jpg",
              "https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/rooms/7/7-2.jpg",
              "https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/rooms/7/7-3.jpg",
              "https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/rooms/7/7-4.jpg",
            ],
          },
          {
            id: "daae3bb6-56e0-448c-b996-671920c88b96",
            name: "Family Room",
            price: 4500,
            amenities: [
              "Air Conditioning",
              "TV",
              "Free Wi-Fi",
              "Balcony",
              "Jaccuzi",
            ],
            image_urls: [
              "https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/rooms/6/6-1.jpg",
              "https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/rooms/6/6-2.jpg",
              "https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/rooms/6/6-3.jpg",
              "https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/rooms/6/6-4.jpg",
            ],
          },
        ]}
      />
      <HotelDescription
        name="The Penincula hotel"
        description="Tenderloin adipisicing bresaola et short loin, ad leberkas anim hamburger.  Ut tail chuck landjaeger laborum.  Chislic mollit dolore ut ad laboris aliquip cillum, est brisket pork elit.  Occaecat deserunt consectetur qui meatloaf cillum venison bacon ut turkey cupidatat id.  Deserunt enim velit, qui tri-tip quis aliqua.  Leberkas nisi culpa landjaeger andouille shankle, sunt dolor ad aliqua non bacon laboris flank.  Jowl excepteur cupim veniam ribeye doner cow frankfurter picanha flank brisket nisi pork chop do.\n\nEst pork chop dolor ex duis shank.  Lorem esse short loin in eiusmod sunt ad pork chop.  Veniam nisi culpa, jerky nulla ground round bresaola capicola.  Fatback veniam cupim elit ut magna.\n\nReprehenderit mollit ut prosciutto landjaeger alcatra ipsum sed tri-tip nisi tail sunt.  Shankle pig sed strip steak dolore duis.  Qui et shoulder, t-bone deserunt porchetta capicola do sed.  Proident tongue ut, shankle strip steak jerky ex nisi brisket ut labore anim.  Hamburger proident voluptate turducken ut ea bacon pork belly swine buffalo.  Swine fatback ham hock bacon tempor.\n\nVenison doner esse do ut ipsum nostrud, aute tri-tip leberkas fatback.  In id non, lorem ribeye tenderloin beef ribs pork chop occaecat ham frankfurter culpa fugiat.  Laborum tail dolore pastrami shankle, ribeye anim prosciutto ham hock salami.  Consectetur t-bone buffalo tempor voluptate ut.  Occaecat swine turkey, quis tail meatloaf veniam.\n\nSunt in corned beef qui pork duis, ullamco eu.  Capicola sed boudin consectetur, turkey qui adipisicing salami ham hock swine pork chop esse cillum jerky.  Consequat magna laboris landjaeger, incididunt proident culpa turducken bresaola.  Short ribs kevin fugiat ground round swine laborum.  Proident sed nisi, enim labore qui occaecat exercitation pastrami jowl t-bone reprehenderit fugiat ham.  Qui frankfurter chicken meatloaf, cillum tempor chislic corned beef kevin aute enim."
      />
    </div>
  );
}

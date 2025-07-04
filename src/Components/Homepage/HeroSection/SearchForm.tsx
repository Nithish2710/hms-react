"use client";
import * as React from "react";
import { useState } from "react";
import { FormField } from "./FormField";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faCalendarDays,faUsers,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

interface SearchFormData {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

interface SearchFormProps {
  onSearch: (data: SearchFormData) => void;
}
const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const guestSelectOptions = guestOptions.map((num) => ({
    value: num,
    label: num === 1 ? `${num} Guest` : `${num} Guests`,
  }));

  const handleSearch = () => {
    onSearch({
      destination,
      checkIn,
      checkOut,
      guests,
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <section className="pt-2 pb-4 px-5 mx-auto my-0 rounded-2xl shadow-2xl backdrop-blur-[20px] bg-white bg-opacity-90 max-w-[900px]  max-md:p-6 max-sm:p-5">
      <div className="flex gap-4 items-end grid-cols-[repeat(auto-fit,minmax(200px,1fr))] max-sm:gap-4 max-sm:grid-cols-[1fr]">
  <FormField
  label={
    <>
      <FontAwesomeIcon icon={faLocationDot} className="mr-1 text-black" />
      Destination
    </>
  }
  id="destination-input"
  type="text"
  placeholder="Type here"
  value={destination}
  onChange={(value) => setDestination(value as string)}
/>
        <FormField
          label={
            <>
      <FontAwesomeIcon icon={faCalendarDays} className="mr-1 text-black"/>
        Check-in
            </>
          }
          id="checkin-input"
          type="date"
          placeholder="Select date"
          value={checkIn}
          onChange={(value) => setCheckIn(value as string)}
          sty
        />

        <FormField
          label={
            <>
      <FontAwesomeIcon icon={faCalendarDays} className="mr-1 text-black"/>
        Check-out
            </>
          }
          id="checkout-input"
          type="date"
          value={checkOut}
          onChange={(value) => setCheckOut(value as string)}
        />

        <FormField
          label={
            <>
<FontAwesomeIcon icon={faUsers} className="mr-1 text-black"/>
              Guests
            </>
          }
          id="guests-select"
          type="select"
          value={guests}
          onChange={(value) => setGuests(value as number)}
          options={guestSelectOptions}
        />

        <button
          className="gap-2 px-4 py-2 text-base font-semibold bg-gray-900 rounded-lg transition-all cursor-pointer border-none duration-[0.2s] min-h-[30px] text-white max-sm:w-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          onClick={handleSearch}
          onKeyDown={handleKeyDown}
          type="button"
        ><>
          <FontAwesomeIcon icon={faMagnifyingGlass}  className=""/>
          </>
        </button>
      </div>
    </section>
  );
};

"use client";
import * as React from "react";

interface BookingFormProps {
  checkInDate: string;
  setCheckInDate: (date: string) => void;
  checkOutDate: string;
  setCheckOutDate: (date: string) => void;
  guests: number;
  setGuests: (guests: number) => void;
}

export function BookingForm({
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
  guests,
  setGuests,
}: BookingFormProps) {
  const handleCheckInChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckInDate(event.target.value);
  };

  const handleCheckOutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckOutDate(event.target.value);
  };

  const handleGuestsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuests(parseInt(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <aside className="p-6 bg-white rounded-2xl border border-gray-200 border-solid h-fit shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
      <div className="flex justify-between items-center mb-6">
        <span className="text-3xl font-bold text-neutral-800">$299</span>
        <span className="text-base text-zinc-700">/night</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 mb-6">
          <div>
            <label
              htmlFor="check-in-date"
              className="block mb-2 text-sm font-semibold text-neutral-800"
            >
              Check-In
            </label>
            <input
              className="p-3 w-full text-base rounded-lg border border-gray-200 border-solid focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              id="check-in-date"
              type="date"
              value={checkInDate}
              onChange={handleCheckInChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="check-out-date"
              className="block mb-2 text-sm font-semibold text-neutral-800"
            >
              Check-Out
            </label>
            <input
              className="p-3 w-full text-base rounded-lg border border-gray-200 border-solid focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              id="check-out-date"
              type="date"
              value={checkOutDate}
              onChange={handleCheckOutChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="guests-count"
              className="block mb-2 text-sm font-semibold text-neutral-800"
            >
              Guests
            </label>
            <input
              className="p-3 w-full text-base rounded-lg border border-gray-200 border-solid focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              id="guests-count"
              type="number"
              min="1"
              value={guests}
              onChange={handleGuestsChange}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="p-4 w-full text-base font-semibold bg-sky-600 rounded-lg cursor-pointer border-none duration-300 ease-in-out text-white transition-colors hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        >
          Check Availability
        </button>
      </form>
    </aside>
  );
}

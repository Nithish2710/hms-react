export function HotelHeader() {
  const stars = [1, 2, 3, 4];

  return (
    <header className="p-8 border-b border-solid border-b-gray-200">
      <div className="flex gap-3 items-center mb-4">
        <h1 className="m-0 text-3xl font-bold text-neutral-800">
          Urbanza Suites
        </h1>
        <span className="text-base text-zinc-700">(Double Bed)</span>
        <span className="px-3 py-1 text-sm font-semibold bg-orange-600 rounded-3xl text-white">
          20% OFF
        </span>
      </div>
      <div className="flex gap-2 items-center mb-3">
        <div className="flex gap-0.5" role="img" aria-label="4 out of 5 stars">
          {stars.map((star) => (
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-amber-500"
              key={star}
              aria-hidden="true"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-gray-200"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <span className="text-base font-medium text-zinc-700">
          200+ reviews
        </span>
      </div>
      <address className="flex gap-2 items-center text-zinc-700 not-italic">
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 fill-current"
          aria-hidden="true"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
        <span className="text-base">Main Road 123 Street, 23 Colony</span>
      </address>
    </header>
  );
}

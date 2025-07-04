import imgMain from "../../../assets/hall-arrangement-white.png";
import imgTop from "../../../assets/hall-arrangement.png";

export function AboutSection() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center gap-12 py-16 rounded-2xl">
      {/* Left: Images */}
      <div className="relative w-full lg:w-2/4 flex justify-center items-center rounded-2xl">
        {/* Main image */}
        <img
          src={imgMain}
          alt=""
          className="rounded-xl w-full h-100 object-cover border-2 pt-5"
        />
        {/* Top image */}
  <img src={imgTop} className="absolute -top-50 -right-10 w-100 h-130 overflow-hidden rounded-2xl">
  </img>
      </div>

      {/* Right: Text */}
      <div className="w-full lg:w-1/2 text-center lg:text-left ">
        <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
          {/* <span className="w-8 h-px bg-[#bfa074]"></span> */}
        </div>
        <h2 className="text-4xl lg:text-5xl text-black font-bold leading-tight max-w-4xl mx-auto p-6 md:p-10">
          Welcome to Harirams Hotel <br />
        </h2>
      <div className="px-4 py-5 md:px-8 lg:px-16">
  <div className="">
    <p className="text-gray-700 leading-relaxed text-lg">
      Where tradition meets comfort in the heart of <span className="font-semibold text-green-700">Pollachi</span>. Whether you're here for business or leisure, our hotel offers a peaceful stay surrounded by nature’s charm.
      <br /><br />
      With well-appointed rooms, warm hospitality, and easy access to Pollachi’s scenic attractions, we aim to make every stay relaxing, memorable, and truly <span className="italic text-green-700">refreshing</span>.
    </p>
  </div>
</div>
<button className="bg-[#54af47] text-white px-8 py-3 rounded-md font-medium transition">
          Learn More
        </button>
      </div>
    </section>
  );
}
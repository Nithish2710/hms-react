import imgMain from "../../../assets/welcome-page.jpg";
import imgTop from "../../../assets/hall-arrangement.png";
import { Link } from "react-router-dom";

export function AboutSection() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center gap-12 py-20 rounded-2xl">
      {/* Left: Images */}
      <div className="relative w-full lg:w-2/4 mt-7 flex justify-center items-center rounded-2xl">
        {/* Main image */}
        <img
          src={imgMain}
          alt=""
          className="rounded-xl  w-auto ml-20 h-90 object-cover shadow-2xl"
        />
      
      </div>

      {/* Right: Text */}
      <div className="w-full lg:w-1/2 text-center lg:text-left ">
        <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
          {/* <span className="w-8 h-px bg-[#bfa074]"></span> */}
        </div>
        <h2 className="text-3xl lg:text-3xl text-black font-bold leading-tight max-w-4xl mx-auto md:p-4">
          Welcome to Hari Rams Hemhalayaah <br />
        </h2>
      <div className="py-5 mx-5 pr-20">
  <div className="">
    <p className="text-gray-700 leading-relaxed text-lg">
      Where tradition meets comfort in the heart of <span className="font-semibold text-green-700">Pollachi</span>. Whether you're here for business or leisure, our hotel offers a peaceful stay surrounded by nature’s charm.
      <br /><br />
      With well-appointed rooms, warm hospitality, and easy access to Pollachi’s scenic attractions, we aim to make every stay relaxing, memorable, and truly <span className="text-green-700">refreshing</span>.
    </p>
  </div>
</div>
<Link to="/aboutus">
  <button
    className="bg-[#54af47] text-white px-8 py-3 rounded-md font-medium transition hover:shadow-lg cursor-pointer"
    onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
  >
    Learn More
  </button>
</Link>


      </div>
    </section>
  );
}
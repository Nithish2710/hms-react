"use client";
import bgImage from "../../assets/aboutus.jpg"; 

function AboutUsBanner() {
  return (
    <>
      <div className="relative w-full">
        <main
          className="relative flex justify-center items-center min-h-screen bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content above overlay */}
          <div className="relative z-10 px-6 w-full max-w-[1200px] text-white text-center">
            <h3 className="text-7xl font-bold">About us</h3><br/>
            <h2>Welcome to Hari Rams, where luxury meets comfort in the heart of Pollachi.</h2>
          </div>
        </main>
      </div>
    </>
  );
}

export default AboutUsBanner;

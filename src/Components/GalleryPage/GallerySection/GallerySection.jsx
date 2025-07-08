import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-rotate.css';

import gal1 from '../../../assets/gal1.png';
import gal2 from '../../../assets/gal2.png';
import gal3 from '../../../assets/gal3.png';
import gal4 from '../../../assets/gal4.png';
import gal5 from '../../../assets/gal5.png';
import gal6 from '../../../assets/gal6.png';
import gal7 from '../../../assets/gal7.png';
import gal8 from '../../../assets/gal8.png';
import gal9 from '../../../assets/gal9.png';

export default function GallerySection() {
  return (
    <div className="pb-20 pt-10 px-10">
  <div className='text-center'>
    <header className="mb-4">
    
          <p className="text-[#54af74] text-base font-medium tracking-widest uppercase mb-4 italic">
            At Hari Rams Hemhalayaah
          </p>
          <p className="text-slate-700 text-2xl sm:text-3xl font-bold tracking-tight mb-0">
            Elegant Stays & Grand Celebrations
          </p>
          <div className="w-15 h-1 bg-green-700 mx-auto mt-5" />
        </header>
</div>
      <LightGallery
        speed={500}
        zoomFromOrigin={false}
        elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
    
          <a
            href={gal1}
          >
            <img
              src={gal1}
              alt="Welcome Page"
              className="rounded-lg w-full h-auto object-cover transition hover:scale-105"
            />
          </a>
        
                  <a
            href={gal2}
          >
            <img
              src={gal2}
              alt="Welcome Page"
              className="rounded-lg w-full h-auto object-cover transition hover:scale-105"
            />
          </a>

                    <a
            href={gal3}
          >
            <img
              src={gal3}
              alt="Welcome Page"
              className="rounded-lg w-full h-auto object-cover transition hover:scale-105"
            />
          </a>

                    <a
            href={gal4}
          >
            <img
              src={gal4}
              alt="Welcome Page"
              className="rounded-lg w-full h-auto object-cover transition hover:scale-105"
            />
          </a>

                    <a
            href={gal5}
          >
            <img
              src={gal5}
              alt="Welcome Page"
              className="rounded-lg w-full h-auto object-cover transition hover:scale-105"
            />
          </a>

                    <a
            href={gal6}
          >
            <img
              src={gal6}
              alt="Welcome Page"
              className="rounded-lg w-full h-auto object-cover transition hover:scale-105"
            />
          </a>

                    <a
            href={gal7}
          >
            <img
              src={gal7}
              alt="Welcome Page"
              className="rounded-lg w-full h-auto object-cover transition hover:scale-105"
            />
          </a>

                    <a
            href={gal8}
          >
            <img
              src={gal8}
              alt="Welcome Page"
              className="rounded-lg w-full h-70  object-cover transition hover:scale-105"
            />
          </a>

                    <a
            href={gal9}
          >
            <img
              src={gal9}
              alt="Welcome Page"
              className="rounded-lg w-full h-auto object-cover transition hover:scale-105"
            />
          </a>

      </LightGallery>
    </div>
  );
}

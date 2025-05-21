import { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const images = [
  '/images/Grad_CU.jpg',
  '/images/Backhand2_CU.jpg',
  '/images/team_pic.jpeg',
  '/images/Seniorday_UF.jpg',
  '/images/Serve_UF.jpg',
  '/images/Anthem_UF.jpg',
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const totalImages = images.length;
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalImages);
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % totalImages);
    startAutoPlay();
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + totalImages) % totalImages);
    startAutoPlay();
  };

  return (
    <>
      <Navbar />

      <div className="relative w-full flex flex-col items-center">
        {/* Bio Section */}
        <div className="flex flex-col items-center text-center mt-24 max-w-4xl px-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="/images/Headshot.JPG"
              alt="Bradley Paliska headshot"
              className="w-32 h-32 rounded-full object-cover shadow-lg"
            />
            <div className="text-left">
              <h1 className="text-4xl font-bold">Bradley Paliska</h1>
              <p className="text-lg mt-2 text-gray-700">
                Former professional & college tennis player | Finance & Data Enthusiast
              </p>
              <a href="/Resume.pdf" target="_blank"rel="noopener noreferrer" className="btn-primary underline hover:no-underline">
                View Resume
              </a>
              <p className="mt-2 text-sm text-gray-600">
                I recently graduated from Cornell University with a degree in Information Science, concentrating in Data Science and Interactive Technology. 
                I have experience in real estate finance and data analytics, and I’m a former professional and collegiate tennis player. 
                I’m now pursuing a Master of Science in Management at the University of Florida.
              </p>
            </div>
          </div>
        </div>

        {/* Sliding Carousel */}
        <div
          className="relative overflow-hidden w-full max-w-4xl mt-10 rounded-xl shadow-md"
          style={{ height: '450px' }}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Tennis ${index}`}
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full px-4 flex justify-between">
            <button
              onClick={handlePrev} 
              className="bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 transition"
            >
              ◀
            </button>
            <button
              onClick={handleNext} 
              className="bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 transition"
            >
              ▶
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

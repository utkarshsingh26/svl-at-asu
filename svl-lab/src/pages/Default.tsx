import { useState, useEffect } from 'react';
import { Vortex } from '../components/ui/vortex';
import { Link } from 'react-router-dom';

function Default() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Vortex backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">

        {/* Conditionally render content after the delay */}
        <div className={`transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'} text-center`}>
          <h2 className="text-white text-2xl md:text-6xl font-bold">
            Welcome to SVL at ASU
          </h2>
          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 mx-auto">
            We research data visualization, human-computer interaction, and advanced interfaces for data science,
            under the direction of <a href="https://chrisbryan.github.io/" target='_blank' className="underline">Professor Chris Bryan.</a>
          </p>
          {/* Button Container */}
          <div className="flex justify-center items-center gap-4 mt-6 w-full">
            <Link to="/home">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
              Find out more about us
            </button>
            </Link>
          </div>
        </div>
      </Vortex>
    </>
  );
}

export default Default;



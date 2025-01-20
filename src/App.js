import React, { useState, useEffect } from 'react';
import { About } from "./modules/about/About";
import { Home } from "./modules/home/Home";
import { Join_us } from "./modules/join us/Join_us";
import { Past_event } from "./modules/past event/Past_event";
import { Team } from "./modules/team/Team";
import { Upcoming_event } from "./modules/upcoming event/Upcoming_event";
import { Navbar } from "./shared/Navbar";
import '../src/css/about/About.css';


function App() 
{
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Remove listener when component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      <div className=' w-full overflow-hidden'>
        <div className="fixed top-0 left-0 right-0 z-10">
          <Navbar />
        </div>
        <div>
          <Home />
        </div>
        <div>
          <About />
        </div>
        <div>
          {/* <Upcoming_event /> */}
        </div>
        <div>
          <Past_event />
        </div>
        <div>
          <Team />
        </div>
        <div>
          {/* <Join_us /> */}
        </div>
      </div>
      {/* <div className="text-4xl bg-red-900 rounded-full py-4 px-6 text-white scrollUp shadow-md" onClick={()=> handleClick()} style={{display: `${isVisible?'inline':'none'}`}}>
        <i class="fa-solid fa-arrow-up"></i>
      </div> */}
    </>
  );
}

export default App;

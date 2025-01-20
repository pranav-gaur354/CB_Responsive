import "../../css/about/About.css";
import carnival from '../../assets/images/carnival.png';
export const  About = () => {
  return (
    <>
      <div className="h-fit bg-black" id="about">
        <div className="flex flex-col md:flex-row p-4 sm:p-8 md:p-4 items-center justify-center text-white sm:text-xl gap-2 lg:text-3xl">
          
              <img src={carnival} className="w-full md:w-1/2"></img>
            
              <p>Campus Blocks is dedicated to fostering a vibrant technical community within our college. Our mission is to provide a platform for students to explore, innovate, and excel in the field of technology.
<br/>
                We aim to empower our members with practical skills that complement their academic knowledge. Through hands-on workshops, coding sessions, and collaborative projects, Campus Blocks strives to bridge the gap between theoretical learning and real-world application.
</p></div>
      </div>
    </>
  );
};

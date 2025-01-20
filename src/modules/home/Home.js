import { Background_animation } from "./Background_Animation";
import Logo from "../../assets/images/logo.png";
import "../../css/home/Home.css";
import Typewriter from "typewriter-effect";

export const Home = () => {
  return (
    <>
      <div className="w-screen h-screen max-h-screen flex flex-col items-center justify-center bg-black border-b-2 border-white" id="home">
        <div className="home_outer">
          <Background_animation />
          <div className="set home_inner">
            <div className="home_inner_logo">
              <img src={Logo} alt="logo..."></img>
            </div>
            <div className="text-white text-xl w-[235px] sm:text-3xl sm:w-[350px] md:text-5xl italic font-semibold md:w-[570px]" >
              CAMPUS BLOCKS BVCOE
            </div>
            <div className="text-white flex w-72">
              <p className="pr-1">WHERE BYTES CREATE</p>
              <p>
                <Typewriter
                  options={{
                    strings: ["SUCCESS", "PASSION","BONDS"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

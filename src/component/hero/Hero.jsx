import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/oliver-pecker-HONJP8DyiSM-unsplash.jpg";
import icon from "../../assets/gifted.png";
import icon2 from "../../assets/shield.png";
import icon3 from "../../assets/deadline.png";
import icon4 from "../../assets/flexibility.png";
import icon5 from "../../assets/satisfaction.png";
import icon6 from "../../assets/project-management.png";
import icon7 from "../../assets/competency.png";
import icon8 from "../../assets/coin.png";
import icon9 from "../../assets/account.png";
import icon10 from "../../assets/work-schedule.png";
import icon11 from "../../assets/growth.png";
import icon12 from "../../assets/message.png";

export const Hero = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <section className="relative">
        <div>
          <img
            src={Image}
            alt="photo"
            className="absolute h-screen w-full object-cover opacity-80"
          />
        </div>

        <div className="relative flex flex-col items-center justify-center h-screen text-center px-4">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl m-2">
            Elevate Your Brand with Stunning Graphics
          </h1>
          <p className="text-lg md:text-xl font-light m-2">
            Get matched with expert graphic designers to bring your brand to
            life.
          </p>
          <button
            className="border-transparent border-2 hover:bg-transparent bg-green-800 hover:border-green-800 font-semibold rounded-lg m-2 px-3 py-2 hover:text-green-500 cursor-pointer transition duration-200"
            onClick={() => handleNavigation("/signup")}
          >
            GET STARTED
          </button>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 md:mb-16">
            <h2 className="font-semibold text-3xl md:text-4xl lg:text-6xl text-center mb-2">
              Make it real with Freestyle
            </h2>
            <p className="font-light text-center text-lg md:text-xl">
              Turn your vision into reality with expert freelancers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="border-2 text-white border-white p-4 flex flex-col items-center">
              <img src={icon} alt="icon" className="h-32 md:h-40 mt-2" />
              <div className="mt-4 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold uppercase text-center">
                  Top Talent Within Your Budget
                </h3>
                <p className="mt-4 text-center">
                  Discover skilled freelancers who deliver quality results, no
                  matter your budget.
                </p>
              </div>
            </div>

            <div className="border-2 text-white border-white p-4 flex flex-col items-center">
              <img src={icon2} alt="icon" className="h-32 md:h-40 mt-2" />
              <div className="mt-4 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold uppercase text-center">
                  Safe, Simple, & Secure
                </h3>
                <p className="mt-4 text-center">
                  Protected transactions and guaranteed contracts give you peace
                  of mind with every job.
                </p>
              </div>
            </div>

            <div className="border-2 text-white border-white p-4 flex flex-col items-center">
              <img src={icon3} alt="icon" className="h-32 md:h-40 mt-2" />
              <div className="mt-4 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold uppercase text-center">
                  Fast Connections, Faster Results
                </h3>
                <p className="mt-4 text-center">
                  Get matched with the perfect freelancer in minutes and hit
                  your deadlines with ease.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="border-2 text-white border-white p-4 flex flex-col items-center">
              <img src={icon4} alt="icon" className="h-32 md:h-40 mt-2" />
              <div className="mt-4 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold uppercase text-center">
                  Flexible Work, Global Reach
                </h3>
                <p className="mt-4 text-center">
                  Connect with clients and freelancers from around the world,
                  expanding opportunities beyond borders.
                </p>
              </div>
            </div>

            <div className="border-2 text-white border-white p-4 flex flex-col items-center">
              <img src={icon5} alt="icon" className="h-32 md:h-40 mt-2" />
              <div className="mt-4 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold uppercase text-center">
                  Ratings & Reviews You Can Trust
                </h3>
                <p className="mt-4 text-center">
                  Verified reviews help you make informed decisions and build
                  confidence in every collaboration.
                </p>
              </div>
            </div>

            <div className="border-2 text-white border-white p-4 flex flex-col items-center">
              <img src={icon6} alt="icon" className="h-32 md:h-40 mt-2" />
              <div className="mt-4 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold uppercase text-center">
                  Easy Project Management Tools
                </h3>
                <p className="mt-4 text-center">
                  Streamline your workflow with built-in tools for tracking
                  progress, setting milestones, and managing deadlines.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="mb-12 md:mb-16">
              <h2 className="font-semibold text-3xl md:text-4xl lg:text-6xl text-center mb-2">
                Unlock your freelancing potential
              </h2>
              <p className="font-light text-center text-lg md:text-xl">
                Achieve success with the right tools, opportunities, and
                support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="border-2 text-white border-white p-4 flex flex-col items-center">
                <img src={icon7} alt="icon" className="h-32 md:h-40 mt-2" />
                <div className="mt-4 flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold uppercase text-center">
                    Find Work That Fits Your Skills
                  </h3>
                  <p className="mt-4 text-center">
                    Get matched with projects tailored to your expertise, making
                    it easier to land jobs that suit your strengths.
                  </p>
                </div>
              </div>

              <div className="border-2 text-white border-white p-4 flex flex-col items-center">
                <img src={icon8} alt="icon" className="h-32 md:h-40 mt-2" />
                <div className="mt-4 flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold uppercase text-center">
                    Fair Pay, On Time
                  </h3>
                  <p className="mt-4 text-center">
                    Enjoy timely payments with secure transactions, ensuring you
                    get paid fairly for every job completed.
                  </p>
                </div>
              </div>

              <div className="border-2 text-white border-white p-4 flex flex-col items-center">
                <img src={icon9} alt="icon" className="h-32 md:h-40 mt-2" />
                <div className="mt-4 flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold uppercase text-center">
                    Build Your Professional Profile
                  </h3>
                  <p className="mt-4 text-center">
                    Showcase your skills, portfolio, and client reviews to
                    attract more high-quality opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border-2 text-white border-white p-4 flex flex-col items-center">
                <img src={icon10} alt="icon" className="h-32 md:h-40 mt-2" />
                <div className="mt-4 flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold uppercase text-center">
                    Flexible Schedule, Your Terms
                  </h3>
                  <p className="mt-4 text-center">
                    Work when you want, where you want—set your own hours and
                    choose the projects that fit your lifestyle.
                  </p>
                </div>
              </div>

              <div className="border-2 text-white border-white p-4 flex flex-col items-center">
                <img src={icon11} alt="icon" className="h-32 md:h-40 mt-2" />
                <div className="mt-4 flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold uppercase text-center">
                    Grow With Expert Resources
                  </h3>
                  <p className="mt-4 text-center">
                    Access tutorials, tips, and resources designed to help you
                    improve your skills and grow your freelancing business.
                  </p>
                </div>
              </div>

              <div className="border-2 text-white border-white p-4 flex flex-col items-center">
                <img src={icon12} alt="icon" className="h-32 md:h-40 mt-2" />
                <div className="mt-4 flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold uppercase text-center">
                    Direct Communication with Clients
                  </h3>
                  <p className="mt-4 text-center">
                    Connect directly with clients through secure messaging for
                    clear project discussions and faster approvals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

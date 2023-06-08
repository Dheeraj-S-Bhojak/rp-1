import React from "react";
import heroImg from "../../assets/images/hero.png";
import { Link } from "react-router-dom";

/**
 * Hero
 * Marketer hero 
 * @returns
 */
const Hero: React.FC = () => {
  return (
    <>
      <div className="container hero m-8 mx-auto xl:px-0 flex flex-wrap -p-12">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Find The Best{" "}
              <span className="text-indigo-600 hover:text-amber-300">
                Influencer
              </span>{" "}
              For Your Business
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua commodo
            </p>

            <div className="flex flex-col ps- items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                to="home"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md hover:text-black hover:bg-amber-300">
                Get A Free Trial
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <img
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

import React from "react";
import Svg2 from "./Svg2";
function Header() {
  return (
    <header
      className="  text-white text-center"
      style={{
        backgroundImage:
          "url(https://s3-alpha-sig.figma.com/img/a2cb/24b2/3a64b6be90f92159e7a98d24bdd23873?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kQRmGACi7YwUxxSuunKSF54NB3wij73KUs-jZcIbiMAel9LHI3v3Ltt44FnutI-Hk242XZTY515S9ISGiYqeuenqKJSc7JlHdCHADzZ0UXcsaxYKjb3cEHvgJSy3HsvThef-ek14MtQOuk3Y3fyOqYxJE2pwt~x1KqjfLUd3-D9GSiDd0HONHsOjTS~Zn7V1Gfp7-1rR3WkbSWn5Prqb7DEMPTTr6snJNwZcD0zf1htJiVyrFuYF~pah6Dd8P6HhvK4AWJKKxsDX0zKO3SUHY3u6FC0azEeEGxJxQNqbNvvhusc6b6sRZ8L6NBOpKmB9s6GNoJfvdELm6gK4M2Zjdg__)",
      }}
    >
      <div className="bg-opacity-50 w-full h-full bg-black pt-12">
        <div className="container mx-auto px-4">
          {/* Flex container for main content */}
          <div className="md:flex md:flex-cols-3 grid items-center justify-center md:justify-between lg:space-x-8 lg:space-y-0 space-y-6 ">
            {/* Left SVG (Large Circle) */}
            <span className="w-1/4 absolute md:start-0 -start-12">
              <img
                src={require("../img/Vector.png")}
                className="relative z-10 "
                alt="Portfolio"
              />
            </span>
            <span className="lg:ms-8 ms-12 top-12 absolute">
              <svg
                width="20"
                height="64"
                viewBox="0 0 20 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.64 63.8H18.44C11.08 63.8 7.8 59.96 7.8 53.48V39.16C7.8 36.04 6.84 35.16 3.56 35.16H0.6V29.24H3.56C6.84 29.24 7.8 28.36 7.8 25.24V10.92C7.8 4.44 11.08 0.599998 18.44 0.599998H19.64V6.04H18.12C14.52 6.04 13.16 7.24 13.16 11.16V25.32C13.16 30.28 10.76 31.96 7.16 31.96V32.44C10.76 32.44 13.16 34.12 13.16 39.08V53.24C13.16 57.16 14.52 58.36 18.12 58.36H19.64V63.8Z"
                  fill="#5F6377"
                />
              </svg>
            </span>
            {/* Main Text Content */}
            <div className="flex flex-col lg:items-start items-center text-start w-full ms-2">
              <h1 className="font-bold mt-4 font-corinthia md:text-7xl text-4xl text-start">
                I'm James
              </h1>
              <span className="text-yellow-500 lg:text-9xl text-5xl font-extrabold">
                {" "}
                Thomas
              </span>
              <div className="md:w-4/5">
                <p className="lg:text-5xl text-2xl mt-4 font-extralight">
                  I like making{" "}
                  <span className="font-bold text-customGreen uppercase">FUN,</span>{" "}
                  <br />
                  interactive things with <br />
                  code. I also{" "}
                  <span className="font-bold text-customGreen uppercase">
                    talk & write
                  </span>
                  <br />
                  about those things.
                </p>
              </div>
              <div className="mt-6 flex space-x-4">
                <div className="bg-yellow-300 p-2  border-e-2 border-b-2 border-yellow-900 rounded-lg flex justify-between">
                  <span className="p-1 rounded-lg flex items-center gap-2 text-black">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V11.5"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.21 14.77L15.6701 18.31C15.5301 18.45 15.4 18.71 15.37 18.9L15.18 20.25C15.11 20.74 15.45 21.0801 15.94 21.0101L17.29 20.82C17.48 20.79 17.75 20.66 17.88 20.52L21.4201 16.9801C22.0301 16.3701 22.3201 15.6601 21.4201 14.7601C20.5301 13.8701 19.82 14.16 19.21 14.77Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.7001 15.28C19.0001 16.36 19.8401 17.2 20.9201 17.5"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <h2>
                      Here<span className="font-bold text-xl">Me</span>{" "}
                    </h2>
                    <svg
                      width="24"
                      height="22"
                      viewBox="0 0 32 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 2.77148C9.01375 2.77148 3.34375 8.44148 3.34375 15.4277C3.34375 22.414 9.01375 28.084 16 28.084C22.9862 28.084 28.6562 22.414 28.6562 15.4277"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.2656 14.1621L27.6438 3.784"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M28.6563 8.88445V2.77148H22.5433"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="bg-pink-300 p-2  border-e-2 border-b-2 border-pink-900 rounded-lg flex justify-between">
                  <span className="p-1 rounded-lg flex items-center gap-2 text-black">
                    <h2>
                      {" "}
                      <span className="font-bold text-xl">See</span> portfolio
                    </h2>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <span className="relative w-2/3 lg:w-full flex justify-center mx-auto top-12">
              <span className="bg-white p-4 w-34 absolute md:top-80 top-56 md:end-20 -end-12 z-20 h-14 rounded-tl-2xl rounded-e-2xl border-b-2 border-e-2 border-gray-400 text-black font-bold">
                Data Analysis
              </span>

              <div className="bg-customGreen rounded-t-full absolute z-0 w-full md:w-3/4 lg:w-3/5  h-full top-12"></div>

              <img
                src={require("../img/elegant-man-suit-arms-crossed 1.png")}
                className="relative z-10 "
                alt="Portfolio"
              />
              <span className="bg-white p-4 w-44 absolute z-10 h-14 rounded-tr-2xl rounded-s-2xl border-b-2 border-e-2 bottom-28 md:start-24 start-0 border-gray-400 text-black font-bold">
                App Development
              </span>
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-customGreen w-full h-44 absolute z-10  flex justify-center items-center md:gap-12 gap-2" >
          <span className="border-e  border-black pe-12 text-black">
            <h1 className="md:text-7xl text-4xl font-extrabold">7+</h1>
            <p className="md:text-3xl text-xl font-extralight">years of</p>
            <p className="md:text-3xl text-xl font-bold">experience</p>
          </span>
          <span className="border-e  border-black pe-12 text-black">
            <h1 className="md:text-7xl text-4xl font-extrabold">50+</h1>
            <p className="md:text-3xl text-xl font-extralight">complete</p>
            <p className="md:text-3xl text-xl font-bold">projects</p>
          </span>
          <span className=" pe-12 text-black">
            <h1 className="md:text-7xl text-4xl  font-extrabold">30+</h1>
            <p className="md:text-3xl text-xl font-extralight">Happy</p>
            <p className="md:text-3xl text-xl font-bold">customer</p>
          </span>
          <span
            className="absolute md:end-12 end-0 -top-12
        "
          >
            <Svg2 />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;

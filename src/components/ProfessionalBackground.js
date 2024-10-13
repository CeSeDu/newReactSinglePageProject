import React from "react";
import Svg1 from "./svg1";
import Svg2 from "./Svg2";

function ProfessionalBackground() {
  return (
    <section
      className="bg-opacity-50 text-white flex flex-cols-3 mt-44 relative"
      style={{
        backgroundImage:
          "url(https://s3-alpha-sig.figma.com/img/a2cb/24b2/3a64b6be90f92159e7a98d24bdd23873?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kQRmGACi7YwUxxSuunKSF54NB3wij73KUs-jZcIbiMAel9LHI3v3Ltt44FnutI-Hk242XZTY515S9ISGiYqeuenqKJSc7JlHdCHADzZ0UXcsaxYKjb3cEHvgJSy3HsvThef-ek14MtQOuk3Y3fyOqYxJE2pwt~x1KqjfLUd3-D9GSiDd0HONHsOjTS~Zn7V1Gfp7-1rR3WkbSWn5Prqb7DEMPTTr6snJNwZcD0zf1htJiVyrFuYF~pah6Dd8P6HhvK4AWJKKxsDX0zKO3SUHY3u6FC0azEeEGxJxQNqbNvvhusc6b6sRZ8L6NBOpKmB9s6GNoJfvdELm6gK4M2Zjdg__)",
      }}
    >
      <div className="bg-black flex-row md:flex-cols-3 md:flex  gap-12 py-12 m-0 bg-opacity-50 w-full h-full md:justify-around justify-center mx-auto">
        <div>
          <img
            src={require("../img/Group 324.png")}
            className="relative z-10 "
            alt="Portfolio"
          />

          <Svg1 />
        </div>
        <div className="flex flex-col md:justify-around p-12 z-20 md:w-1/3">
          <h2 className="text-start text-5xl font-bold py-4">
            My Professional Background
          </h2>
          <p className="py-4 ">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium,
          </p>
          <div className="flex items-center">
            <h1 className="bg-pink-400 font-bold me-2 text-black text-lg p-2 rounded-sm">
              01
            </h1>
            <span className="w-2/3 border-b pb-4 border-opacity-20 border-white">
              <h3 className="text-xl font-bold">Data Analytics</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </span>
          </div>
          <div className="flex items-center">
            <h1 className="bg-customGreen font-bold me-2 text-black text-lg p-2 rounded-sm">
              {" "}
              02
            </h1>
            <span className="w-2/3 md:w-3/4 border-b pb-4 border-opacity-20 border-white">
              <h3 className="text-xl font-bold">Mobile App Development</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </span>
          </div>
          <div className="flex items-center">
            <h1 className="bg-purple-400 font-bold me-2 text-black text-lg p-2 rounded-sm">
              {" "}
              03
            </h1>
            <span className="w-2/3 border-b pb-4 border-opacity-20 border-white">
              <h3 className="text-xl font-bold">Process Engineering</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </span>
          </div>
          <div className="flex items-center">
            <h1 className="bg-yellow-400 font-bold me-2 text-black text-lg p-2 rounded-sm">
              {" "}
              04
            </h1>
            <span className="w-2/3 border-b pb-4 border-opacity-20 border-white">
              <h3 className="text-xl font-bold">Data Analytics</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </span>
          </div>
        </div>
        <div>
          <span className="absolute bottom-0 end-0 overflow-hidden z-10 ">
            <img
              src={require("../img/Vector (1).png")}
              className="relative z-20 "
              alt="Portfolio"
            />
          </span>
          <div className="absolute -bottom-12 overflow-hidden z-0 start-44">
            <Svg2 />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalBackground;

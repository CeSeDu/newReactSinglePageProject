import React from "react";

function Footer() {
  return (
    <footer className="bg-black py-12 text-center grid text-white container gap-12 mx-auto" >
      <div className="md:flex md:flex-cols-2 p-12 md:p-2 justify-center  gap-12">
        <div className="grid justify-end col-span-1 ">
          <img
            src={require("../img/thisuix.png")}
            className=" "
            alt="Portfolio"
          />
          <p className="text-white text-start max-w-2xl pt-4">
            &copy; Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.{" "}
          </p>
        </div>
        <div className="grid col-span-3">
          <div className="flex gap-24 text-start">
            <span>
              <h1 className="text-2xl font-bold pb-2">Pages</h1>
              <ul className="font-thin">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </span>
            <span>
              <h1 className="text-2xl font-bold pb-2">Legal</h1>
              <ul className="font-thin">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </span>
          </div>
          <div className="grid text-start pt-6">
            <small className="text-xl font-light pb-2">Subscribe</small>
            <div className="bg-gray-900 p-2  border border-gray-300 rounded-lg flex justify-between">
              <input
                className="bg-gray-900 placeholder:text-sm"
                placeholder="Input your emaill address in here"
              />
              <span className="bg-customGreen p-1 rounded-lg">
                <svg
                  width="32"
                  height="31"
                  viewBox="0 0 32 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 2.77148C9.01375 2.77148 3.34375 8.44148 3.34375 15.4277C3.34375 22.414 9.01375 28.084 16 28.084C22.9862 28.084 28.6562 22.414 28.6562 15.4277"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.2656 14.1621L27.6438 3.784"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.6563 8.88445V2.77148H22.5433"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <small>© 2023 - Thisuix. All Rights Reserved.</small>
    </footer>
  );
}

export default Footer;

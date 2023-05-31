import React from "react";
import "./contact.css";
import Navbar from "../Navbar/Navbar";
import { AiFillPhone } from "react-icons/ai";
import { FaMailBulk } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import Getintouch from '../../utils/getintouch/Getintouch'
const Contactus = () => {
  return (
    <>
      <Navbar />
      <div className="contactus py-4">
        <div className="contact-heading py-4">
          <h1>
            Contact <span>Us.</span>
          </h1>
        </div>
        <div className="dial-container">
          <div className="phone-container">
            <div className="phone-box">
              <AiFillPhone color="white" width={150} />
            </div>
            <div className="phone-number">
              <h1>+9101464656</h1>
            </div>
            <div className="phone-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. tae
              sdjhc ouw riuw eoifusdoi adfh
            </div>
          </div>
          <div className="phone-container">
            <div className="phone-box">
              <FaMailBulk color="white" width={150} />
            </div>
            <div className="phone-number">
              <h1>mail@domain.com</h1>
            </div>
            <div className="phone-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. tae
              sdjhc ouw riuw eoifusdoi adfh
            </div>
          </div>
          <div className="phone-container">
            <div className="phone-box">
              <FaAddressBook color="white" width={150} />
            </div>
            <div className="phone-number">
              <h1>+London , Baker Street</h1>
            </div>
            <div className="phone-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. tae
              sdjhc ouw riuw eoifusdoi adfh
            </div>
          </div>
        </div>

        <div className="form">
          <div className="form_image">
            <img src="https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/10/team-of-innovators-2021-09-01-10-50-57-utc-1024x683.jpg" />
          </div>
          <div className="form-input py-4">
            {/* <!-- Container for demo purpose --> */}
            <div class="container  ">
              {/* <!-- Section: Design Block --> */}
              <section class="mb-32 text-center text-gray-800">
                <div class="max-w-[700px]  px-3 lg:px-6">
                  <form>
                    <div class="form-group mb-6">
                      <input
                      
                        type="text"
                        class="  form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-black bg-clip-padding
            border border-solid border-gray-200
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput7"
                        placeholder="Enter your Name"
                      />
                    </div>
                    <div class="form-group mb-6">
                      <input
                        type="email"
                        class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-black bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput8"
                        placeholder="Enter your email "
                      />
                    </div>
                    <div class="form-group mb-6">
                      <textarea
                        class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-black bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
                        id="exampleFormControlTextarea13"
                        rows="3"
                        placeholder=" Enter your message"
                      ></textarea>
                    </div>
                    {/* <div class="form-group form-check text-center mb-6"> */}
                   
                    <button
                      type="submit"
                      class="
          w-1/3
          px-6
          py-2.5
          bg-yellow-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-#c48f56-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </section>
              {/* <!-- Section: Design Block --> */}
            </div>
            {/* <!-- Container for demo purpose --> */}
          </div>
        </div>
      </div>
      <Getintouch/>
    </>
  );
};

export default Contactus;

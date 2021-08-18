import { Loader } from "components/Loader";
import { EditProfile } from "containers/EditProfile";
import React, { useState } from "react";
import {
  FaAt,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMobileAlt,
  FaYoutube,
} from "react-icons/fa";
import { UserProfileProps } from "types/props";
export function UserProfile(props: UserProfileProps) {
  const { user } = props;
  const { address, firstname, lastname, phoneNumber, username } = user;
  const [loading] = useState(false);

  return (
    <>
      <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
          <div
            className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
            id="profile"
          >
            <div className="p-4 md:p-12 text-center lg:text-left">
              <div
                className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(" + "https://source.unsplash.com/fH-BSvYeX5g" + ")",
                }}
              ></div>

              <h1 className="text-3xl font-bold pt-8 lg:pt-0">
                {firstname + " " + lastname}
              </h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-blue-500 opacity-25"></div>
              <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                <div className="h-3 fill-current text-blue-700 ">
                  <FaAt size="15" />
                </div>
                <div>{username}</div>
              </p>
              <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                <div className="h-4 fill-current text-blue-700 pr-3">
                  <FaMobileAlt size="18" />
                </div>
                {phoneNumber || "123456789"}
              </p>
              <p className="pt-4 text-base flex items-center justify-center lg:justify-start">
                {address ||
                  "Infopark Road Infopark Campus, Infopark E, Kakkanad, Kerala 682042"}
              </p>
              <p className="pt-8 text-sm">I am what i am and i do what i do.</p>

              <div className="pt-12 pb-8">
                <EditProfile>Edit</EditProfile>
              </div>

              <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                <a
                  className="link"
                  data-tippy-content="@facebook_handle"
                  href="#"
                >
                  <div className="h-6 fill-current text-gray-600 hover:text-blue-700">
                    <FaFacebook size="30" />
                  </div>
                </a>
                <a
                  className="link"
                  data-tippy-content="@twitter_handle"
                  href="#"
                >
                  <div className="h-6 fill-current text-gray-600 hover:text-blue-700">
                    <FaGithub size="30" />
                  </div>
                </a>
                <a
                  className="link"
                  data-tippy-content="@github_handle"
                  href="#"
                >
                  <div className="h-6 fill-current text-gray-600 hover:text-blue-700">
                    <FaLinkedin size="30" />
                  </div>
                </a>
                <a
                  className="link"
                  data-tippy-content="@unsplash_handle"
                  href="#"
                >
                  <div className="h-6 fill-current text-gray-600 hover:text-blue-700">
                    <FaYoutube size="30" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5">
            <img
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
              src="https://source.unsplash.com/ooAFvQKgJz8"
            ></img>
          </div>
        </div>
      </div>
      {loading && <Loader fullPage />}
    </>
  );
}

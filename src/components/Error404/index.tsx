import React from "react";
import { Link } from "react-router-dom";
import { Error404Props } from "types/props";
export function Error404(props: Error404Props) {
  const { header, descripton } = props;

  return (
    <>
      <div className="container mx-auto px-4">
        <section className="py-8 px-4 text-center">
          <div className="max-w-auto mx-auto">
            <div className="md:max-w-lg mx-auto">
              <img className="w-64 mx-auto" src="empty.svg" />
            </div>
            <h2 className="mt-8 uppercase text-xl lg:text-5xl font-black">
              {header}
            </h2>
            <p className="mt-6 uppercase text-sm lg:text-base text-gray-900">
              {descripton}
            </p>
            <Link
              className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-light py-4 px-6 rounded-full inline-block uppercase shadow-md"
              to="/web/profile"
            >
              Visit Profile
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

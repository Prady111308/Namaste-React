import React from "react";
import Container from "./Container";
import useAbout from "../hooks/useAbout";
import Loader from "./loader/loader";
import { Link } from "react-router-dom";

const About = () => {
  const info = useAbout();
  return (
    <Container>
      {info ? (
        <div className="max-w-xl mx-auto bg-white rounded-lg p-10 my-10">
          <div className="w-full mx-auto">
            <img
              className="h-36 w-36 rounded-full mx-auto shadow-lg"
              src={info.avatar_url}
              alt="Profile Picture"
            />
          </div>
          <div className="px-4 text-center my-10">
            <div className="uppercase tracking-wide text-lg text-black font-semibold">
              {info.name}
            </div>
            <div>
              <p className="text-gray-600">{info.bio}</p>
            </div>
            <div className="my-5">
              <p className="text-gray-600">{info.company}</p>
            </div>
          </div>
          <div className="w-full mx-auto text-center">
              <Link to="/">
                <button
                  type="button"
                  className="rounded-sm bg-red-400 p-2 text-white hover:bg-red-500"
                >
                  SEE RESTAURANT
                </button>
              </Link>
            </div>
        </div>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default About;

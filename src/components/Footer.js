import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          signature{
            asset->{
              _id,
              url
            },
            alt 
          },
          email,
          name,
              title,
              bio, 
        }`
      )
      .then((data) => setAuthorData(data[0]))
      .catch(console.error);
  }, []);

  if (!authorData) {
    return null;
  }

  return (
    <footer className="bg-pcBlack text-center pb-12">
      <p className="text-pcWhite text-[20px] font-light text-center mb-4">
        You can find also me on{" "}
        <a
          className="font-semibold hover:text-pcBlue"
          href="https://dribbble.com/jpesteban2"
        >
          Dribbble </a>
        - {" "}
        <a
          className="font-semibold hover:text-pcBlue"
          href="https://www.linkedin.com/in/jpesteban2/"
        >
          LinkedIn </a>
        - {" "}
        <a
          className="font-semibold hover:text-pcBlue"
          href="https://www.instagram.com/jpesteban_2/"
        >
          Instagram
        </a>
        <br></br> or directly reach out at{" "}
        <a
          className="font-semibold hover:text-pcBlue"
          href="mailto:jimmypesteban@gmail.com"
        >
          {authorData.email}{" "}
        </a>{" "}
        or{" "}
        <a
          className="font-semibold hover:text-pcBlue"
          href="https://api.whatsapp.com/send?phone=+85295322433"
        >
          +852 9532 2433
        </a>
      </p>

      <p className="text-pcWhite text-[16px] font-regular text-center mb-4">
        © 2023 Jimmy Esteban
      </p>
    </footer>
  );
}

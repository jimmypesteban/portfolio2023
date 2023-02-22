import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import { AnimatePresence, motion } from "framer-motion";

export default function Graphics() {
  const [GraphicsData, setGraphicsData] = useState(null);

  useEffect(() => {
    console.log("called!");
    sanityClient
      .fetch(
        `*[_type == "gallery"]{
          title,
          description,
          imageURL,
          imageContentURL,
        }`
      )
      .then((data) => setGraphicsData(data))
      .catch(console.error);
  }, []);

  console.log(GraphicsData);

  if (!GraphicsData) {
    return (
      <div className="w-full h-max align-middle">
        <motion.div
          transition={{
            y: {
              duration: 1,
              yoyo: Infinity,
              ease: "easeIn",
            },
          }}
          animate={{ y: ["0px", "-200px"] }}
        >
          <div className="flex h-screen">
            <div className="m-auto">
              <div className="h-10 w-10 rounded-full bg-blue-200 mx-auto"></div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <h1>Graphics page!</h1>

      {GraphicsData &&
        GraphicsData.map((graphicsgallery, index) => (
          <div key={index}>
            <a href={graphicsgallery.imageContentURL} target="_blank"> <img className="" src={graphicsgallery.imageURL} /></a>
          </div>
        ))}
    </>
  );
}

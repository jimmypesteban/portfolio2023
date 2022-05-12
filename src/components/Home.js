
import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { motion } from "framer-motion";

export default function Home() 
{
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    
    sanityClient
      .fetch(
        `*[_type == "author"]{
              name,
              title,
              bio,
              "authorImage": image.asset-> url
        }`
      )
      .then((data) => setAuthorData(data[0]))
      .catch(console.error);
  }, []);

  if (!authorData) {
    return (
        <div className="w-full h-max align-middle">
        <motion.div transition={{
          y: {
            duration: 1,
            yoyo: Infinity,  
            ease: "easeIn",
          }
        }}
        animate={{ y: ["0px", "-200px"] }}>
        <div className="flex h-screen">
          <div className="m-auto">
            <div className="h-10 w-10 rounded-full bg-blue-200 mx-auto"></div>
          </div>
        </div>
      </motion.div>
      </div>
    )
  }

  console.log(authorData)

  return (
   <>
    <div className="bg-black">
    <div className="text-[72px] font-bold text-myFont text-myWhite">
    <h1>Hello! I'm {authorData.name} - a 
    <div class="
            bg-gradient-to-r bg-clip-text text-transparent 
           from-red-600 via-[rgba(45,180,199,1)] bg-pink-600
            animate-text
            ">
      UI/UX Designer
</div>


    
    .
    </h1>
    <p>Worked in startup industries such as Fintech, IT Consultancy and Multimedia companies.</p>
    </div>
    </div>
   </>
  )

}

import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import { motion } from "framer-motion";

export default function AboutMe() {
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
              experience, education, bio, email,
              resume{
                asset->{
                  _id,
                  url
                }
              },
        }`
      )
      .then((data) => setAuthorData(data[0]))
      .catch(console.error);
  }, []);

  if (!authorData) {
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

  console.log(authorData);

  return (
    <>
      <div className="px-10 lg:px-[160px] bg-myBlack flex flex-wrap justify-between items-center mx-auto py-8 text-myFont">
      <div className="w-full px-16 lg:px-[160px] mt-8">
          <div className="text-[40px] mb-4 font-bold text-myBlue font-myFont2">
            Skills
          </div>
          </div>
        
        <div className="w-full px-16 lg:px-[160px] mt-8">
          <div className="text-[40px] mb-4 font-bold text-myBlue font-myFont2">
            Experience
          </div>

          <ol class="relative border-l border-white dark:border-gray-700">
            {authorData.experience &&
              authorData.experience.map((experience, index) => (
                <div className="p- my-4" key={index}>
                  <li class="mb-10 ml-6">
                    <div class="absolute w-3 h-3 bg-myWhite rounded-full mt-1.5 left-[-6.5px] shadow-[0px_0px_2px_5px_rgba(255,255,255,0.15)]"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-myGray3 font-myFont ">
                      {experience.date}
                    </time>

                    <h3 className="text-lg text-myGray font-myFont2 text-[32px] font-medium pt-4">
                      {experience.roleTitle},{" "}
                      <span className="text-myWhite font-bold hover:text-myBlue">
                        <a href={experience.titleLink}>{experience.title}</a>
                      </span>
                    </h3>
                    <div className="mt-4 mb-4 text-myGray2 font-myFont">
                      <BlockContent
                        className=""
                        blocks={experience.experience}
                        projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                        dataset="production"
                      />
                    </div>
                  </li>
                </div>
              ))}
          </ol>
        </div>

        <div className="w-full px-16 lg:px-[160px] mt-8">
          <div className="text-[40px] mb-4 font-bold text-myBlue font-myFont2">
            Education
          </div>

          <ol class="relative border-l border-white dark:border-gray-700">
            {authorData.education &&
              authorData.education.map((education, index) => (
                <div className="p- my-4" key={index}>
                  <li class="mb-10 ml-6">
                    <div class="absolute w-3 h-3 bg-myWhite rounded-full mt-1.5 -left-1.5 shadow-[0px_0px_2px_5px_rgba(255,255,255,0.15)]"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-myGray3 font-myFont ">
                      {education.date}
                    </time>

                    <h3 className="text-lg text-myGray font-myFont2 text-[24px] font-semibold pt-4">
                      {education.degreeProgramme}{" "}
                    </h3>
                    <h3 className="text-lg text-myGray font-myFont2 text-[16px] pt-2">
                      {education.schoolName}{" "}
                    </h3>
                  </li>
                </div>
              ))}
          </ol>
        </div>

        <div className="px-[160px] mt-16">
          <p className="text-myWhite text-[20px] font-light text-center mb-4">
            {authorData.bio !== null && (
              <BlockContent
                className=""
                blocks={authorData.bio}
                projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                dataset="production"
              />
            )}
          </p>
          <p className="text-myWhite text-[20px] font-light text-center mb-9">
            Here is my{" "}
            {authorData.resume !== null && (
              <a
                className="font-semibold hover:text-myBlue"
                href={`${authorData.resume.asset.url}?dl=`}
              >
                résumé
              </a>
            )}
            .
          </p>
          <p className="text-myWhite text-[20px] font-light text-center mb-4">
            You can find me on <a className="font-semibold hover:text-myBlue" href="https://dribbble.com/jpesteban2">Dribbble</a>, <a className="font-semibold hover:text-myBlue" href="https://www.linkedin.com/in/jpesteban2/">LinkedIn</a>,{" "}
            <a className="font-semibold hover:text-myBlue" href="https://www.instagram.com/jpesteban_2/">Instagram</a>,<br></br> or directly reach out at   
            <a href="mailto:jimmypesteban@gmail.com">{authorData.email}</a> or <a href="https://api.whatsapp.com/send?phone=+85295322433">+852 95322433</a>
          </p>
        </div>
      </div>
    </>
  );
}

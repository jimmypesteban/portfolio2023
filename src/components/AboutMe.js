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
              recommendationLetter{
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
      <div className="px-10 lg:px-[160px] md:px-[24px] sm:px-[24px]  bg-pcBlack flex flex-wrap justify-between items-center mx-auto py-8 font-pfFont">
        <div className="lg:px-[160px] md:px-[24px] sm:px-[24px] mt-16 mx-auto">
          <p className="text-pcWhite text-[20px] font-light text-center mb-4">
            {authorData.bio !== null && (
              <BlockContent
                className=""
                blocks={authorData.bio}
                projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                dataset="production"
              />
            )}
          </p>
          <br></br>
          <p className="text-[24px] mb-8 text-center font-medium text-pcGray3 font-pfFont">
            <p className="text-[20px] font-pfFont">
                  {authorData.resume !== null && (
                    <a
                      className="font-normal text-pcWhite relative underline duration-300 after:content-[''] after:bg-pcWhite after:h-[2px] after:w-0 after:left-0 after:bottom-[8px] after:absolute after:duration-300 hover:after:w-full hover:no-underline"
                      href={`${authorData.resume.asset.url}?dl=`}
                    >Résumé
                    </a>
                  )}<span className="whitespace-pre font-pfFont2 font-semi-bold">  /  </span>
                  {authorData.resume !== null && (
                    <a
                      className="font-normal text-pcWhite relative underline duration-300 after:content-[''] after:bg-pcWhite after:h-[2px] after:w-0 after:left-0 after:bottom-[8px] after:absolute after:duration-300 hover:after:w-full hover:no-underline"
                      href={`${authorData.recommendationLetter.asset.url}?dl=`}
                    >Recommendation Letter
                    </a>
                  )}
                  </p>
          </p>
          {/* <p className="text-pcWhite text-[20px] font-light text-center mb-4">
            You can find me on <a className="font-semibold hover:text-pcBlue" href="https://dribbble.com/jpesteban2">Dribbble</a>, <a className="font-semibold hover:text-pcBlue" href="https://www.linkedin.com/in/jpesteban2/">LinkedIn</a>,{" "}
            <a className="font-semibold hover:text-pcBlue" href="https://www.instagram.com/jpesteban_2/">Instagram</a>,<br></br> or directly reach out at   
            <a href="mailto:jimmypesteban@gmail.com">{authorData.email} </a> or <a href="https://api.whatsapp.com/send?phone=+85295322433">+852 95322433</a>
          </p> */}
        </div>

        <div className="w-full px-16 lg:px-[160px] md:px-[24px] sm:px-[24px]  mt-8">
          <div className="text-[40px] mb-4 font-bold text-pcBlue font-pfFont2">
            Skills
          </div>
        </div>

        <div className="w-full px-16 lg:px-[160px] md:px-[24px] sm:px-[24px] mt-8">
          <div className="text-[40px] mb-4 font-bold text-pcBlue font-pfFont2">
            Experience
          </div>

          <ol className="relative border-l border-white dark:border-gray-700">
            {authorData.experience &&
              authorData.experience.map((experience, index) => (
                <div className="p- pf-4" key={index}>
                  <li className="mb-10 ml-6">
                    <div className="absolute w-3 h-3 bg-pcWhite rounded-full mt-1.5 left-[-6.5px] shadow-[0px_0px_2px_5px_rgba(255,255,255,0.15)]"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-pcGray3 font-pfFont ">
                      {experience.date}
                    </time>

                    <h3 className="text-lg text-pcGray font-pfFont2 text-[32px] font-medium pt-4">
                      {experience.roleTitle},{" "}
                      <span className="text-pcWhite font-bold hover:text-pcBlue">
                        <a href={experience.titleLink}>{experience.title}</a>
                      </span>
                    </h3>
                    <div className="mt-4 mb-4 text-pcGray2 font-pfFont">
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

        <div className="w-full px-16 lg:px-[160px] md:px-[24px] sm:px-[24px]  mt-8 mx-auto">
          <div className="text-[40px] mb-4 font-bold text-pcBlue font-pfFont2">
            Education
          </div>

          <ol className="relative border-l border-white dark:border-gray-700">
            {authorData.education &&
              authorData.education.map((education, index) => (
                <div className="p- pf-4" key={index}>
                  <li className="mb-10 ml-6">
                    <div className="absolute w-3 h-3 bg-pcWhite rounded-full mt-1.5 -left-1.5 shadow-[0px_0px_2px_5px_rgba(255,255,255,0.15)]"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-pcGray3 font-pfFont ">
                      {education.date}
                    </time>

                    <h3 className="text-lg text-pcGray font-pfFont2 text-[24px] font-semibold pt-4">
                      {education.degreeProgramme}{" "}
                    </h3>
                    <h3 className="text-lg text-pcGray font-pfFont2 text-[16px] pt-2">
                      {education.schoolName}{" "}
                    </h3>
                  </li>
                </div>
              ))}
          </ol>
        </div>
      </div>
    </>
  );
}

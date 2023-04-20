import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import { motion } from "framer-motion";

export default function Home() {
  const [authorData, setAuthorData] = useState(null);
  const [projectData, setProjectData] = useState("Homepage");
  const [loading, setLoading] = useState(true);

  const InitialTransition = () => {};

  const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 100,
      transition: {
        when: "afterChildren",
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const textContainer = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 0.25,
        when: "afterChildren",
      },
    },
  };

  const text = {
    initial: {
      y: 40,
    },
    animate: {
      y: 80,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  useEffect(() => {
    console.log("called!");

    setTimeout(() => {
      setLoading(false);
    }, 1500);

    sanityClient
      .fetch(
        `*[_type == "project" && "Homepage" in categories[]->title] | order(_createdAt desc){
          "categories": categories[]->title,
          title,
          headline,
          role,
          brief,
          duration,
          projectTitleColor,
          projectTagsColor,
          projectButtonColor,
          slug,
          liveSite,
          externalLink,
          categories[]->{
            title
          },
          projectLogo{
            asset->{
              _id,
              url
            },
            alt 
          },
          projectBanner{
            asset->{
              _id,
              url
            },
            alt 
          },
          projectHomeBanner{
            asset->{
              _id,
              url
            },
            alt 
          },
          
          publishedAt,
          projectTags
        }`
      )
      .then((data) => {
        setProjectData(data);
      })
      .catch(console.error);

    return () => {
      clearTimeout();
    };
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
              name,
              title,
              bio,
              homeBanner{
                asset->{
                  _id,
                  url
                },
                alt 
              },
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

  if (!authorData || loading === true) {
    return (
      <motion.div
        className="absolute z-50 flex items-center justify-center w-full bg-black"
        initial="initial"
        animate="animate"
        variants={blackBox}
      >
        <motion.svg variants={textContainer} className="absolute z-50 flex">
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
            className="text-white"
          >
            <rect className="w-full h-full fill-current" />
            <motion.rect
              variants={text}
              className="w-full h-full text-gray-600 fill-current"
            />
          </pattern>
          <text
            className="text-4xl font-bold font-pfFont2"
            text-anchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)" }}
          >
            Home
          </text>
        </motion.svg>
      </motion.div>
    );
  }

  // console.log(authorData);
  console.log(projectData);
  return (
    <>
      <div className="bg-pcBlack">
        <div className="font-pfFont2 text-pcWhite">
          <div className="relative w-full h-[calc(100vh-100px)]">
            <div className="absolute w-full top-[35%] mix-blend-difference md:text-[56px] text-[32px] font-bold text-center">
              Hello I'm {authorData.name}, a UI/UX Designer
              <p className="md:text-[24px] text-[20px] px-[24px] mt-4 mb-8 text-center font-medium text-pcGray3 font-pfFont">
                Worked in startup industries such as <br></br>{" "}
                <strong>Fintech</strong>, <strong>IT Consultancy</strong> and{" "}
                <strong>Multimedia</strong> companies.
              </p>
              <div>
                <p className="text-[20px] font-pfFont">
                  {authorData.resume !== null && (
                    <a
                      className="font-normal text-pcWhite relative underline duration-300 after:content-[''] after:bg-pcWhite after:h-[2px] after:w-0 after:left-0 after:bottom-[8px] after:absolute after:duration-300 hover:after:w-full hover:no-underline"
                      href={`${authorData.resume.asset.url}?dl=`}
                    >
                      Résumé
                    </a>
                  )}
                  <span className="whitespace-pre font-pfFont2 font-semi-bold">
                    {" "}
                    /{" "}
                  </span>
                  {authorData.resume !== null && (
                    <a
                      className="font-normal text-pcWhite relative underline duration-300 after:content-[''] after:bg-pcWhite after:h-[2px] after:w-0 after:left-0 after:bottom-[8px] after:absolute after:duration-300 hover:after:w-full hover:no-underline"
                      href={`${authorData.recommendationLetter.asset.url}?dl=`}
                    >
                      Recommendation Letter
                    </a>
                  )}
                </p>
              </div>
            </div>
            {authorData.homeBanner !== null && (
              <div className="">
                <img
                  alt={authorData.homeBanner.asset.url}
                  className="w-full h-[calc(100vh-100px)]"
                  src={authorData.homeBanner.asset.url}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-pcBlack pt-12 lg:px-[320px] px-[16px]">
        <div className="lg:columns-2 sm:columns-1 gap-10">
          <div className="flex flex-wrap justify-center items-center min-h-[320px] bg-pcBlack/50 mb-10">
            <div className="inline-flex lg:text-[40px] text-[28px] font-bold text-pcWhite font-pfFont2 text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Selected Works
            </div>
          </div>

          <div className="">
            {projectData &&
              projectData.map((projectData, index) => (
                <div
                  className="md:min-h-[640px] w-full bg-white rounded-[16px] "
                  key={index}
                >
                  <div className="relative">
                    <img
                      alt={projectData.projectHomeBanner.asset.url}
                      className="w-full object-cover rounded-[8px] mt-8"
                      src={projectData.projectHomeBanner.asset.url}
                    />
                    <div className="absolute top-0 w-full md:min-h-[640px] p-12 rounded-[8px]">
                      {/* <img
                    className="w-[40px]"
                    src={projectData.projectLogo.asset.url}
                  /> */}

                      <p className="text-[16px] font-semibold">
                        {projectData.duration}
                      </p>
                      <h1
                        className="font-extrabold md:text-[36px] text-[28px] font-pfFont2"
                        style={{ color: `${projectData.projectTitleColor}` }}
                      >
                        {projectData.title}
                      </h1>
                      <p className="text-[20px] font-semibold mb-2">
                        {projectData.role}
                      </p>

                      <div className="flex flex-wrap mb-3">
                        {projectData.projectTags &&
                          projectData.projectTags.map((projectTags, id) => (
                            <div
                              className="md:text-[14px] text-[12px] text-pcBlack font-semibold rounded-[24px] px-3 py-1 mr-2 mb-2  "
                              style={{
                                backgroundColor: `${projectData.projectTagsColor}`,
                              }}
                              key={id}
                            >
                              {projectTags}
                            </div>
                          ))}
                      </div>

                      <p className="text-[16px] font-medium font-pfFont mb-5">
                        {projectData.brief}
                      </p>

                      {projectData.externalLink !== null && (
                        <motion.button
                          className="text-pcWhite font-pfFont font-bold py-2 px-4 rounded-full"
                          style={{
                            backgroundColor: `${projectData.projectTitleColor}`,
                          }}
                          whileHover={{
                            backgroundColor: `${projectData.projectTagsColor}`,
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <a
                            className="text-pcBlack"
                            href={projectData.externalLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View in Behance
                          </a>
                        </motion.button>
                      )}
                      {projectData.liveSite !== null && (
                        <motion.button
                          className="text-pcWhite font-pfFont font-bold py-2 px-4 rounded-full"
                          style={{
                            backgroundColor: `${projectData.projectTitleColor}`,
                          }}
                          whileHover={{
                            backgroundColor: `${projectData.projectTagsColor}`,
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <Link
                            to={"/projects/" + projectData.slug.current}
                            key={projectData.slug.current}
                          >
                            View Case Study
                          </Link>
                        </motion.button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="pt-[80px] pb-[80px] bg-pcBlack text-center">
        <button className="h-[72px] w-[160px] border border-pcWhite hover:bg-pcWhite hover:text-pcBlack text-pcWhite font-pfFont font-bold py-2 px-4 rounded-full ">
          <Link to="/Projects" className="p-0 md:p-4">
            More Works
          </Link>
        </button>
      </div>
    </>
  );
}

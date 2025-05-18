import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import { AnimatePresence, motion } from "framer-motion";

export default function Projects() {
  const [projectData, setProjectData] = useState(null);
  const [projectPersonalData, setProjectPersonalData] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [filter, setFilter] = useState("All Project");

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
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    sanityClient
      .fetch(
        `*[_type == "project" && "All Project" in categories[]->title] | order(publishedAt desc){
          "categories": categories[]->title,
          title,
          slug,
          categories[]->{
            title
          },
          projectBanner{
            asset->{
              _id,
              url
            },
            alt 
          },
          publishedAt,
          projectTags,
          duration,
          role,
          liveSite,
          externalLink,
          projectTitleColor,
          projectTagsColor,
          projectButtonColor,
          extraColor1,
          extraColor2,
        }`
      )
      .then((data) => {
        setProjectData(data);
        console.log("asjkdhkjashkdjhk", projectData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project" && "Personal" in categories[]->title] | order(publishedAt desc){
          "categories": categories[]->title,
          title,
          slug,
          categories[]->{
            title
          },
          projectBanner{
            asset->{
              _id,
              url
            },
            alt 
          },
          publishedAt,
          projectTags,
          duration,
          role,
          liveSite,
          externalLink,
          projectTitleColor,
          projectTagsColor,
          projectButtonColor,
        }`
      )
      .then((data) => {
        setProjectPersonalData(data);
        console.log("projectPersonalData:", projectPersonalData);
      })
      .catch(console.error);
  }, []);

  if (!projectData || loading === true) {
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
              className="w-full h-full text-pcBlack2 fill-current"
            />
          </pattern>
          <text
            className="text-4xl font-bold font-pfFont2"
            text-anchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)" }}
          >
           Project Archive 
          </text>
        </motion.svg>
      </motion.div>
    );
  }

  return (
    <div
        className="bg-repeat"
        style={{
          backgroundImage:`url(https://raw.githubusercontent.com/jimmypesteban/portfolio2023/main/src/images/Grids3.webp)`,
        }}
      >
      <section className="2xl:mx-[290px] mx-[40px]">
        <h1 className="lg:text-[40px] text-[28px] text-pcWhite font-pfFont2 font-bold text-center mb-2 lg:pt-16">
          Archive
        </h1>
        <p className="text-[16px] text-pcWhite font-pfFont2 font-medium text-center mb-10">
          Here are some more works.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          {projectData &&
            projectData.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.02,
                }}
                initial={{ y: "10%", opacity: 0 }}
                animate={{ y: 0, opacity: 1, duration: 0.5, ease: "easeInOut" }}
                exit={{
                  x: "-100%",
                  opacity: 0,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <div
                  className="bg-pcBlack min-h-[480px] rounded-[8px] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,1)] shadow-[0_0_8px_rgba(255,255,255,0.12)]"
                  key={index}
                >
                  <div className="text-white">
                    <div className="w-full">
                      <div className="">
                        {project.externalLink !== null && (
                          <a
                            className="w-full h-full absolute top-0 rounded-[8px] bg-transparent opacity-0 hover:opacity-100 hover:bg-pcBlack/80 transition-all duration-300 flex justify-center items-center text-pcWhite font-pfFont font-black text-[28px]"
                            href={project.externalLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View in Behance
                          </a>
                        )}
                        {project.liveSite !== null && (
                          <Link
                            className="w-full h-full absolute top-0 rounded-[8px] bg-transparent opacity-0 hover:opacity-100 hover:bg-pcBlack/80 transition-all duration-300 flex justify-center items-center text-pcWhite font-pfFont font-black text-[28px]"
                            to={"/projects/" + project.slug.current}
                            key={project.slug.current}
                          >
                            View Case Study
                          </Link>
                        )}
                      </div>

                      <img
                        className="rounded-t-[8px]"
                        src={project.projectBanner.asset.url}
                        alt={project.projectBanner.alt}
                      />

                      <div className="p-6">
                        <div className="text-[16px] font-semibold">
                          {project.duration}
                        </div>
                        <div className="text-[24px] font-bold pfFont truncate">
                          {project.title}
                        </div>
                        <div className="text-[16px] font-semibold mb-2">
                          {project.role}
                        </div>
                        <div className="flex flex-wrap mb-3">
                          {project.projectTags &&
                            project.projectTags.map((projectTags, id) => (
                              <div
                                className=" text-[14px] text-pcBlack bg-white font-semibold rounded-[24px] px-3 py-1 mr-2 mb-2"
                                key={id}
                              >
                                {projectTags}
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
        <h1 className="lg:text-[40px] text-[28px] text-pcWhite font-pfFont2 font-bold text-center mt-16 mb-2">
          Personal / Course Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pt-8 pb-12">
          {projectPersonalData &&
            projectPersonalData.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.02,
                }}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1, duration: 0.5, ease: "easeInOut" }}
                exit={{
                  x: "-100%",
                  opacity: 0,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <div
                  className="bg-pcBlack min-h-[480px] rounded-[8px] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,1)] shadow-[0_0_8px_rgba(255,255,255,0.12)]"
                  key={index}
                >
                  <div className="text-white">
                    <div className="w-full">
                      <div className="">
                        {project.externalLink !== null && (
                          <a
                            className="w-full h-full absolute top-0 rounded-[8px] bg-transparent opacity-0 hover:opacity-100 hover:bg-pcBlack/80 transition-all duration-300 flex justify-center items-center text-pcWhite font-pfFont font-black text-[28px]"
                            href={project.externalLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View in Behance
                          </a>
                        )}
                        {project.liveSite !== null && (
                          <Link
                            className="w-full h-full absolute top-0 rounded-[8px] bg-transparent opacity-0 hover:opacity-100 hover:bg-pcBlack/80 transition-all duration-300 flex justify-center items-center text-pcWhite font-pfFont font-black text-[28px]"
                            to={"/projects/" + project.slug.current}
                            key={project.slug.current}
                          >
                            View Case Study
                          </Link>
                        )}
                      </div>

                      <img
                        className="rounded-t-[8px]"
                        src={project.projectBanner.asset.url}
                        alt={project.projectBanner.alt}
                      />

                      <div className="p-6">
                        <div className="text-[16px] font-semibold">
                          {project.duration}
                        </div>
                        <div className="text-[24px] font-bold pfFont truncate">
                          {project.title}
                        </div>
                        <div className="text-[16px] font-semibold mb-2">
                          {project.role}
                        </div>
                        <div className="flex flex-wrap mb-3">
                          {project.projectTags &&
                            project.projectTags.map((projectTags, id) => (
                              <div
                                className=" text-[14px] text-pcBlack bg-white font-semibold rounded-[24px] px-3 py-1 mr-2 mb-2"
                                key={id}
                              >
                                {projectTags}
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </section>
    </div>
  );
}

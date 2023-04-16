import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import { AnimatePresence, motion } from "framer-motion";

export default function Projects() {
  const [projectData, setProjectData] = useState(null);
  const [projectPersonalData, setProjectPersonalData] = useState(null);
  // const [filter, setFilter] = useState("All Project");

  useEffect(() => {
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

  if (!projectData) {
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
    <main className="bg-pcBlack">
      <section className="mx-[320px]">
        <h1 className="text-[40px] text-pcBlue font-pfFont2 font-bold text-center mb-2">
          Archive
        </h1>
        <p className="text-[16px] text-pcWhite font-pfFont2 font-medium text-center mb-10">
          Here are some more works.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 ">
          {projectData &&
            projectData.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1,
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
                  className="bg-pcBlack/50 min-h-[480px] rounded-[8px] transition-all duration-300 hover:shadow-[0_0_40px_rgba(236,124,38,1)]"
                  key={index}
                >
                  <div className="text-white">
                    <div className="w-full">
                      <div className="">
                        {project.externalLink !== null && (
                          <a className="w-full h-full absolute top-0 rounded-[8px] bg-transparent opacity-0 hover:opacity-100 hover:bg-pcBlack/80 transition-all duration-300 flex justify-center items-center text-pcWhite font-pfFont font-black text-[28px]"
                            href={project.externalLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View in Behance
                          </a>
                        )}
                        {project.liveSite !== null && (
                          <Link className="w-full h-full absolute top-0 rounded-[8px] bg-transparent opacity-0 hover:opacity-100 hover:bg-pcBlack/80 transition-all duration-300 flex justify-center items-center text-pcWhite font-pfFont font-black text-[28px]"
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

        <h1 className="text-[40px] text-pcBlue font-pfFont2 font-bold text-center mt-16 mb-2">
          Personal / Course Projects
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pt-8">
          {projectPersonalData &&
            projectPersonalData.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1,
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
                  className="bg-pcBlack/50 min-h-[480px] rounded-[8px] hover:shadow-[0_0_40px_rgba(236,124,38,1)]"
                  key={index}
                >
                  <div className="text-white">
                    <div className="w-full relative">
                      <div className="w-full h-full absolute top-0 rounded-t-[8px] bg-transparent opacity-0 hover:opacity-100 hover:bg-pcBlack/80 transition-all duration-300 flex justify-center items-center text-pcWhite font-pfFont font-bold text-[24px]">
                        {project.externalLink !== null && (
                          <p className="">
                            <a
                              href={project.externalLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              View in Behance
                            </a>
                          </p>
                        )}
                        {project.liveSite !== null && (
                          <p className="">
                            <Link
                              to={"/projects/" + project.slug.current}
                              key={project.slug.current}
                            >
                              View Case Study
                            </Link>
                          </p>
                        )}
                      </div>
                      <img
                        className="rounded-t-[8px]"
                        src={project.projectBanner.asset.url}
                        alt={project.projectBanner.alt}
                      />
                    </div>
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
              </motion.div>
            ))}
        </div>
      </section>
    </main>
  );
}

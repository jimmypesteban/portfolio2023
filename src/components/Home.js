import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import { motion } from "framer-motion";

export default function Home() {
  const [authorData, setAuthorData] = useState(null);
  const [projectData, setProjectData] = useState("Homepage");
  const [loading, setLoading] = useState(true);

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
        console.log("asjkdhkjashkdjhk", projectData);
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
        }`
      )
      .then((data) => setAuthorData(data[0]))
      .catch(console.error);
  }, []);

  if (!authorData || loading === true) {
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

  // console.log(authorData);
  console.log(projectData);
  return (
    <>
      <div className="bg-pcBlack">
        <div className="text-[72px] font-bold text-jpFont text-pcWhite">
          <div className="relative w-full  h-[calc(100vh-100px)] ">
            <div className="absolute tap-[25%] left-0 mix-blend-difference">
              Hello! I'm {authorData.name} - a UI/UX Designer.
              <p>
                Worked in startup industries such as Fintech, IT Consultancy and
                Multimedia companies.
              </p>
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

      <div className="bg-pcBlack pt-12">
        <div className="lg:columns-2 sm:columns-1 gap-10 mx-[320px] ">
          <div className="flex flex-wrap justify-center items-center min-h-[320px] bg-pcBlack/50 mb-10">
            <div className="inline-flex text-[40px] font-bold text-pcBlue font-pcFont2 text-center">Selected Works</div>
          </div>

          <div className="">
            {projectData &&
              projectData.map((projectData, index) => (
                <div
                  className="min-h-[640px] w-full bg-white rounded-[16px] mb-10"
                  key={index}
                >
                  <div className=" relative">
                    <img
                      alt={projectData.projectHomeBanner.asset.url}
                      className="w-full object-cover rounded-[8px] mt-8"
                      src={projectData.projectHomeBanner.asset.url}
                    />
                    <div className="absolute top-0 w-full min-h-[640px] p-12 rounded-[8px]">
                      {/* <img
                    className="w-[40px]"
                    src={projectData.projectLogo.asset.url}
                  /> */}

                      <p className="text-[16px] font-semibold">
                        {projectData.duration}
                      </p>
                      <h1
                        className="font-bold text-[36px]"
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
                              // className=" text-[14px] text-pcBlack bg-pcBlack/20 font-semibold rounded-[24px] px-3 py-1 mr-2 mb-2"
                              className="text-[14px] text-pcBlack font-semibold rounded-[24px] px-3 py-1 mr-2 mb-2"
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
                        <button
                          className="hover:bg-green-700 text-pcWhite font-pfFont font-bold py-2 px-4 rounded-full"
                          style={{
                            backgroundColor: `${projectData.projectButtonColor}`,
                          }}
                        >
                          <a
                            className="text-pcBlack"
                            href={projectData.externalLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View in Behance
                          </a>
                        </button>
                      )}
                      {projectData.liveSite !== null && (
                        <button className="bg-blue-500 hover:bg-blue-700 text-pcWhite font-jpFont font-bold py-2 px-4 rounded-full">
                          <Link
                            to={"/projects/" + projectData.slug.current}
                            key={projectData.slug.current}
                          >
                            View Case Study
                          </Link>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="pt-[80px] pb-[80px] bg-pcBlack text-center">
        <button className="h-[72px] w-[160px] border border-pcWhite hover:bg-pcWhite hover:text-pcBlack text-pcWhite font-jpFont font-bold py-2 px-4 rounded-full ">
          <Link to="/Projects" className="p-0 md:p-4">
            More Work
          </Link>
        </button>
      </div>
    </>
  );
}

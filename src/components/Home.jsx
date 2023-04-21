import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import { animate, motion } from "framer-motion";

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

  const ellipseBox = {
    initial: {
      height: "100vh",
      width: "100vw",
    },
  };

  const ellipseVariants3 = {
    start: {
      d: "M47.3,-72.5C61.3,-64.6,72.8,-51.5,77.3,-36.8C81.8,-22,79.3,-5.5,76.7,10.8C74,27.1,71.1,43.1,62.6,55.8C54,68.6,39.9,78.1,24.6,81.4C9.4,84.7,-6.9,81.8,-21.8,76.4C-36.7,71.1,-50.3,63.2,-62.1,52.3C-74,41.4,-84.1,27.5,-88.1,11.6C-92,-4.3,-89.7,-22.1,-81.5,-36C-73.2,-49.9,-59,-59.8,-44.4,-67.4C-29.9,-75.1,-14.9,-80.5,0.8,-81.8C16.6,-83.2,33.2,-80.4,47.3,-72.5Z",
    },
    end: {
      d: "M49.2,-71.2C63.5,-67.3,74.7,-53.3,82.2,-37.4C89.6,-21.5,93.2,-3.8,90.6,12.9C87.9,29.5,79,45.2,66.5,55.2C54,65.3,37.9,69.8,23.2,70.1C8.4,70.4,-4.9,66.4,-18.5,62.6C-32.1,58.8,-45.8,55.2,-58.3,47.1C-70.8,38.9,-82.1,26.2,-84,12.1C-85.9,-1.9,-78.5,-17.2,-69.5,-29.6C-60.5,-42,-49.9,-51.6,-38.1,-56.6C-26.2,-61.6,-13.1,-62.1,2.2,-65.4C17.4,-68.8,34.8,-75,49.2,-71.2Z",
    },
  };

  const ellipseVariants2 = {
    d: "M409.06419,322.5266Q395.0532,395.0532,322.5266,445.11739Q250,495.18159,163.51944,459.07135Q77.03888,422.96112,82.39949,336.48056Q87.7601,250,115.64271,196.76266Q143.52532,143.52532,196.76266,76.83657Q250,10.14783,323.24578,56.82813Q396.49156,103.50844,409.78338,176.75422Q423.07519,250,409.06419,322.5266Z",
    animate: {
      d: [
        "M409.06419,322.5266Q395.0532,395.0532,322.5266,445.11739Q250,495.18159,163.51944,459.07135Q77.03888,422.96112,82.39949,336.48056Q87.7601,250,115.64271,196.76266Q143.52532,143.52532,196.76266,76.83657Q250,10.14783,323.24578,56.82813Q396.49156,103.50844,409.78338,176.75422Q423.07519,250,409.06419,322.5266Z",
        "M408.24461,332.63257Q415.26513,415.26513,332.63257,434.71568Q250,454.16622,179.33614,422.74697Q108.67228,391.32772,65.87585,320.66386Q23.07942,250,63.27221,176.73251Q103.46501,103.46501,176.73251,63.02288Q250,22.58075,311.86507,74.4253Q373.73015,126.26985,387.47712,188.13493Q401.22409,250,408.24461,332.63257Z",
        "M418.08664,320.33435Q390.6687,390.6687,320.33435,427.91946Q250,465.17023,188.27506,419.31005Q126.55013,373.44987,106.38448,311.72494Q86.21883,250,84.09726,165.98785Q81.9757,81.9757,165.98785,53.98938Q250,26.00305,311.1687,76.83282Q372.3374,127.6626,408.92099,188.8313Q445.50458,250,418.08664,320.33435Z",
        "M423.42552,332.41134Q414.82268,414.82268,332.41134,424.30554Q250,433.78841,170.96572,420.92848Q91.93144,408.06856,46.07152,329.03428Q0.21159,250,66.88003,191.77423Q133.54846,133.54846,191.77423,102.82861Q250,72.10876,305.00592,106.04846Q360.01185,139.98815,396.0201,194.99408Q432.02836,250,423.42552,332.41134Z",
        "M409.06419,322.5266Q395.0532,395.0532,322.5266,445.11739Q250,495.18159,163.51944,459.07135Q77.03888,422.96112,82.39949,336.48056Q87.7601,250,115.64271,196.76266Q143.52532,143.52532,196.76266,76.83657Q250,10.14783,323.24578,56.82813Q396.49156,103.50844,409.78338,176.75422Q423.07519,250,409.06419,322.5266Z",
      ],
    },
  };

  const ellipseVariants = {
    start: {
      d: "M47.3,-72.5C61.3,-64.6,72.8,-51.5,77.3,-36.8C81.8,-22,79.3,-5.5,76.7,10.8C74,27.1,71.1,43.1,62.6,55.8C54,68.6,39.9,78.1,24.6,81.4C9.4,84.7,-6.9,81.8,-21.8,76.4C-36.7,71.1,-50.3,63.2,-62.1,52.3C-74,41.4,-84.1,27.5,-88.1,11.6C-92,-4.3,-89.7,-22.1,-81.5,-36C-73.2,-49.9,-59,-59.8,-44.4,-67.4C-29.9,-75.1,-14.9,-80.5,0.8,-81.8C16.6,-83.2,33.2,-80.4,47.3,-72.5Z",
    },
    end: {
      d: [
        "M47.3,-72.5C61.3,-64.6,72.8,-51.5,77.3,-36.8C81.8,-22,79.3,-5.5,76.7,10.8C74,27.1,71.1,43.1,62.6,55.8C54,68.6,39.9,78.1,24.6,81.4C9.4,84.7,-6.9,81.8,-21.8,76.4C-36.7,71.1,-50.3,63.2,-62.1,52.3C-74,41.4,-84.1,27.5,-88.1,11.6C-92,-4.3,-89.7,-22.1,-81.5,-36C-73.2,-49.9,-59,-59.8,-44.4,-67.4C-29.9,-75.1,-14.9,-80.5,0.8,-81.8C16.6,-83.2,33.2,-80.4,47.3,-72.5Z",
        "M47.1,-70.6C61,-64.4,72,-51.2,78.8,-36.1C85.7,-20.9,88.3,-3.9,84.2,10.8C80.1,25.6,69.3,38.2,58.8,51.7C48.2,65.2,37.9,79.6,24.5,83.7C11,87.9,-5.6,81.8,-22.7,76.9C-39.7,72.1,-57.3,68.4,-68.3,57.9C-79.3,47.4,-83.8,30.1,-86.1,12.5C-88.4,-5,-88.4,-22.7,-80.9,-36.1C-73.4,-49.5,-58.5,-58.6,-43.8,-64.4C-29,-70.2,-14.5,-72.7,1.1,-74.3C16.6,-76,33.3,-76.8,47.1,-70.6Z",
        "M46.8,-70.4C60.7,-64,71.9,-51,78.9,-35.9C85.9,-20.9,88.7,-3.9,85.2,11.4C81.7,26.7,71.9,40.2,60.7,51.9C49.5,63.6,37,73.4,22.9,77C8.9,80.6,-6.6,78,-20.9,73C-35.2,68,-48.2,60.5,-56.9,49.8C-65.6,39,-70,24.8,-73.2,9.8C-76.4,-5.1,-78.4,-20.9,-74,-35.1C-69.6,-49.2,-58.6,-61.7,-45.2,-68.3C-31.8,-74.9,-15.9,-75.7,0.3,-76.1C16.5,-76.6,33,-76.8,46.8,-70.4Z",
        "M49.2,-71.2C63.5,-67.3,74.7,-53.3,82.2,-37.4C89.6,-21.5,93.2,-3.8,90.6,12.9C87.9,29.5,79,45.2,66.5,55.2C54,65.3,37.9,69.8,23.2,70.1C8.4,70.4,-4.9,66.4,-18.5,62.6C-32.1,58.8,-45.8,55.2,-58.3,47.1C-70.8,38.9,-82.1,26.2,-84,12.1C-85.9,-1.9,-78.5,-17.2,-69.5,-29.6C-60.5,-42,-49.9,-51.6,-38.1,-56.6C-26.2,-61.6,-13.1,-62.1,2.2,-65.4C17.4,-68.8,34.8,-75,49.2,-71.2Z",
        "M51,-69.1C65.3,-59.8,75.5,-43.8,79.5,-26.9C83.4,-10,81.2,7.8,74.6,23C67.9,38.1,56.9,50.6,43.7,60.8C30.6,70.9,15.3,78.8,-1.2,80.4C-17.7,82.1,-35.4,77.6,-49.8,67.8C-64.2,58.1,-75.4,43.1,-78.7,27C-82.1,10.8,-77.6,-6.5,-71.3,-22.4C-65.1,-38.3,-57.1,-52.9,-44.9,-62.9C-32.7,-72.9,-16.3,-78.2,1,-79.6C18.4,-81,36.7,-78.4,51,-69.1Z",
      ],
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
            {/* <motion.div
              className="w-[200px] h-[200px] border-2 border-pcWhite relative left-[50%] top-[35%] mix-blend-difference"
              animate={{
                scale: [1, 1, 1],
                rotate: [0, 36, 52],
                borderRadius: [
                  "24% 76% 35% 65%",
                  "27% 36% 64% 73%",
                  "24% 76% 35% 65%",
                ],
              }}
              transition={{
                duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
                times: [0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            ></motion.div> */}

            {/* viewBox="0 0 100 100" */}

            <motion.div
              className=" absolute mix-blend-difference"
              initial="start"
              animate="end"
              variants={ellipseBox}
            >
              <div className="absolute top-[5%] left-[-2%] lg:left-[30%]">
                <motion.svg
                  initial="start"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="640"
                  height="640"
                  viewBox="-160 -160 420 420"
                  animate="end"
                >
                  <motion.path
                    variants={ellipseVariants}
                    transition={{
                      duration: 5,
                      ease: [0.87, 0, 0.13, 1],
                      yoyo: Infinity,
                      repeat: Infinity,
                    }}
                    stroke-width="2"
                    stroke="White"
                  />
                </motion.svg>
              </div>

              <div className="absolute lg:left-[10%]">
                <motion.svg
                  initial="start"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2400"
                  height="2400"
                  viewBox="-120 -40 280 280"
                  animate="end"
                >
                  <motion.path
                    variants={ellipseVariants}
                    transition={{
                      duration: 5,
                      ease: [0.87, 0, 0.13, 1],
                      yoyo: Infinity,
                      repeat: Infinity,
                    }}
                    stroke-width=".5"
                    stroke="White"
                  />
                </motion.svg>
              </div>

              <div className="relative">
                <motion.svg
                  initial="start"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2400"
                  height="2400"
                  viewBox="80 -80 320 320"
                  animate="end"
                >
                  <motion.path
                    variants={ellipseVariants}
                    transition={{
                      duration: 5,
                      ease: [0.87, 0, 0.13, 1],
                      yoyo: Infinity,
                      repeat: Infinity,
                    }}
                    stroke-width=".4"
                    stroke="White"
                  />
                </motion.svg>
              </div>
            </motion.div>

            {/* {authorData.homeBanner !== null && (
              <div className="">
                <img
                  alt={authorData.homeBanner.asset.url}
                  className="w-full h-[calc(100vh-100px)]"
                  src={authorData.homeBanner.asset.url}
                />
              </div>
            )} */}
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

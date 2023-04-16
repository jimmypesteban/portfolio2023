import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import { motion, useScroll } from "framer-motion";

export default function SingleProject() {
  const [singleProjectData, setSingleProjectData] = useState(null);
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  // const transition = { duration: 0.5, ease: "easeInOut" };
  // const { scrollYProgress } = useScroll();
  var testing = "100";

  useEffect(() => {
    //console.log("sadasda", scrollYProgress)
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"] {
      title,
      _id,
      slug,
      layout,
      projectBanner{
        asset->{
          _id,
          url
        }
      },
      designSystemGallery[]{
        asset->{
          _id,
          url
        }
      },
      gifGallery[]{
        asset->{
          _id,
          url
        }
      },
      videosUrl[],
      liveSite,
      overview,
      projectTags,
      projectTitleColor,
      projectTagsColor,
      projectButtonColor,
      role,
      duration,
      responsibilites,
      teamMembers,
      tools,
      goal,
      portableText,
      processTitle,
      process,
      processContent,
      processImage{
        asset->{
          _id,
          url
        },
        alt 
      },
      gifTitle,
      gifBlock,
      designSystemTitle,
      designSystem,
      designSystem2,
      designSystemImage{
        asset->{
          _id,
          url
        },
        alt 
      },
      designSystemImage2{
        asset->{
          _id,
          url
        },
        alt 
      },
      prototypeTitle,
      prototypeBlock,
      prototypeVideosUrl,
      prototypeTitle2,
      prototypeVideosUrl2,
      result,
      resultContent,
      extraImage1{
        asset->{
          _id,
          url
        },
        alt 
      },
      extraImage2{
        asset->{
          _id,
          url
        },
        alt 
      },
      extraImage3{
        asset->{
          _id,
          url
        },
        alt 
      },
      extraImage4{
        asset->{
          _id,
          url
        },
        alt 
      },
      extraImage5{
        asset->{
          _id,
          url
        },
        alt 
      },
      extraImage6{
        asset->{
          _id,
          url
        },
        alt 
      },
      extraImage7{
        asset->{
          _id,
          url
        },
        alt 
      },
      extraImage8{
        asset->{
          _id,
          url
        },
        alt 
      },
      extraGallery1[]{
        asset->{
          _id,
          url
        },
        alt 
      },
      extraGallery2[]{
        asset->{
          _id,
          url
        },
        alt 
      },
      extraGallery3[]{
        asset->{
          _id,
          url
        },
        alt 
      },
      extraGallery4[]{
        asset->{
          _id,
          url
        },
        alt 
      },
      extraGallery5[]{
        asset->{
          _id,
          url
        },
        alt 
      },
      extraGallery6[]{
        asset->{
          _id,
          url
        },
        alt 
      },
      extraTitle1,
      extraTitle2,
      extraTitle3,
      extraTitle4,
      extraTitle5,
      extraTitle6,
      extraBlock1,
      extraBlock2,
      extraBlock3,
      extraBlock4,
      extraBlock5,
      extraBlock6,
      extraBlock7,
      extraBlock8,
      extraBlock9,
      extraBlock10,
      "name": author-> name,
      "authorImage": author-> image
    }`
      )
      .then((data) => setSingleProjectData(data[0]))
      .catch(console.error);
    setLoading(false);
  }, [slug]);

  console.log("loading is now: " + loading);
  if (!singleProjectData) {
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
      <motion.div
        className="left-0"
        //  initial={{ scaleX: 0, x: 0 }}
        //  animate={{ scaleX: 50 }}
        //  transition={{ duration: 3 }}
      >
        {/* {`{${primaryColor} ${a11yColor}}`} */}

        {/* h-20 w-20 bg-red-800 */}

        <div>
          <div className={`h-20 bg-red-800 w-[${testing}vw]`}></div>
        </div>
      </motion.div>

      <div className="w-full h-max ">
        {/* initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} */}
      </div>

      <div className="px-10 lg:px-[240px] md:px-[24px] sm:px-[24px]  bg-pcBlack  text-pfFont">
        {/* <motion.div style={{ scaleX: scrollYProgress }} />   */}

        <h1 className="text-pcWhite">SingleProject page!</h1>
        <h1 className="text-pcWhite">{singleProjectData.categories}</h1>

        <h1 className="text-pcWhite text-2xl font-bold">
          This is the image gallery
        </h1>

        <h1 className="text-pcWhite text-2xl font-bold">
          This is layout {singleProjectData.layout}
        </h1>

        <h1 className="flex justify-center items-center text-pcBlue font-pfFont2 font-bold text-[40px] mt-16 mb-4">
          {singleProjectData.title}
        </h1>

        <div className="flex justify-center flex-wrap mb-12">
          {singleProjectData.projectTags &&
            singleProjectData.projectTags.map((projectTags, id) => (
              <div
                // className=" text-[14px] text-pcBlack bg-pcBlack/20 font-semibold rounded-[24px] px-3 py-1 mr-2 mb-2"
                className="text-[14px] text-pcBlack font-semibold rounded-[24px] px-3 py-1 mr-2 mb-2"
                style={{
                  backgroundColor: `${singleProjectData.projectTagsColor}`,
                }}
                key={id}
              >
                {projectTags}
              </div>
            ))}
        </div>

        <img
          className="justify-center mx-auto w-full object-cover max-h-[640px] rounded-[8px]"
          src={singleProjectData.projectBanner.asset.url}
          alt={singleProjectData.name}
        />

        <div className="mt-12 mb-12 p-16 bg-pcBlack rounded-[8px]">
          <div className="text-pcWhite">
            <p className="mb-2 font-bold text-[12px] font-pfFont2">OVERVIEW</p>
            <p className="font-pfFont text-[18px]">
              <BlockContent
                blocks={singleProjectData.overview}
                projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                dataset="production"
              />
            </p>
            <div className="grid grid-cols-4 gap-16 mt-6">
              <div>
                <p className="mb-2 font-bold text-[12px] font-pfFont2">
                  TIMELINE
                </p>
                <p>{singleProjectData.duration}</p>
              </div>
              <div>
                <p className="mb-2 font-bold text-[12px] font-pfFont2">
                  MY ROLE
                </p>
                <p>{singleProjectData.role}</p>
              </div>
              <div>
                <p className="mb-2 font-bold text-[12px] font-pfFont2">
                  THE TEAM
                </p>
                <p>{singleProjectData.teamMembers}</p>
              </div>
              <div>
                <p className="mb-2 font-bold text-[12px] font-pfFont2">
                  TOOLS USED
                </p>
                <p>{singleProjectData.tools}</p>
              </div>
            </div>
          </div>
        </div>

        {singleProjectData.layout === "1" ? (
          <div>
            <div className="mt-12 mb-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                The Goal
              </h1>
              <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                <BlockContent
                  className=""
                  blocks={singleProjectData.goal}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
            </div>

            <div className="mt-12 mb-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                {singleProjectData.processTitle}
              </h1>
              <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                <BlockContent
                  className=""
                  blocks={singleProjectData.process}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
              
              <div className="grid grid-cols-1 gap-8 pb-8">
                  {singleProjectData &&
                    singleProjectData.extraGallery1.map(
                      (graphicsgallery, index) => (
                        <a href={graphicsgallery.asset.url} target="_blank">
                          {" "}
                          <img
                            className="w-full"
                            src={graphicsgallery.asset.url}
                          />
                        </a>
                      )
                    )}
                </div>
            </div>

            <div className="mt-12 mb-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                {singleProjectData.designSystemTitle}
              </h1>
              <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                <BlockContent
                  className=""
                  blocks={singleProjectData.designSystem}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
            </div>

            <div className="mt-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                {singleProjectData.result}
              </h1>
              <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                <BlockContent
                  className=""
                  blocks={singleProjectData.resultContent}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
            </div>
          </div>
        ) : singleProjectData.layout === "2" ? (
          <div>
            <div className="mt-12 mb-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                The Goal
              </h1>
              <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                <BlockContent
                  className=""
                  blocks={singleProjectData.goal}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                {singleProjectData &&
                  singleProjectData.extraGallery1.map(
                    (graphicsgallery, index) => (
                      <a href={graphicsgallery.asset.url} target="_blank">
                        {" "}
                        <img
                          className="w-full"
                          src={graphicsgallery.asset.url}
                        />
                      </a>
                    )
                  )}
              </div>
            </div>

            <div className="mt-12 mb-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                Process
              </h1>
              <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                <BlockContent
                  className=""
                  blocks={singleProjectData.process}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
              <iframe
                class="w-full aspect-video"
                src={singleProjectData.processContent}
              ></iframe>
            </div>

            <div className="flex flex-col mt-12 mb-24 p-16 bg-pcBlack rounded-[8px]">
              <div>
                <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                  Design System
                </h1>
                <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                  <BlockContent
                    className=""
                    blocks={singleProjectData.designSystem}
                    projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                    dataset="production"
                  />
                </div>
              </div>

              <div>
                <img
                  className="pb-8"
                  src={singleProjectData.designSystemImage.asset.url}
                  alt={singleProjectData.name}
                />
              </div>

              <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite mb-4">
                  <BlockContent
                    className=""
                    blocks={singleProjectData.extraBlock1}
                    projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                    dataset="production"
                  />
                </div>

              <div>
                <img
                  className="pb-8"
                  src={singleProjectData.designSystemImage2.asset.url}
                  alt={singleProjectData.name}
                />
              </div>
            </div>

            

            <div className="mt-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                Prototype/Staging
              </h1>
              <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8">
                <iframe
                  class="w-full aspect-video"
                  src={singleProjectData.prototypeVideosUrl}
                ></iframe>
                <iframe
                  class="w-full aspect-video"
                  src={singleProjectData.prototypeVideosUrl2}
                ></iframe>
              </div>
            </div>

            <div className="mt-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                {singleProjectData.result}
              </h1>
              <div className="text-pcWhite">
                <BlockContent
                  className=""
                  blocks={singleProjectData.resultContent}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
            </div>
          </div>
        ) : singleProjectData.layout === "3" ? (
          <div className="">
            <h1>Layout 3</h1>

            {/* <div className="flex flex-wrap w-full bg-yellow-200 p-4">
              {singleProjectData &&
                singleProjectData.designSystemGallery.map(
                  (graphicsgallery, index) => (
                    <div>
                      <a href={graphicsgallery.asset.url} target="_blank">
                        {" "}
                        <h1>{index + 1}</h1>
                        <img
                          className={`${
                            (index + 1) % 2 == 0 ? "w-1/2" : "w-full"
                          }`}
                          src={graphicsgallery.asset.url}
                        />
                      </a>
                    </div>
                  )
                )}
            </div> */}

            <div className="flex flex-wrap w-full p-4">
              {singleProjectData &&
                singleProjectData.designSystemGallery.map(
                  (graphicsgallery, index) => (
                    <div
                      className={`${
                        (index + 0) % 3 === 0 ? "w-full" : "w-1/2"
                      } text-white`}
                    >
                      <img
                        className="rounded-[24px] p-6"
                        src={graphicsgallery.asset.url}
                        alt={graphicsgallery.alt}
                      />
                    </div>
                  )
                )}
            </div>

            {/* ${(index + 1) % 2 == 0 ? "grid-cols-2" : "grid-cols-1"} */}

            <div>
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                Project Details
              </h1>
              <div className="mb-24 text-pcWhite">
                <BlockContent
                  className="mb-24 prose prose-a:text-green-300 text-pcWhite"
                  blocks={singleProjectData.overview}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
            </div>

            <div>
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                The Goal
              </h1>
              <div className="mb-24">
                <BlockContent
                  className="mb-24 prose prose-a:text-green-300 text-pcWhite"
                  blocks={singleProjectData.goal}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
            </div>

            <div>
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                Process
              </h1>
              <div className="mb-24 text-pcWhite">
                <BlockContent
                  className="mb-24 prose prose-a:text-green-300 text-pcWhite"
                  blocks={singleProjectData.process}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div>
                <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                  Design System
                </h1>
                <div className="mb-24 prose prose-a:text-green-300 text-pcWhite">
                  <BlockContent
                    className=""
                    blocks={singleProjectData.designSystem}
                    projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                    dataset="production"
                  />
                </div>
              </div>

              {singleProjectData &&
                singleProjectData.designSystemGallery.map(
                  (graphicsgallery, index) => (
                    <div
                      className="flex flex-row w-full bg-orange-200"
                      key={index}
                    >
                      <div className="flex flex-row w-1/2">
                        <a href={graphicsgallery.asset.url} target="_blank">
                          {" "}
                          <img
                            className="w-[50px]"
                            src={graphicsgallery.asset.url}
                          />
                        </a>
                      </div>
                    </div>
                  )
                )}
            </div>

            <div>
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                Prototype/Staging
              </h1>
              <div className="mb-24 prose prose-a:text-green-300 text-pcWhite">
                {singleProjectData.prototypeVideosUrl}
              </div>
            </div>

            <div>
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                Results and Takeaway
              </h1>

              <div className="mb-24 w-full">
                <BlockContent
                  className="mb-24 prose prose-a:text-green-300 text-pcWhite"
                  blocks={singleProjectData.result}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
            </div>
          </div>
        ) : singleProjectData.layout === "4" ? (
          <div className="">
            <h1>Layout 4</h1>

            {/* <div className="flex flex-wrap w-full bg-yellow-200 p-4">
                {singleProjectData &&
                  singleProjectData.designSystemGallery.map(
                    (graphicsgallery, index) => (
                      <div>
                        <a href={graphicsgallery.asset.url} target="_blank">
                          {" "}
                          <h1>{index + 1}</h1>
                          <img
                            className={`${
                              (index + 1) % 2 == 0 ? "w-1/2" : "w-full"
                            }`}
                            src={graphicsgallery.asset.url}
                          />
                        </a>
                      </div>
                    )
                  )}
              </div> */}

            <div className="flex flex-wrap w-full p-4">
              {singleProjectData &&
                singleProjectData.designSystemGallery.map(
                  (graphicsgallery, index) => (
                    <div
                      className={`${
                        (index + 0) % 3 === 0 ? "w-full" : "w-1/2"
                      } text-white`}
                    >
                      <img
                        className="rounded-[24px] p-6"
                        src={graphicsgallery.asset.url}
                        alt={graphicsgallery.alt}
                      />
                    </div>
                  )
                )}
            </div>

            {/* ${(index + 1) % 2 == 0 ? "grid-cols-2" : "grid-cols-1"} */}

            <div>
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                Project Details
              </h1>
              <div className="mb-24 text-pcWhite">
                <BlockContent
                  className="mb-24 prose prose-a:text-green-300 text-pcWhite"
                  blocks={singleProjectData.overview}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
            </div>

            <div>
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                The Goal
              </h1>
              <div className="mb-24">
                <BlockContent
                  className="mb-24 prose prose-a:text-green-300 text-pcWhite"
                  blocks={singleProjectData.goal}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
            </div>

            <div>
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                Process
              </h1>
              <div className="mb-24 text-pcWhite">
                <BlockContent
                  className="mb-24 prose prose-a:text-green-300 text-pcWhite"
                  blocks={singleProjectData.process}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div>
                <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                  Design System
                </h1>
                <div className="mb-24 prose prose-a:text-green-300 text-pcWhite">
                  <BlockContent
                    className=""
                    blocks={singleProjectData.designSystem}
                    projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                    dataset="production"
                  />
                </div>
              </div>

              {singleProjectData &&
                singleProjectData.designSystemGallery.map(
                  (graphicsgallery, index) => (
                    <div
                      className="flex flex-row w-full bg-orange-200"
                      key={index}
                    >
                      <div className="flex flex-row w-1/2">
                        <a href={graphicsgallery.asset.url} target="_blank">
                          {" "}
                          <img
                            className="w-[50px]"
                            src={graphicsgallery.asset.url}
                          />
                        </a>
                      </div>
                    </div>
                  )
                )}
            </div>

            <div>
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                Prototype/Staging
              </h1>
              <div className="mb-24 prose prose-a:text-green-300 text-pcWhite">
                {singleProjectData.prototypeVideosUrl}
              </div>
            </div>

            <div>
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                Results and Takeaway
              </h1>

              <div className="mb-24 w-full">
                <BlockContent
                  className="mb-24 prose prose-a:text-green-300 text-pcWhite"
                  blocks={singleProjectData.resultContent}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
            </div>
          </div>
        ) : singleProjectData.layout === "5" ? (
          <div className="">
            <div className="mt-12 mb-12 p-16 bg-pcBlack rounded-[8px]">
              <div className="text-pcWhite">
                <p className="mb-2 font-bold text-[12px] font-pfFont2">
                  OVERVIEW
                </p>
                <p className="font-pfFont text-[18px]">
                  <BlockContent
                    blocks={singleProjectData.overview}
                    projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                    dataset="production"
                  />
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-12 p-16 bg-pcBlack rounded-[8px]">
              <div>
                <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                  {singleProjectData.designSystemTitle}
                </h1>
                <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                  <BlockContent
                    className=""
                    blocks={singleProjectData.designSystem}
                    projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                    dataset="production"
                  />
                </div>
              </div>
              <div>
                <img
                  className="pb-8"
                  src={singleProjectData.extraImage1.asset.url}
                  alt={singleProjectData.name}
                />
              </div>
              <div className="grid grid-cols-2 gap-8 pb-8">
                {singleProjectData &&
                  singleProjectData.designSystemGallery.map(
                    (graphicsgallery, index) => (
                      <a href={graphicsgallery.asset.url} target="_blank">
                        {" "}
                        <img
                          className="w-full"
                          src={graphicsgallery.asset.url}
                        />
                      </a>
                    )
                  )}
              </div>
              <div className="">
                <img
                  className="pb-8"
                  src={singleProjectData.extraImage2.asset.url}
                  alt={singleProjectData.name}
                />
                <img
                  className=""
                  src={singleProjectData.extraImage3.asset.url}
                  alt={singleProjectData.name}
                />
              </div>
            </div>
          </div>
        ) : singleProjectData.layout === "6" ? (
          <div className="">
            <div className="mt-12 mb-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                {singleProjectData.designSystemTitle}
              </h1>
              <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                <BlockContent
                  className=""
                  blocks={singleProjectData.designSystem}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
              <div className="mt-4">
                <img
                  className=""
                  src={singleProjectData.extraImage1.asset.url}
                  alt={singleProjectData.name}
                />
              </div>
            </div>
            <div className="mt-12 mb-12 p-16 bg-pcBlack rounded-[8px]">
              <div>
                <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2 text-center">
                  {singleProjectData.processTitle}
                </h1>
                <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite text-center mb-4">
                  <BlockContent
                    className=""
                    blocks={singleProjectData.process}
                    projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                    dataset="production"
                  />
                </div>

                <div className="grid grid-cols-4 gap-8">
                  <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite font-semibold p-4 rounded-[8px] bg-pcWhite/10">
                    <BlockContent
                      className=""
                      blocks={singleProjectData.extraBlock1}
                      projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                      dataset="production"
                    />
                  </div>
                  <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite font-semibold p-4 rounded-[8px] bg-pcWhite/10">
                    <BlockContent
                      className=""
                      blocks={singleProjectData.extraBlock2}
                      projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                      dataset="production"
                    />
                  </div>
                  <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite font-semibold p-4 rounded-[8px] bg-pcWhite/10">
                    <BlockContent
                      className=""
                      blocks={singleProjectData.extraBlock3}
                      projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                      dataset="production"
                    />
                  </div>
                  <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite font-semibold p-4 rounded-[8px] bg-pcWhite/10">
                    <BlockContent
                      className=""
                      blocks={singleProjectData.extraBlock4}
                      projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                      dataset="production"
                    />
                  </div>
                </div>

                <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite text-center mt-4 mb-8">
                  <BlockContent
                    className=""
                    blocks={singleProjectData.extraBlock5}
                    projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                    dataset="production"
                  />
                </div>
              </div>

              <div>
                <h1 className="text-[28px] mb-4 font-bold text-pcBlue font-pfFont2 text-center">
                  {singleProjectData.extraTitle1}
                </h1>
                <div className="grid grid-cols-2 gap-8 pb-8">
                  {singleProjectData &&
                    singleProjectData.extraGallery1.map(
                      (graphicsgallery, index) => (
                        <a href={graphicsgallery.asset.url} target="_blank">
                          {" "}
                          <img
                            className="w-full"
                            src={graphicsgallery.asset.url}
                          />
                        </a>
                      )
                    )}
                </div>
              </div>

              <div>
                <h1 className="text-[28px] mb-4 font-bold text-pcBlue font-pfFont2 text-center">
                  {singleProjectData.extraTitle2}
                </h1>
                <div className="grid grid-cols-2 gap-8 pb-8">
                  {singleProjectData &&
                    singleProjectData.extraGallery2.map(
                      (graphicsgallery, index) => (
                        <a href={graphicsgallery.asset.url} target="_blank">
                          {" "}
                          <img
                            className="w-full"
                            src={graphicsgallery.asset.url}
                          />
                        </a>
                      )
                    )}
                </div>
              </div>

              <div>
                <h1 className="text-[28px] mb-4 font-bold text-pcBlue font-pfFont2 text-center">
                  {singleProjectData.extraTitle3}
                </h1>
                <div className="grid grid-cols-2 gap-8 pb-8">
                  {singleProjectData &&
                    singleProjectData.extraGallery3.map(
                      (graphicsgallery, index) => (
                        <a href={graphicsgallery.asset.url} target="_blank">
                          {" "}
                          <img
                            className="w-full"
                            src={graphicsgallery.asset.url}
                          />
                        </a>
                      )
                    )}
                </div>
              </div>

              <div>
                <h1 className="text-[28px] mb-4 font-bold text-pcBlue font-pfFont2 text-center">
                  {singleProjectData.extraTitle4}
                </h1>
                <div className="grid grid-cols-2 gap-8 pb-8">
                  {singleProjectData &&
                    singleProjectData.extraGallery4.map(
                      (graphicsgallery, index) => (
                        <a href={graphicsgallery.asset.url} target="_blank">
                          {" "}
                          <img
                            className="w-full"
                            src={graphicsgallery.asset.url}
                          />
                        </a>
                      )
                    )}
                </div>
              </div>

              <div>
                <h1 className="text-[28px] mb-4 font-bold text-pcBlue font-pfFont2 text-center">
                  {singleProjectData.extraTitle5}
                </h1>
                <div className="grid grid-cols-2 gap-8 pb-8">
                  {singleProjectData &&
                    singleProjectData.extraGallery5.map(
                      (graphicsgallery, index) => (
                        <a href={graphicsgallery.asset.url} target="_blank">
                          {" "}
                          <img
                            className="w-full"
                            src={graphicsgallery.asset.url}
                          />
                        </a>
                      )
                    )}
                </div>
              </div>

              <div>
                <h1 className="text-[28px] mb-4 font-bold text-pcBlue font-pfFont2 text-center">
                  {singleProjectData.extraTitle6}
                </h1>
                <div className="grid grid-cols-2 gap-8 pb-8">
                  {singleProjectData &&
                    singleProjectData.extraGallery6.map(
                      (graphicsgallery, index) => (
                        <a href={graphicsgallery.asset.url} target="_blank">
                          {" "}
                          <img
                            className="w-full"
                            src={graphicsgallery.asset.url}
                          />
                        </a>
                      )
                    )}
                </div>
              </div>
              <div>
                <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                  {singleProjectData.prototypeTitle}
                </h1>
                <iframe
                  class="w-full aspect-video"
                  src={singleProjectData.prototypeVideosUrl}
                ></iframe>
              </div>
            </div>
            <div className="mt-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                {singleProjectData.result}
              </h1>
              <div className="text-pcWhite">
                <BlockContent
                  className=""
                  blocks={singleProjectData.resultContent}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
            </div>
          </div>
        ) : singleProjectData.layout === "7" ? (
          <div className="">
            <div className="flex flex-col p-16 bg-pcBlack rounded-[8px]">
              <div>
                <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                  {singleProjectData.processTitle}
                </h1>
                <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                  <BlockContent
                    className=""
                    blocks={singleProjectData.goal}
                    projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                    dataset="production"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    className="py-8"
                    src={singleProjectData.extraImage1.asset.url}
                    alt={singleProjectData.name}
                  />
                </div>

                <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                  <BlockContent
                    className=""
                    blocks={singleProjectData.process}
                    projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                    dataset="production"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-12 p-16 bg-pcBlack rounded-[8px]">
              <div>
                <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                  {singleProjectData.designSystemTitle}
                </h1>
                <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                  <BlockContent
                    className=""
                    blocks={singleProjectData.designSystem}
                    projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                    dataset="production"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 pb-8">
                {singleProjectData &&
                  singleProjectData.designSystemGallery.map(
                    (graphicsgallery, index) => (
                      <a href={graphicsgallery.asset.url} target="_blank">
                        {" "}
                        <img
                          className="w-full"
                          src={graphicsgallery.asset.url}
                        />
                      </a>
                    )
                  )}
              </div>
              <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                <BlockContent
                  className=""
                  blocks={singleProjectData.extraBlock1}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>

              <div className="flex justify-center">
                <img
                  className="py-8"
                  src={singleProjectData.extraImage2.asset.url}
                  alt={singleProjectData.name}
                />
              </div>
              <div className="grid grid-cols-2 gap-8">
                {singleProjectData &&
                  singleProjectData.extraGallery1.map(
                    (graphicsgallery, index) => (
                      <a href={graphicsgallery.asset.url} target="_blank">
                        {" "}
                        <img
                          className="w-full"
                          src={graphicsgallery.asset.url}
                        />
                      </a>
                    )
                  )}
              </div>
            </div>

            <div className="flex flex-col mt-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                {singleProjectData.extraTitle1}
              </h1>
              <div className="flex justify-center">
                <img
                  className=""
                  src={singleProjectData.extraImage3.asset.url}
                  alt={singleProjectData.name}
                />
              </div>
            </div>

            <div className="flex flex-col mt-12 p-16 bg-pcBlack rounded-[8px]">
              <div className="mb-4">
                <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                  {singleProjectData.extraTitle2}
                </h1>
                <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                  <BlockContent
                    className=""
                    blocks={singleProjectData.extraBlock2}
                    projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                    dataset="production"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-8">
                {singleProjectData &&
                  singleProjectData.extraGallery2.map(
                    (graphicsgallery, index) => (
                      <a href={graphicsgallery.asset.url} target="_blank">
                        {" "}
                        <img
                          className="w-full"
                          src={graphicsgallery.asset.url}
                        />
                      </a>
                    )
                  )}
              </div>
            </div>

            <div className="mt-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                Prototype/Staging
              </h1>
              <div className="mb-6">
                <iframe
                  class="w-full aspect-video"
                  src={singleProjectData.prototypeVideosUrl}
                ></iframe>
              </div>
              <div>
                <iframe
                  class="w-full aspect-video"
                  src={singleProjectData.prototypeVideosUrl2}
                ></iframe>
              </div>
            </div>
          </div>
        ) : singleProjectData.layout === "8" ? (
          <div className="">
            <div className="flex flex-col p-16 bg-pcBlack rounded-[8px]">
              <div>
                <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                  {singleProjectData.processTitle}
                </h1>
                <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                  <BlockContent
                    className=""
                    blocks={singleProjectData.goal}
                    projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                    dataset="production"
                  />
                </div>

                <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                  <BlockContent
                    className=""
                    blocks={singleProjectData.process}
                    projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                    dataset="production"
                  />
                </div>

                <div className="grid grid-cols-2 gap-8">
                  {singleProjectData.processContent &&
                    singleProjectData.processContent.map(
                      (processContent, id) => (
                        <div
                          className="text-pcWhite font-semibold p-4 rounded-[8px] bg-pcWhite/10"
                          key={id}
                        >
                          {processContent}
                        </div>
                      )
                    )}
                </div>

                <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                  <BlockContent
                    className=""
                    blocks={singleProjectData.extraBlock1}
                    projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                    dataset="production"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col p-16 mt-12 bg-pcBlack rounded-[8px]">
              <div>
                <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                  {singleProjectData.processTitle}
                </h1>
                <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                  <BlockContent
                    className=""
                    blocks={singleProjectData.process}
                    projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                    dataset="production"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    className="pt-4"
                    src={singleProjectData.processImage.asset.url}
                    alt={singleProjectData.name}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col p-16 mt-12 bg-pcBlack rounded-[8px]">
              <div>
                <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                  {singleProjectData.designSystemTitle}
                </h1>
                <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                  <BlockContent
                    className=""
                    blocks={singleProjectData.designSystem}
                    projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                    dataset="production"
                  />
                </div>

                <div className="flex justify-center">
                  <img
                    className="pt-4 mb-8"
                    src={singleProjectData.designSystemImage.asset.url}
                    alt={singleProjectData.name}
                  />
                </div>

                <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                  <BlockContent
                    className=""
                    blocks={singleProjectData.designSystem2}
                    projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                    dataset="production"
                  />
                </div>

                <div className="flex justify-center">
                  <img
                    className="pt-4"
                    src={singleProjectData.designSystemImage2.asset.url}
                    alt={singleProjectData.name}
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                {singleProjectData.extraTitle1}
              </h1>
              <div className="text-pcWhite">
                <BlockContent
                  className=""
                  blocks={singleProjectData.extraBlock2}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>

              <div className="grid grid-cols-2 gap-8 text-pcWhite">
                <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite font-semibold p-4 rounded-[8px] bg-pcWhite/10">
                  <BlockContent
                    className=""
                    blocks={singleProjectData.extraBlock3}
                    projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                    dataset="production"
                  />
                </div>
                <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite font-semibold p-4 rounded-[8px] bg-pcWhite/10">
                  <BlockContent
                    className=""
                    blocks={singleProjectData.extraBlock4}
                    projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                    dataset="production"
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                {singleProjectData.extraTitle2}
              </h1>
              <div className="text-pcWhite mb-4">
                <BlockContent
                  className=""
                  blocks={singleProjectData.extraBlock5}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>

              <div className="grid grid-cols-2 gap-8 pb-8">
                {singleProjectData &&
                  singleProjectData.extraGallery1.map(
                    (graphicsgallery, index) => (
                      <a href={graphicsgallery.asset.url} target="_blank">
                        {" "}
                        <img
                          className="w-full"
                          src={graphicsgallery.asset.url}
                        />
                      </a>
                    )
                  )}
              </div>

              <div className="text-pcWhite mb-4">
                <BlockContent
                  className=""
                  blocks={singleProjectData.extraBlock6}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>

              <div className="grid grid-cols-1 gap-8 pb-8">
                {singleProjectData &&
                  singleProjectData.extraGallery2.map(
                    (graphicsgallery, index) => (
                      <a href={graphicsgallery.asset.url} target="_blank">
                        {" "}
                        <img
                          className="w-full"
                          src={graphicsgallery.asset.url}
                        />
                      </a>
                    )
                  )}
              </div>

              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                {singleProjectData.extraTitle3}
              </h1>
              <div className="grid grid-cols-4 gap-8">
                {singleProjectData &&
                  singleProjectData.extraGallery3.map(
                    (graphicsgallery, index) => (
                      <a href={graphicsgallery.asset.url} target="_blank">
                        {" "}
                        <img
                          className="w-full"
                          src={graphicsgallery.asset.url}
                        />
                      </a>
                    )
                  )}
              </div>
            </div>

            <div className="mt-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                {singleProjectData.result}
              </h1>
              <div className="text-pcWhite">
                <BlockContent
                  className=""
                  blocks={singleProjectData.resultContent}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
            </div>
          </div>
        ) : singleProjectData.layout === "9" ? (
          <div className="">
            <div className="flex flex-col p-16 mt-12 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                {singleProjectData.processTitle}
              </h1>
              <div className="text-pcWhite">
                <BlockContent
                  className=""
                  blocks={singleProjectData.process}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
              <div className="flex justify-center">
                <img
                  className="pt-4 w-9/12"
                  src={singleProjectData.processImage.asset.url}
                  alt={singleProjectData.name}
                />
              </div>
            </div>

            <div className="flex flex-col p-16 mt-12 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                {singleProjectData.designSystemTitle}
              </h1>
              <div className="text-pcWhite mb-4">
                <BlockContent
                  className=""
                  blocks={singleProjectData.designSystem}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
              <div className="grid grid-cols-2 gap-8">
                {singleProjectData &&
                  singleProjectData.designSystemGallery.map(
                    (graphicsgallery, index) => (
                      <a href={graphicsgallery.asset.url} target="_blank">
                        {" "}
                        <img
                          className="w-full"
                          src={graphicsgallery.asset.url}
                        />
                      </a>
                    )
                  )}
              </div>
            </div>

            <div className="flex flex-col p-16 mt-12 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                {singleProjectData.gifTitle}
              </h1>
              <div className="text-pcWhite mb-4">
                <BlockContent
                  className=""
                  blocks={singleProjectData.gifBlock}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
              <div className="grid grid-cols-1 gap-8">
                {singleProjectData &&
                  singleProjectData.gifGallery.map((graphicsgallery, index) => (
                    <a href={graphicsgallery.asset.url} target="_blank">
                      {" "}
                      <img className="w-full" src={graphicsgallery.asset.url} />
                    </a>
                  ))}
              </div>
            </div>

            <div className="flex flex-col p-16 mt-12 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                {singleProjectData.prototypeTitle}
              </h1>
              <div className="text-pcWhite mb-4">
                <BlockContent
                  className=""
                  blocks={singleProjectData.gifBlock}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
              <div className="grid grid-cols-1 gap-8">
                {singleProjectData &&
                  singleProjectData.extraGallery1.map(
                    (graphicsgallery, index) => (
                      <a href={graphicsgallery.asset.url} target="_blank">
                        {" "}
                        <img
                          className="w-full"
                          src={graphicsgallery.asset.url}
                        />
                      </a>
                    )
                  )}
              </div>
            </div>

            <div className="flex flex-col p-16 mt-12 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                {singleProjectData.extraTitle1}
              </h1>
              <div className="text-pcWhite mb-4">
                <BlockContent
                  className=""
                  blocks={singleProjectData.extraBlock1}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
              <div className="flex justify-center">
                <img
                  className="pt-4"
                  src={singleProjectData.extraImage1.asset.url}
                  alt={singleProjectData.name}
                />
              </div>
            </div>

            <div className="flex flex-col p-16 mt-12 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                {singleProjectData.extraTitle2}
              </h1>
              <div className="text-pcWhite mb-4">
                <BlockContent
                  className=""
                  blocks={singleProjectData.extraBlock2}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
              <div className="flex justify-center">
                <img
                  className="pt-4 w-1/2"
                  src={singleProjectData.extraImage2.asset.url}
                  alt={singleProjectData.name}
                />
              </div>
              <div className="text-pcWhite my-4">
                <BlockContent
                  className=""
                  blocks={singleProjectData.extraBlock3}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>

              <div className="flex justify-center">
                <img
                  className=""
                  src={singleProjectData.extraImage3.asset.url}
                  alt={singleProjectData.name}
                />
              </div>

              <div className="text-pcWhite my-4">
                <BlockContent
                  className=""
                  blocks={singleProjectData.extraBlock4}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>

              <div className="grid grid-cols-1 gap-8">
                {singleProjectData &&
                  singleProjectData.extraGallery2.map(
                    (graphicsgallery, index) => (
                      <a href={graphicsgallery.asset.url} target="_blank">
                        {" "}
                        <img
                          className="w-full"
                          src={graphicsgallery.asset.url}
                        />
                      </a>
                    )
                  )}
              </div>

              <div className="text-pcWhite my-4">
                <BlockContent
                  className=""
                  blocks={singleProjectData.extraBlock5}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>

              <div className="grid grid-cols-2 gap-8">
                {singleProjectData &&
                  singleProjectData.extraGallery3.map(
                    (graphicsgallery, index) => (
                      <a href={graphicsgallery.asset.url} target="_blank">
                        {" "}
                        <img
                          className="w-full"
                          src={graphicsgallery.asset.url}
                        />
                      </a>
                    )
                  )}
              </div>
            </div>

            <div className="flex flex-col p-16 mt-12 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                {singleProjectData.extraTitle3}
              </h1>
              <div className="text-pcWhite mb-4">
                <BlockContent
                  className=""
                  blocks={singleProjectData.extraBlock6}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>

              <div className="grid grid-cols-2 gap-8">
                {singleProjectData &&
                  singleProjectData.extraGallery4.map(
                    (graphicsgallery, index) => (
                      <a href={graphicsgallery.asset.url} target="_blank">
                        {" "}
                        <img
                          className="w-full"
                          src={graphicsgallery.asset.url}
                        />
                      </a>
                    )
                  )}
              </div>

              <div className="flex justify-center">
                <img
                  className="pt-4"
                  src={singleProjectData.extraImage4.asset.url}
                  alt={singleProjectData.name}
                />
              </div>
            </div>

            <div className="flex flex-col p-16 mt-12 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                {singleProjectData.extraTitle4}
              </h1>
              <div className="text-pcWhite mb-4">
                <BlockContent
                  className=""
                  blocks={singleProjectData.extraBlock7}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>

              <div className="flex justify-center">
                <img
                  className="pt-4"
                  src={singleProjectData.extraImage5.asset.url}
                  alt={singleProjectData.name}
                />
              </div>
            </div>

            <div className="flex flex-col p-16 mt-12 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                {singleProjectData.extraTitle5}
              </h1>
              <div className="text-pcWhite mb-4">
                <BlockContent
                  className=""
                  blocks={singleProjectData.extraBlock8}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>

              <div className="grid grid-cols-2 gap-8">
                {singleProjectData &&
                  singleProjectData.extraGallery5.map(
                    (graphicsgallery, index) => (
                      <a href={graphicsgallery.asset.url} target="_blank">
                        {" "}
                        <img
                          className="w-full"
                          src={graphicsgallery.asset.url}
                        />
                      </a>
                    )
                  )}
              </div>

              <div className="text-pcWhite my-4">
                <BlockContent
                  className=""
                  blocks={singleProjectData.extraBlock9}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>

              <div className="flex justify-center">
                <img
                  className=""
                  src={singleProjectData.extraImage6.asset.url}
                  alt={singleProjectData.name}
                />
              </div>
            </div>

            <div className="mt-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                {singleProjectData.result}
              </h1>
              <div className="text-pcWhite">
                <BlockContent
                  className=""
                  blocks={singleProjectData.resultContent}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
            </div>
          </div>
        ) : singleProjectData.layout === "10" ? (
          <div>
            <div className="mt-12 mb-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2 ">
                {singleProjectData.processTitle}
                <a
                  href="https://www.plangora.com/"
                  className="ml-2 text-[14px] text-white font-semibold rounded-[24px] px-3 py-1 mr-2 mb-2 bg-white/20 inline-block align-middle hover:bg-white/40"
                >
                  View Site
                </a>
              </h1>

              <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                <BlockContent
                  className=""
                  blocks={singleProjectData.process}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex justify-center">
                  <img
                    className=""
                    src={singleProjectData.processImage.asset.url}
                    alt={singleProjectData.name}
                  />
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {singleProjectData &&
                    singleProjectData.extraGallery2.map(
                      (graphicsgallery, index) => (
                        <a href={graphicsgallery.asset.url} target="_blank">
                          {" "}
                          <img
                            className="w-full"
                            src={graphicsgallery.asset.url}
                          />
                        </a>
                      )
                    )}
                </div>
              </div>

              <div className="mt-4">
                <iframe
                  class="w-full aspect-video"
                  src={singleProjectData.extraTitle4}
                ></iframe>
              </div>
            </div>

            <div className="mt-12 mb-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2 ">
                {singleProjectData.designSystemTitle}
                <a
                  href="https://flyinghighwithflutter.com/"
                  className="ml-2 text-[14px] text-white font-semibold rounded-[24px] px-3 py-1 mr-2 mb-2 bg-white/20 inline-block align-middle hover:bg-white/40"
                >
                  View Site
                </a>
              </h1>
              <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                <BlockContent
                  className=""
                  blocks={singleProjectData.designSystem}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>

              <div className="grid grid-cols-1 gap-8 mt-4">
                {singleProjectData &&
                  singleProjectData.designSystemGallery.map(
                    (graphicsgallery, index) => (
                      <a href={graphicsgallery.asset.url} target="_blank">
                        {" "}
                        <img
                          className="w-full"
                          src={graphicsgallery.asset.url}
                        />
                      </a>
                    )
                  )}
              </div>

              <div className="mt-4">
                <iframe
                  class="w-full aspect-video"
                  src={singleProjectData.extraTitle5}
                ></iframe>
              </div>
            </div>

            <div className="mt-12 mb-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2 ">
                {singleProjectData.gifTitle}
                <a
                  href="https://rustacean-station.org/"
                  className="ml-2 text-[14px] text-white font-semibold rounded-[24px] px-3 py-1 mr-2 mb-2 bg-white/20 inline-block align-middle hover:bg-white/40"
                >
                  View Site
                </a>
              </h1>

              <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                <BlockContent
                  className=""
                  blocks={singleProjectData.gifBlock}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>

              <div className="grid grid-cols-1 gap-8 mt-4">
                {singleProjectData &&
                  singleProjectData.gifGallery.map((graphicsgallery, index) => (
                    <a href={graphicsgallery.asset.url} target="_blank">
                      {" "}
                      <img className="w-full" src={graphicsgallery.asset.url} />
                    </a>
                  ))}
              </div>
            </div>

            <div className="mt-12 mb-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2 ">
                {singleProjectData.prototypeTitle}
                <a
                  href="https://www.rustwithflutter.com/"
                  className="ml-2 text-[14px] text-white font-semibold rounded-[24px] px-3 py-1 mr-2 mb-2 bg-white/20 inline-block align-middle hover:bg-white/40"
                >
                  View Site
                </a>
              </h1>

              <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                <BlockContent
                  className=""
                  blocks={singleProjectData.designSystem}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>

              <div className="flex justify-center mt-4">
                <img
                  className=""
                  src={singleProjectData.extraImage2.asset.url}
                  alt={singleProjectData.name}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                {singleProjectData &&
                  singleProjectData.extraGallery1.map(
                    (graphicsgallery, index) => (
                      <a href={graphicsgallery.asset.url} target="_blank">
                        {" "}
                        <img
                          className="w-full"
                          src={graphicsgallery.asset.url}
                        />
                      </a>
                    )
                  )}
              </div>
            </div>

            <div className="mt-12 mb-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2 ">
                {singleProjectData.extraTitle2}
                <a
                  href="https://www.instagram.com/teachmecode.hk/"
                  className="ml-2 text-[14px] text-white font-semibold rounded-[24px] px-3 py-1 mr-2 mb-2 bg-white/20 inline-block align-middle hover:bg-white/40"
                >
                  View Site
                </a>
              </h1>

              <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                <BlockContent
                  className=""
                  blocks={singleProjectData.designSystem}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>

              <div className="flex justify-center mt-4">
                <img
                  className=""
                  src={singleProjectData.extraImage3.asset.url}
                  alt={singleProjectData.name}
                />
              </div>
            </div>

            <div className="mt-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2 ">
                {singleProjectData.extraTitle1}
                <a
                  href="https://www.thepetalstack.com/"
                  className="ml-2 text-[14px] text-white font-semibold rounded-[24px] px-3 py-1 mr-2 mb-2 bg-white/20 inline-block align-middle hover:bg-white/40"
                >
                  View Site
                </a>
              </h1>
              <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                <BlockContent
                  className=""
                  blocks={singleProjectData.extraBlock1}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
              <div className="flex justify-center mt-4">
                <img
                  className=""
                  src={singleProjectData.extraImage1.asset.url}
                  alt={singleProjectData.name}
                />
              </div>

              <div className="mt-4">
                <iframe
                  class="w-full aspect-video"
                  src={singleProjectData.extraTitle3}
                ></iframe>
              </div>
            </div>
          </div>
        ) : singleProjectData.layout === "11" ? (
          <div>
            <div className="mt-12 mb-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                {singleProjectData.designSystemTitle} 
                <a
                  href="https://plsigo.app/apply-now/"
                  className="ml-2 text-[14px] text-white font-semibold rounded-[24px] px-3 py-1 mb-2 bg-white/20 inline-block align-middle hover:bg-white/40"
                >
                  View Old Form
                </a>

                <a
                  href="https://plsigo.app/apply-now/2"
                  className="ml-2 text-[14px] text-white font-semibold rounded-[24px] px-3 py-1 mr-2 mb-2 bg-white/20 inline-block align-middle hover:bg-white/40"
                >
                  View New Form
                </a>
              </h1>
              <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                <BlockContent
                  className=""
                  blocks={singleProjectData.designSystem}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {singleProjectData &&
                  singleProjectData.designSystemGallery.map(
                    (graphicsgallery, index) => (
                      <a href={graphicsgallery.asset.url} target="_blank">
                        {" "}
                        <img
                          className="w-full"
                          src={graphicsgallery.asset.url}
                        />
                      </a>
                    )
                  )}
              </div>

              <iframe
                class="w-full aspect-video mt-4"
                src={singleProjectData.extraTitle1}
              ></iframe>
              
            </div>

            <div className="mt-12 mb-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                {singleProjectData.gifTitle}
              </h1>
              <div className="flex flex-row items-center mt-4">
              <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite basis-1/2">
                <BlockContent
                  className=""
                  blocks={singleProjectData.gifBlock}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
              <div className="flex justify-center mt-4 basis-1/2">
                <img
                  className="w-2/3"
                  src={singleProjectData.extraImage1.asset.url}
                  alt={singleProjectData.name}
                />
              </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {singleProjectData &&
                  singleProjectData.gifGallery.map(
                    (graphicsgallery, index) => (
                      <a href={graphicsgallery.asset.url} target="_blank">
                        {" "}
                        <img
                          className="w-full"
                          src={graphicsgallery.asset.url}
                        />
                      </a>
                    )
                  )}
              </div>


              <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite mt-4">
                <BlockContent
                  className=""
                  blocks={singleProjectData.extraBlock1}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>

              

              <div className="grid grid-cols-2 gap-4 mt-4">
                {singleProjectData &&
                  singleProjectData.extraGallery1.map(
                    (graphicsgallery, index) => (
                      <a href={graphicsgallery.asset.url} target="_blank">
                        {" "}
                        <img
                          className="w-full"
                          src={graphicsgallery.asset.url}
                        />
                      </a>
                    )
                  )}
              </div>
            </div>

            <div className="mt-12 p-16 bg-pcBlack rounded-[8px]">
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-pfFont2">
                {singleProjectData.result}
              </h1>
              <div className="prose max-w-none prose-strong:text-green-300 prose-strong:font-pfFont2 font-pfFont text-pcWhite">
                <BlockContent
                  className=""
                  blocks={singleProjectData.resultContent}
                  projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                  dataset="production"
                />
              </div>
              
            </div>
          </div>
        ) : singleProjectData.layout === "12" ? (
          <div></div>
        ) : (
          <div>
            <h1 className="text-white">Layout 13</h1>

            <div className="mb-24 text-pcWhite">
              <BlockContent
                className="mb-24 prose prose-a:text-green-300 text-pcWhite"
                blocks={singleProjectData.overview}
                projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                dataset="production"
              />
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {singleProjectData &&
                singleProjectData.designSystemGallery.map(
                  (graphicsgallery, index) => (
                    <div className="" key={index}>
                      <div className="">
                        <a href={graphicsgallery.asset.url} target="_blank">
                          {" "}
                          <img
                            className="rounded-[8px]"
                            src={graphicsgallery.asset.url}
                          />
                        </a>
                      </div>
                    </div>
                  )
                )}
            </div>

            <div>
              <div className="text-[40px] text-pcBlue font-pfFont2 font-bold text-center mb-2">
                {singleProjectData.gifTitle}
              </div>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {singleProjectData &&
                  singleProjectData.gifGallery.map((graphicsgallery, index) => (
                    <div className="" key={index}>
                      <div className="">
                        <a href={graphicsgallery.asset.url} target="_blank">
                          {" "}
                          <img
                            className="rounded-[8px]"
                            src={graphicsgallery.asset.url}
                          />
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

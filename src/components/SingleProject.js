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
      gifTitle,
      designSystemTitle,
      designSystem,
      prototype,
      prototypeVideosUrl,
      prototype2,
      prototypeVideosUrl2,
      result,
      resultContent,
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

      <div className="px-10 lg:px-[160px] md:px-[24px] sm:px-[24px]  bg-pcBlack  text-jpFont">
        {/* <motion.div style={{ scaleX: scrollYProgress }} />   */}

        <h1>SingleProject page!</h1>
        <h1>{singleProjectData.title}</h1>
        <h1>{singleProjectData.categories}</h1>
        <img
          className="justify-center mx-auto w-full object-cover max-h-[640px] rounded-[16px]"
          src={singleProjectData.projectBanner.asset.url}
          alt={singleProjectData.name}
        />
        <h1 className="text-pcWhite text-2xl font-bold">
          This is the image gallery
        </h1>

        <h1 className="text-pcWhite text-2xl font-bold">
          This is layout {singleProjectData.layout}
        </h1>

        {singleProjectData.layout === "1" ? (
          <div>
            <h1>Layout 1</h1>
          </div>
        ) : singleProjectData.layout === "2" ? (
          <div>
            <h1>Layout 2</h1>

            <div>
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-jpFont2">
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
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-jpFont2">
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
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-jpFont2">
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
                <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-jpFont2">
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
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-jpFont2">
                Prototype/Staging
              </h1>
              <div className="mb-24 prose prose-a:text-green-300 text-pcWhite">
                {singleProjectData.prototypeVideosUrl}
              </div>
            </div>

            <div>
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
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-jpFont2">
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
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-jpFont2">
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
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-jpFont2">
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
                <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-jpFont2">
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
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-jpFont2">
                Prototype/Staging
              </h1>
              <div className="mb-24 prose prose-a:text-green-300 text-pcWhite">
                {singleProjectData.prototypeVideosUrl}
              </div>
            </div>

            <div>
              <h1 className="text-[32px] mb-4 font-bold text-pcBlue font-jpFont2">
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
        ) : (
          <div>
            <h1 className="text-white">Layout 4</h1>

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
              <div className="text-[40px] text-pcBlue font-jpFont2 font-bold text-center mb-2">
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

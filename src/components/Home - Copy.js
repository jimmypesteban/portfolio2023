
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
    <div className="
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


<div class="flex flex-col px-[30px]">
        <div class=" bg-blue-200 h-[300px] w-full my-[10px]">

          <div class=" bg-green-200 relative">
            <img
              class="h-[300px] w-full object-cover "
              src="https://images.unsplash.com/photo-1599009434802-ca1dd09895e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <div class="absolute top-0 w-full h-[300px] text-white bg-black/50">
              <h1>text overlay</h1>
            </div>
          </div>

        </div>

      </div>




{/* <div className="">
        <div className="flex flex-col bg-pcBlack px-[30px]">
          {projectData &&
            projectData.map((projectData, index) => (
              <div>
              <div
                className="relative w-full px-[160px] h-[360px] mx-auto my-[24px]"
                key={index}
              >
                <div
                  className={`absolute px-[48px] py-[48px] text-pcWhite text-[24px] z-20 bg-black opacity-50 w-full h-[360px] `}
                >
                  <img
                    className="w-[40px]"
                    src={projectData.projectLogo.asset.url}
                  />

                  <h1 className="">{projectData.title}</h1>
                  <p className="">{projectData.headline}</p>
                  <p className="">{projectData.brief}</p>
                  {projectData.liveSite !== null && (
                    <button className="bg-green-500 hover:bg-green-700 text-pcWhite font-jpFont font-bold py-2 px-4 rounded">
                      <a
                        className="text-pcBlack"
                        href={projectData.liveSite}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View External
                      </a>
                    </button>
                  )}
                  {projectData.liveSite === null && (
                    <button className="bg-blue-500 hover:bg-blue-700 text-pcWhite font-jpFont font-bold py-2 px-4 rounded">
                      <Link
                        to={"/projects/" + projectData.slug.current}
                        key={projectData.slug.current}
                      >
                        View Case Study
                      </Link>
                    </button>
                  )}
                </div>

                <img
                  className="h-[360px] w-full object-cover rounded-[8px] z-0 "
                  src={projectData.projectBanner.asset.url}
                />

              </div>
              </div>
            ))}
        </div>
      </div> */}


      // <div className="pt-[80px] pb-[40px] bg-pcBlack">
      //   <h1 className="text-[40px] mb-4 font-bold text-pcBlue font-jpFont2 text-center">
      //     Selected Works
      //   </h1>
      // </div>

      // <div className="flex flex-col px-[30px] bg-pcBlack">
      //   {projectData &&
      //     projectData.map((projectData, index) => (
      //       <div className=" h-[360px] w-full my-[24px]" key={index}>
      //         <div className=" relative mx-[160px]">
      //           <img
      //             className="h-[360px] w-full object-cover rounded-[8px]"
      //             src={projectData.projectBanner.asset.url}
      //           />
      //           <div className="absolute top-0 w-full h-[360px] text-pcWhite bg-pcBlack/50 px-[48px] py-[48px]  rounded-[8px]">
      //             {/* <img
      //               className="w-[40px]"
      //               src={projectData.projectLogo.asset.url}
      //             /> */}

      //             <p className="text-[16px]">{projectData.duration}</p>
      //             <h1 className="text-[36px] font-bold">{projectData.title}</h1>
      //             <p className="text-[16px]">{projectData.role}</p>

      //             <div className="flex flex-wrap">
      //               {projectData.projectTags &&
      //                 projectData.projectTags.map((projectTags, id) => (
      //                   <div
      //                     className=" text-[16px] text-pcWhite bg-pcBlack/50 rounded-[24px] px-2 py-1 mr-2"
      //                     key={id}
      //                   >
      //                     {projectTags}
      //                   </div>
      //                 ))}
      //             </div>

      //             <p className="text-[20px] w-[360px]">{projectData.brief}</p>

      //             {projectData.externalLink !== null && (
      //               <button className="bg-green-500 hover:bg-green-700 text-pcWhite font-jpFont font-bold py-2 px-4 rounded">
      //                 <a
      //                   className="text-pcBlack"
      //                   href={projectData.externalLink}
      //                   target="_blank"
      //                   rel="noreferrer"
      //                 >
      //                   View in Behance
      //                 </a>
      //               </button>
      //             )}
      //             {projectData.liveSite !== null && (
      //               <button className="bg-blue-500 hover:bg-blue-700 text-pcWhite font-jpFont font-bold py-2 px-4 rounded">
      //                 <Link
      //                   to={"/projects/" + projectData.slug.current}
      //                   key={projectData.slug.current}
      //                 >
      //                   View Case Study
      //                 </Link>
      //               </button>
      //             )}
      //           </div>
      //         </div>
      //       </div>
      //     ))}
      // </div>
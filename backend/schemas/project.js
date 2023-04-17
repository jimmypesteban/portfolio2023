// import portfolioColorsTest from "./portfolioColorsTest";

export default {
  name: "project",
  title: "Project",
  type: "document",
  groups: [
    {
      name: "landingPage",
      title: "Landing Page",
    },
    {
      name: "introduction",
      title: "Introduction",
    },
    {
      name: "process",
      title: "Process",
    },
    {
      name: "designSystem",
      title: "Design System",
    },
    {
      name: "prototype",
      title: "Prototype",
    },
    {
      name: "conclusion",
      title: "Conclusion",
    },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "headline",
      title: "Headline",
      group: "landingPage",
      type: "string",
    },

    {
      name: "brief",
      title: "Brief",
      group: "landingPage",
      type: "string",
    },

    {
      name: "portableText",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    description:
                      "Read https://css-tricks.com/use-target_blank/",
                    type: "boolean",
                  },
                ],
              },
              {
                name: "internalLink",
                type: "object",
                title: "Internal link",
                fields: [
                  {
                    name: "reference",
                    type: "reference",
                    title: "Reference",
                    to: [
                      { type: "post" },
                      // other types you may want to link to
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },

    // {
    //   name: "colorDocument",
    //   title: "Color Document",
    //   type: "document",
    //   fields: [
    //     {
    //       title: "Project Title Color",
    //       name: "projectTitleColorTest",
    //       type: "string",
    //       options: {
    //         list: [
    //           { title: "Color Black", value: "pcBlack" },
    //           { title: "Color Gray", value: "pcGray" },
    //         ],
    //       },
    //     },
    //     {
    //       title: "Project Tags Color",
    //       name: "projectTagsColor",
    //       type: "string",
    //       options: {
    //         list: [...portfolioColorsTest],
    //       },
    //     },
    //     {
    //       title: "Project Button Color",
    //       name: "projectButtonColor",
    //       type: "string",
    //       options: {
    //         list: [...portfolioColorsTest],
    //       },
    //     },
    //   ],
    // },

    {
      name: "projectTitleColor",
      title: "Project Title Color",
      type: "string",
    },

    {
      name: "projectTagsColor",
      title: "Project Tags Color",
      type: "string",
    },

    {
      name: "projectButtonColor",
      title: "Project Button Color",
      type: "string",
    },

    {
      name: "extraColor1",
      title: "Extra Color 1",
      type: "string",
    },

    {
      name: "extraColor2",
      title: "Extra Color 2",
      type: "string",
    },

    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "layout",
      title: "Layout",
      type: "string",
      description: "Required!!!",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "projectTags",
      title: "Project Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "projectLogo",
      title: "Project Logo",
      type: "image",
      group: "landingPage",
      options: {
        hotspot: true,
      },
    },
    {
      name: "projectBanner",
      title: "Project Banner",
      group: "introduction",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "projectHomeBanner",
      title: "Project Home Banner",
      group: "introduction",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "liveSite",
      title: "Live Site",
      group: "introduction",
      type: "string",
    },
    {
      name: "externalLink",
      title: "External Link",
      group: "introduction",
      description: "Only for homepage",
      type: "string",
    },
    {
      name: "overview",
      title: "Overview",
      group: "introduction",
      description: "Brief / Short Intro",
      type: "blockContent",
    },
    {
      name: "role",
      title: "Role",
      group: "introduction",
      type: "string",
    },
    {
      name: "duration",
      title: "Duration",
      group: "introduction",
      type: "string",
    },

    {
      name: "responsibilites",
      title: "Responsibilites",
      group: "introduction",
      type: "string",
    },
    {
      name: "teamMembers",
      title: "Team Members",
      group: "introduction",
      type: "string",
    },
    {
      name: "tools",
      title: "Tools",
      group: "introduction",
      type: "string",
    },
    {
      name: "goal",
      title: "The Goal",
      group: "introduction",
      type: "blockContent",
    },
    {
      name: "processTitle",
      title: "Process Title",
      group: "process",
      type: "string",
    },
    {
      name: "process",
      title: "Process",
      group: "process",
      type: "blockContent",
    },
    {
      name: "processContent",
      title: "Process Content",
      group: "process",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "processImage",
      title: "Process Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "designSystemTitle",
      title: "Design System Title",
      group: "process",
      type: "string",
    },
    {
      name: "designSystem",
      title: "Design System",
      group: "designSystem",
      type: "blockContent",
    },
    {
      name: "designSystem2",
      title: "Design System 2",
      group: "designSystem",
      type: "blockContent",
    },
    {
      name: "designSystemGallery",
      title: "Design System Gallery",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "designSystemImage",
      title: "Design System Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "designSystemImage2",
      title: "Design System Image 2",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "gifTitle",
      title: "Gif Title",
      group: "process",
      type: "string",
    },
    {
      name: "gifBlock",
      title: "Gif Block",
      type: "blockContent",
      group: "conclusion",
    },
    {
      name: "gifGallery",
      title: "Gif Gallery",
      type: "array",
      of: [{ type: "file" }],
    },
    {
      name: "prototypeTitle",
      title: "Prototype Title",
      type: "string",
      group: "prototype",
    },
    {
      name: "prototypeBlock",
      title: "Prototype Block",
      type: "blockContent",
      group: "conclusion",
    },
    {
      name: "prototypeVideosUrl",
      title: "Prototype Video Url",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "prototypeTitle2",
      title: "Prototype Title 2",
      type: "string",
      group: "prototype",
    },
    {
      name: "prototypeVideosUrl2",
      title: "Prototype Video Url 2",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "result",
      title: "Results and Takeaways Title",
      type: "string",
      group: "conclusion",
    },
    {
      name: "resultContent",
      title: "Results and Takeaways Content",
      type: "blockContent",
      group: "conclusion",
    },
    {
      name: "extraImage1",
      title: "Extra Image 1",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "extraImage2",
      title: "Extra Image 2",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "extraImage3",
      title: "Extra Image 3",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "extraImage4",
      title: "Extra Image 4",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "extraImage5",
      title: "Extra Image 5",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "extraImage6",
      title: "Extra Image 6",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "extraImage7",
      title: "Extra Image 7",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "extraImage8",
      title: "Extra Image 8",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "extraGallery1",
      title: "Extra Gallery 1",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "extraGallery2",
      title: "Extra Gallery 2",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "extraGallery3",
      title: "Extra Gallery 3",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "extraGallery4",
      title: "Extra Gallery 4",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "extraGallery5",
      title: "Extra Gallery 5",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "extraGallery6",
      title: "Extra Gallery 6",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "extraTitle1",
      title: "Extra Title 1",
      type: "string",
    },
    {
      name: "extraTitle2",
      title: "Extra Title 2",
      type: "string",
    },
    {
      name: "extraTitle3",
      title: "Extra Title 3",
      type: "string",
    },
    {
      name: "extraTitle4",
      title: "Extra Title 4",
      type: "string",
    },
    {
      name: "extraTitle5",
      title: "Extra Title 5",
      type: "string",
    },
    {
      name: "extraTitle6",
      title: "Extra Title 6",
      type: "string",
    },
    {
      name: "extraBlock1",
      title: "Extra Block 1",
      type: "blockContent",
    },
    {
      name: "extraBlock2",
      title: "Extra Block 2",
      type: "blockContent",
    },
    {
      name: "extraBlock3",
      title: "Extra Block 3",
      type: "blockContent",
    },
    {
      name: "extraBlock4",
      title: "Extra Block 4",
      type: "blockContent",
    },
    {
      name: "extraBlock5",
      title: "Extra Block 5",
      type: "blockContent",
    },
    {
      name: "extraBlock6",
      title: "Extra Block 6",
      type: "blockContent",
    },
    {
      name: "extraBlock7",
      title: "Extra Block 7",
      type: "blockContent",
    },
    {
      name: "extraBlock8",
      title: "Extra Block 8",
      type: "blockContent",
    },
    {
      name: "extraBlock9",
      title: "Extra Block 9",
      type: "blockContent",
    },
    {
      name: "extraBlock10",
      title: "Extra Block 10",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};

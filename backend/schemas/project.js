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
      type: "blockContent",
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
      name: "designSystemGallery",
      title: "Design System Gallery",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "gifTitle",
      title: "Gif Title",
      group: "process",
      type: "string",
    },
    {
      name: "gifGallery",
      title: "Gif Gallery",
      type: "array",
      of: [{ type: "file" }],
    },

    {
      name: "prototype",
      title: "Prototype Title",
      type: "string",
      group: "prototype",
    },
    {
      name: "prototypeVideosUrl",
      title: "Prototype Video Url",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "prototype2",
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

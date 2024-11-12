export interface DesignCategory {
  category: string;
  tools: { name: string; url: string; description: string; logo: string }[];
}

export const design_categories: DesignCategory[] = [
  {
    category: "UI Design Tools",
    tools: [
      {
        name: "Figma",
        url: "https://www.figma.com/",
        description:
          "A collaborative interface design tool that works in the browser.",
        logo: "https://static.figma.com/app/icon/1/favicon.png",
      },
      {
        name: "Adobe XD",
        url: "https://www.adobe.com/products/xd.html",
        description:
          "A vector-based user experience design tool for web and mobile apps.",
        logo: "https://www.adobe.com/content/dam/cc/icons/xd.svg",
      },
      {
        name: "Sketch",
        url: "https://www.sketch.com/",
        description:
          "A digital design app for macOS for designing user interfaces, websites, and icons.",
        logo: "https://www.sketch.com/images/pages/press/sketch-mac-icon@2x.png",
      },
      {
        name: "InVision",
        url: "https://www.invisionapp.com/",
        description:
          "A digital product design platform used to make prototypes, manage projects, and collaborate.",
        logo: "https://www.invisionapp.com/favicon.ico",
      },
      {
        name: "Framer",
        url: "https://www.framer.com/",
        description:
          "A tool for creating high-fidelity interactive prototypes.",
        logo: "https://www.framer.com/app/static/favicon/32x32.png",
      },
    ],
  },
  {
    category: "Graphic Design Software",
    tools: [
      {
        name: "Adobe Photoshop",
        url: "https://www.adobe.com/products/photoshop.html",
        description:
          "A raster graphics editor for image editing and photo retouching.",
        logo: "https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg",
      },
      {
        name: "Adobe Illustrator",
        url: "https://www.adobe.com/products/illustrator.html",
        description:
          "A vector graphics editor and design program for logos, icons, and complex illustrations.",
        logo: "https://www.adobe.com/content/dam/cc/icons/illustrator.svg",
      },
      {
        name: "Affinity Designer",
        url: "https://affinity.serif.com/designer/",
        description:
          "A vector graphics editor that's fast, smooth, and precise.",
        logo: "https://affinity.serif.com/images/icons/product-designer.svg",
      },
      {
        name: "Affinity Photo",
        url: "https://affinity.serif.com/photo/",
        description: "A professional photo editing software.",
        logo: "https://affinity.serif.com/images/icons/product-photo.svg",
      },
      {
        name: "GIMP",
        url: "https://www.gimp.org/",
        description:
          "A free and open-source raster graphics editor for image manipulation and editing.",
        logo: "https://www.gimp.org/images/wilber32.png",
      },
    ],
  },
  {
    category: "Prototyping Tools",
    tools: [
      {
        name: "ProtoPie",
        url: "https://www.protopie.io/",
        description:
          "A tool to create advanced prototypes without code, supporting sensors and multi-finger gestures.",
        logo: "https://www.protopie.io/static/favicon.ico",
      },
      {
        name: "Principle",
        url: "https://principleformac.com/",
        description:
          "A tool for designing animated and interactive user interfaces.",
        logo: "https://principleformac.com/assets/favicon/favicon-32x32.png",
      },
      {
        name: "Marvel",
        url: "https://marvelapp.com/",
        description:
          "A platform to create, test, and share prototypes for mobile apps and websites.",
        logo: "https://marvelapp.com/static/site/mstile-310x310.png",
      },
      {
        name: "Origami Studio",
        url: "https://origami.design/",
        description:
          "A free design tool created by Facebook for designing modern interfaces.",
        logo: "https://origami.design/assets/images/favicon-32x32.png",
      },
      {
        name: "Webflow",
        url: "https://webflow.com/",
        description:
          "A web design tool, CMS, and hosting platform in one that allows you to design and launch responsive websites visually.",
        logo: "https://assets-global.website-files.com/5d3ac7a9ec9f775281dab7b7/5d3ac7a9ec9f777bf8dab7c5_favicon.png",
      },
    ],
  },
  {
    category: "Design Systems",
    tools: [
      {
        name: "Storybook",
        url: "https://storybook.js.org/",
        description:
          "An open-source tool for developing UI components in isolation for React, Vue, and Angular.",
        logo: "https://storybook.js.org/images/logos/icon-storybook.png",
      },
      {
        name: "Zeroheight",
        url: "https://zeroheight.com/",
        description:
          "A design system documentation platform that syncs with your design tools.",
        logo: "https://zeroheight.com/favicon.ico",
      },
      {
        name: "Abstract",
        url: "https://www.abstract.com/",
        description:
          "A version control and collaboration platform for designers using Sketch, Adobe XD, and other tools.",
        logo: "https://www.abstract.com/favicon.ico",
      },
      {
        name: "Lingo",
        url: "https://www.lingoapp.com/",
        description:
          "An asset management tool for design teams to organize and share visual assets.",
        logo: "https://www.lingoapp.com/favicon.ico",
      },
      {
        name: "Frontify",
        url: "https://www.frontify.com/",
        description:
          "A brand management platform to create, manage, and share digital brand assets.",
        logo: "https://www.frontify.com/favicon-32x32.png",
      },
    ],
  },
  {
    category: "Color Tools",
    tools: [
      {
        name: "Coolors",
        url: "https://coolors.co/",
        description: "A super fast color schemes generator for designers.",
        logo: "https://coolors.co/assets/img/press-kit/logo.png",
      },
      {
        name: "Adobe Color",
        url: "https://color.adobe.com/create",
        description:
          "Create color schemes with the color wheel or browse thousands of color combinations.",
        logo: "https://color.adobe.com/create/favicon.ico",
      },
      {
        name: "Colorhunt",
        url: "https://colorhunt.co/",
        description:
          "A free and open platform for color inspiration with thousands of trendy hand-picked color palettes.",
        logo: "https://colorhunt.co/img/color-hunt-icon.png",
      },
      {
        name: "Palleton",
        url: "http://palleton.com/",
        description:
          "A color scheme designer tool for creating perfect color combinations.",
        logo: "http://palleton.com/favicon.ico",
      },
      {
        name: "Khroma",
        url: "http://khroma.co/",
        description:
          "An AI-based tool that learns which colors you like and creates limitless palettes for you.",
        logo: "http://khroma.co/img/icons/favicon-32x32.png",
      },
    ],
  },
  {
    category: "Typography",
    tools: [
      {
        name: "Google Fonts",
        url: "https://fonts.google.com/",
        description:
          "A library of 1,000+ free licensed font families and APIs for conveniently using the fonts via CSS and Android.",
        logo: "https://fonts.gstatic.com/s/i/googlematerialicons/font_download/v6/white-24dp/1x/gm_font_download_white_24dp.png",
      },
      {
        name: "Adobe Fonts",
        url: "https://fonts.adobe.com/",
        description:
          "A library of high-quality fonts included with Creative Cloud subscriptions.",
        logo: "https://fonts.adobe.com/favicon.ico",
      },
      {
        name: "Fontjoy",
        url: "https://fontjoy.com/",
        description:
          "Helps designers choose the best font combinations by pairing fonts using deep learning.",
        logo: "https://fontjoy.com/favicon.ico",
      },
      {
        name: "Type Scale",
        url: "https://type-scale.com/",
        description:
          "A visual calculator for sizing typography based on the golden ratio and other relationships.",
        logo: "https://type-scale.com/favicon.ico",
      },
      {
        name: "Fonts Arena",
        url: "https://fontsarena.com/",
        description:
          "A curated typography website with a focus on free and open-source web fonts.",
        logo: "https://fontsarena.com/favicon.ico",
      },
    ],
  },
  {
    category: "Icon Resources",
    tools: [
      {
        name: "Font Awesome",
        url: "https://fontawesome.com/",
        description:
          "A massive and free icon set that includes icons for every need.",
        logo: "https://fontawesome.com/images/favicon/icon.svg",
      },
      {
        name: "Material Icons",
        url: "https://material.io/resources/icons/",
        description:
          "A collection of material design icons by Google in different formats.",
        logo: "https://material.io/favicon.ico",
      },
      {
        name: "Feather Icons",
        url: "https://feathericons.com/",
        description: "A collection of simply beautiful open-source icons.",
        logo: "https://feathericons.com/icons/feather.svg",
      },
      {
        name: "Iconscout",
        url: "https://iconscout.com/",
        description:
          "Provides high-quality icons, illustrations, and stock photos, both free and premium.",
        logo: "https://iconscout.com/favicon-32x32.png",
      },
      {
        name: "The Noun Project",
        url: "https://thenounproject.com/",
        description:
          "Features the world’s largest and most diverse collection of icons and stock photos.",
        logo: "https://thenounproject.com/favicon.ico",
      },
    ],
  },
  {
    category: "Image Resources",
    tools: [
      {
        name: "Unsplash",
        url: "https://unsplash.com/",
        description:
          "A website dedicated to sharing stock photography under the Unsplash license.",
        logo: "https://unsplash.com/favicon-32x32.png",
      },
      {
        name: "Pexels",
        url: "https://www.pexels.com/",
        description:
          "Provides high-quality photos and videos that are free to use under the Pexels license.",
        logo: "https://images.pexels.com/lib/api/pexels-white.png",
      },
      {
        name: "Adobe Stock",
        url: "https://stock.adobe.com/",
        description:
          "A service that provides designers and businesses with access to millions of high-quality curated assets.",
        logo: "https://stock.adobe.com/favicon.ico",
      },
      {
        name: "Shutterstock",
        url: "https://www.shutterstock.com/",
        description:
          "A global provider of stock photography, stock footage, stock music, and editing tools.",
        logo: "https://www.shutterstock.com/apple-touch-icon.png",
      },
      {
        name: "Dribbble",
        url: "https://dribbble.com/",
        description:
          "A self-promotion and social networking platform for digital designers and creatives.",
        logo: "https://cdn.dribbble.com/assets/favicon-32x32.png",
      },
    ],
  },
  {
    category: "Collaboration Tools",
    tools: [
      {
        name: "Miro",
        url: "https://miro.com/",
        description:
          "An online collaborative whiteboarding platform to bring teams together.",
        logo: "https://miro.com/favicon-32x32.png",
      },
      {
        name: "FigJam",
        url: "https://www.figma.com/figjam/",
        description:
          "An online whiteboard for teams to ideate and brainstorm together.",
        logo: "https://static.figma.com/app/icon/1/favicon.png",
      },
      {
        name: "Whimsical",
        url: "https://whimsical.com/",
        description:
          "A unified workspace for collaboration that includes flowcharts, wireframes, mind maps, and sticky notes.",
        logo: "https://whimsical.com/favicon-32x32.png",
      },
      {
        name: "Maze",
        url: "https://maze.co/",
        description:
          "A rapid testing platform that enables designers to collect both qualitative and quantitative usability data.",
        logo: "https://uploads-ssl.webflow.com/5f6e115196fe0d81ab05d018/604a737c2455b71c1063849d_favicon-32x32.png",
      },
      {
        name: "UserTesting",
        url: "https://www.usertesting.com/",
        description:
          "A platform that provides on-demand human insights to improve customer experiences.",
        logo: "https://www.usertesting.com/themes/ut_base_theme/favicon.ico",
      },
    ],
  },
  {
    category: "Animation Tools",
    tools: [
      {
        name: "After Effects",
        url: "https://www.adobe.com/products/aftereffects.html",
        description:
          "A digital visual effects, motion graphics, and compositing application.",
        logo: "https://www.adobe.com/content/dam/cc/icons/aftereffects.svg",
      },
      {
        name: "Lottie",
        url: "https://airbnb.design/lottie/",
        description:
          "An open-source animation file format to easily add animations to apps and websites.",
        logo: "https://airbnb.design/wp-content/themes/airbnb-dt/assets/images/icons/favicon-32x32.png",
      },
      {
        name: "Rive",
        url: "https://rive.app/",
        description:
          "A real-time interactive design tool for creating animated graphics.",
        logo: "https://cdn.rive.app/website/static/favicon/favicon-32x32.png",
      },
      {
        name: "Principle",
        url: "https://principleformac.com/",
        description: "Design animated and interactive user interfaces.",
        logo: "https://principleformac.com/assets/favicon/favicon-32x32.png",
      },
      {
        name: "Kite Compositor",
        url: "https://kiteapp.co/",
        description:
          "A macOS animation and prototyping application that lets you visually drag and drop layers.",
        logo: "https://kiteapp.co/kite/img/favicon.png",
      },
    ],
  },
  {
    category: "Design Inspiration",
    tools: [
      {
        name: "Behance",
        url: "https://www.behance.net/",
        description: "A platform to showcase and discover creative work.",
        logo: "https://a5.behance.net/static/2.164.0/images/apple-touch-icon.png",
      },
      {
        name: "Dribbble",
        url: "https://dribbble.com/",
        description:
          "A self-promotion and social networking platform for designers.",
        logo: "https://cdn.dribbble.com/assets/favicon-32x32.png",
      },
      {
        name: "Awwwards",
        url: "https://www.awwwards.com/",
        description:
          "A website that recognizes and promotes the talent and effort of the best web designers, developers, and agencies.",
        logo: "https://www.awwwards.com/apple-touch-icon-32x32.png",
      },
      {
        name: "Pinterest",
        url: "https://www.pinterest.com/",
        description:
          "A visual discovery engine for finding ideas like recipes, home and style inspiration, and more.",
        logo: "https://s.pinimg.com/webapp/style/images/favicon-32x32.png",
      },
      {
        name: "Muzli",
        url: "https://muz.li/",
        description:
          "Delivers daily design inspiration and news directly to your browser.",
        logo: "https://muz.li/apple-touch-icon.png",
      },
    ],
  },
  {
    category: "Design Handoff",
    tools: [
      {
        name: "Zeplin",
        url: "https://zeplin.io/",
        description:
          "Collaborate on designs with automated specs, assets, and code snippets.",
        logo: "https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-icon.png",
      },
      {
        name: "Avocode",
        url: "https://avocode.com/",
        description:
          "A platform for collaboration between designers and developers.",
        logo: "https://avocode.com/favicon.ico",
      },
      {
        name: "Inspect (Figma)",
        url: "https://www.figma.com/developers/api#inspect",
        description:
          "Provides detailed design information to developers directly from Figma.",
        logo: "https://static.figma.com/app/icon/1/favicon.png",
      },
      {
        name: "Abstract",
        url: "https://www.abstract.com/",
        description:
          "Helps teams version, manage, and collaborate on Sketch and Adobe XD files.",
        logo: "https://www.abstract.com/favicon.ico",
      },
      {
        name: "Sympli",
        url: "https://sympli.io/",
        description:
          "A platform for design handoff, version control, and collaboration.",
        logo: "https://sympli.io/favicon.ico",
      },
    ],
  },
  {
    category: "3D Design",
    tools: [
      {
        name: "Blender",
        url: "https://www.blender.org/",
        description:
          "A free and open-source 3D creation suite for modeling, rigging, animation, simulation, rendering, and more.",
        logo: "https://www.blender.org/favicon.ico",
      },
      {
        name: "Cinema 4D",
        url: "https://www.maxon.net/en/cinema-4d",
        description:
          "A professional 3D modeling, animation, simulation, and rendering software.",
        logo: "https://www.maxon.net/favicon-32x32.png",
      },
      {
        name: "Spline",
        url: "https://spline.design/",
        description:
          "A tool to create and collaborate on 3D designs directly in the browser.",
        logo: "https://spline.design/favicon-32x32.png",
      },
      {
        name: "Three.js",
        url: "https://threejs.org/",
        description:
          "A JavaScript library used to create and display animated 3D computer graphics in a web browser.",
        logo: "https://threejs.org/files/favicon.ico",
      },
      {
        name: "WebGL",
        url: "https://get.webgl.org/",
        description:
          "A JavaScript API for rendering high-performance interactive 3D and 2D graphics within any compatible web browser.",
        logo: "https://get.webgl.org/favicon.png",
      },
    ],
  },
  {
    category: "Accessibility Tools",
    tools: [
      {
        name: "Stark",
        url: "https://www.getstark.co/",
        description:
          "A suite of integrated accessibility tools for designers and developers.",
        logo: "https://www.getstark.co/icons/favicon-32x32.png",
      },
      {
        name: "Contrast",
        url: "https://usecontrast.com/",
        description:
          "A Mac app for checking the color contrast ratio of two colors.",
        logo: "https://usecontrast.com/assets/images/favicon-32x32.png",
      },
      {
        name: "Color Oracle",
        url: "https://colororacle.org/",
        description:
          "A free color blindness simulator for Windows, Mac, and Linux.",
        logo: "https://colororacle.org/favicon.ico",
      },
      {
        name: "Wave",
        url: "https://wave.webaim.org/",
        description: "A web accessibility evaluation tool developed by WebAIM.",
        logo: "https://wave.webaim.org/favicon.ico",
      },
      {
        name: "Axe",
        url: "https://www.deque.com/axe/",
        description: "An accessibility engine for automated Web UI testing.",
        logo: "https://www.deque.com/favicon.ico",
      },
    ],
  },
];

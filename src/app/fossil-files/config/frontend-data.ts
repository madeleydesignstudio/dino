export interface FrontendCategory {
  category: string;
  tools: { name: string; url: string; description: string; logo: string }[];
}

export const frontend_categories: FrontendCategory[] = [
  {
    category: "UI Frameworks & Libraries",
    tools: [
      {
        name: "React",
        url: "https://reactjs.org/",
        description:
          "React is a popular JavaScript library for building user interfaces, developed by Facebook. It utilizes a component-based architecture and a virtual DOM to efficiently render changes. Use React when building complex, interactive UIs that require efficient state management and performance. It's widely adopted, has a strong community, and integrates well with other libraries. Suitable for applications ranging from small projects to large-scale enterprise solutions.",
        logo: "https://reactjs.org/logo-og.png",
      },
      {
        name: "Next.js",
        url: "https://nextjs.org/",
        description:
          "Next.js is a React framework that enables server-side rendering (SSR) and static site generation (SSG) for React applications. It's ideal for building fast, SEO-friendly web applications. Use Next.js when you need features like automatic code splitting, routing, and image optimization. It excels in dynamic web projects where performance and SEO are critical, such as e-commerce sites and blogs.",
        logo: "https://nextjs.org/static/favicon/favicon-32x32.png",
      },
      {
        name: "Vue",
        url: "https://vuejs.org/",
        description:
          "Vue.js is a progressive JavaScript framework for building user interfaces. It is incrementally adoptable and focuses on the view layer, making it easy to integrate with other libraries or existing projects. Choose Vue for its simplicity, flexibility, and gentle learning curve, especially for small to medium-sized applications. Vue's reactivity system and component-based structure facilitate rapid development and maintainability.",
        logo: "https://vuejs.org/images/logo.png",
      },
      {
        name: "Svelte",
        url: "https://svelte.dev/",
        description:
          "Svelte is a compiler that turns declarative components into efficient JavaScript code that surgically updates the DOM. Unlike frameworks that run in the browser, Svelte shifts work into a compile step, resulting in smaller bundle sizes and faster performance. Use Svelte when you want highly performant applications with less boilerplate code. It's great for building responsive user interfaces with minimal overhead.",
        logo: "https://svelte.dev/svelte-logo-horizontal.svg",
      },
      {
        name: "Angular",
        url: "https://angular.io/",
        description:
          "Angular is a comprehensive platform and framework for building single-page client applications using HTML and TypeScript. Developed by Google, it offers a robust set of features like dependency injection, routing, and form validation out of the box. Use Angular for large-scale enterprise applications that require a structured framework and strong typing. It's suitable for teams that prefer convention over configuration and need extensive tooling support.",
        logo: "https://angular.io/assets/images/logos/angular/angular.png",
      },
    ],
  },
  {
    category: "CSS Solutions",
    tools: [
      {
        name: "Tailwind CSS",
        url: "https://tailwindcss.com/",
        description:
          "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup. It promotes rapid UI development and minimizes the need to write custom CSS. Use Tailwind when you want a consistent, design-system-like approach without predefined components. It's ideal for teams that prefer flexibility over predefined styles and want to reduce context switching between HTML and CSS.",
        logo: "https://tailwindcss.com/favicons/apple-touch-icon.png",
      },
      {
        name: "Styled Components",
        url: "https://styled-components.com/",
        description:
          "Styled Components is a library for React and React Native that allows you to use component-level styles in your application. It leverages tagged template literals and CSS to style your components dynamically. Use it when you prefer to keep styles scoped to components and write actual CSS in your JavaScript files. It promotes better organization and reusability of styles, especially in large applications.",
        logo: "https://styled-components.com/logo.png",
      },
      {
        name: "CSS Modules",
        url: "https://github.com/css-modules/css-modules",
        description:
          "CSS Modules are CSS files in which all class names and animation names are scoped locally by default. This avoids naming conflicts and allows for modular and maintainable styles. Use CSS Modules when you want isolated CSS without the overhead of a CSS-in-JS library. It's beneficial for projects that require straightforward CSS scoping with existing tooling like Webpack.",
        logo: "https://raw.githubusercontent.com/css-modules/logos/master/css-modules-logo.png",
      },
      {
        name: "Sass",
        url: "https://sass-lang.com/",
        description:
          "Sass (Syntactically Awesome Style Sheets) is a preprocessor scripting language that extends CSS with variables, mixins, nesting, and more. It compiles to CSS and helps in writing more maintainable and reusable styles. Use Sass when you need advanced features to organize and simplify your CSS, especially in larger projects with complex stylesheets.",
        logo: "https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png",
      },
      {
        name: "Less",
        url: "http://lesscss.org/",
        description:
          "Less is a backwards-compatible language extension for CSS that adds features like variables, mixins, functions, and nesting. It compiles into standard CSS and helps make styles more manageable. Less is useful when you're working with older projects or teams that prefer its syntax over Sass. It's also integrated into some frameworks like Bootstrap 3.",
        logo: "http://lesscss.org/public/graphics/less_logo.png",
      },
      {
        name: "PostCSS",
        url: "https://postcss.org/",
        description:
          "PostCSS is a tool for transforming CSS with JavaScript plugins. It allows for the use of future CSS syntax, linting, and other powerful features through its extensive plugin ecosystem. Use PostCSS when you need a flexible and extensible way to process CSS, enabling features like autoprefixing, variable substitution, and code optimization.",
        logo: "https://postcss.org/assets/postcss.876b91fb.svg",
      },
    ],
  },
  {
    category: "Build Tools",
    tools: [
      {
        name: "Vite",
        url: "https://vitejs.dev/",
        description:
          "Vite is a build tool that provides a rapid development experience by leveraging native ES modules and modern browser support. It offers instant server start and lightning-fast hot module replacement (HMR) with near-zero configuration. Use Vite for developing modern web applications quickly with minimal setup, especially when working with frameworks like Vue or React. It significantly improves development efficiency and productivity.",
        logo: "https://vitejs.dev/logo.svg",
      },
      {
        name: "Webpack",
        url: "https://webpack.js.org/",
        description:
          "Webpack is a powerful module bundler for JavaScript applications. It processes application dependencies and generates optimized bundles for production. Use Webpack when you need a highly customizable bundler for complex applications with specific needs. Its rich plugin ecosystem and configurability make it suitable for large projects that require fine-grained control over the build process.",
        logo: "https://webpack.js.org/assets/icon-square-big.svg",
      },
      {
        name: "Rollup",
        url: "https://rollupjs.org/",
        description:
          "Rollup is a module bundler for JavaScript that compiles small pieces of code into a larger bundle. It uses ES modules and is optimized for libraries. Use Rollup when building libraries or applications that require tree-shaking and minimal bundle sizes. It's excellent for creating reusable code that needs to be as small and efficient as possible.",
        logo: "https://rollupjs.org/logo.svg",
      },
      {
        name: "esbuild",
        url: "https://esbuild.github.io/",
        description:
          "esbuild is an extremely fast JavaScript bundler and minifier written in Go. It offers near-instantaneous builds and is ideal for development workflows where speed is crucial. Use esbuild when build speed is a priority, such as in large projects or monorepos. It can be integrated into other tools or used standalone, providing rapid feedback during development.",
        logo: "https://esbuild.github.io/favicon.svg",
      },
      {
        name: "Parcel",
        url: "https://parceljs.org/",
        description:
          "Parcel is a zero-configuration build tool that supports HTML, CSS, JavaScript, and more. It automatically detects and bundles dependencies without the need for a configuration file. Use Parcel for small to medium projects where ease of setup is important, and you want to get started quickly without dealing with complex build configurations.",
        logo: "https://parceljs.org/assets/parcel@2x.png",
      },
      {
        name: "Turbopack",
        url: "https://turbo.build/pack",
        description:
          "Turbopack is a Rust-based bundler optimized for speed and performance, developed by Vercel. It's designed to be an order of magnitude faster than existing bundlers, making it suitable for projects where developer experience and build speed are critical. Use Turbopack when you need the fastest development environment possible for large codebases or complex applications.",
        logo: "https://turbo.build/images/favicon-dark/apple-touch-icon.png",
      },
    ],
  },
  {
    category: "State Management",
    tools: [
      {
        name: "Redux",
        url: "https://redux.js.org/",
        description:
          "Redux is a predictable state container for JavaScript apps, often used with React. It centralizes application state and logic, making state mutations predictable with a unidirectional data flow. Use Redux when managing complex state interactions or when multiple components need to share state extensively. It's suitable for large applications that require consistent state management patterns.",
        logo: "https://redux.js.org/img/redux-logo-landscape.png",
      },
      {
        name: "Zustand",
        url: "https://zustand-demo.pmnd.rs/",
        description:
          "Zustand is a small, fast, and scalable state management solution using simplified flux principles. It offers a minimal API and supports React hooks without boilerplate. Use Zustand for straightforward state management tasks, especially in projects where simplicity and performance are priorities. It's ideal for small to medium-sized applications or specific parts of larger apps.",
        logo: "https://github.com/pmndrs/zustand/raw/main/logo.png",
      },
      {
        name: "MobX",
        url: "https://mobx.js.org/",
        description:
          "MobX is a simple, scalable state management solution that uses transparent functional reactive programming. It automatically tracks observable properties and efficiently updates the UI. Use MobX when you prefer an observable-based approach and desire minimal boilerplate. It's suitable for applications where state changes are straightforward and you want to focus on simplicity.",
        logo: "https://mobx.js.org/assets/mobx.png",
      },
      {
        name: "Recoil",
        url: "https://recoiljs.org/",
        description:
          "Recoil is a state management library for React developed by Facebook. It provides a way to share state across components using atoms and selectors, integrating seamlessly with React's concurrent features and Suspense. Use Recoil when you need fine-grained state management with asynchronous data capabilities in React applications.",
        logo: "https://recoiljs.org/img/recoil.png",
      },
      {
        name: "Jotai",
        url: "https://jotai.org/",
        description:
          "Jotai is a primitive and flexible state management library for React. It provides atoms for state and allows for minimalistic and atomic state management without unnecessary re-renders. Use Jotai when you want a simple, flexible, and scalable way to manage state, particularly in applications where performance and simplicity are essential.",
        logo: "https://jotai.org/img/logo.svg",
      },
      {
        name: "XState",
        url: "https://xstate.js.org/",
        description:
          "XState is a library for creating, interpreting, and executing finite state machines and statecharts. It helps manage complex state logic predictably and visually. Use XState when you need to model complex states and transitions explicitly, such as in multi-step processes, animations, and component lifecycles. It's beneficial for ensuring predictable behavior in complex applications.",
        logo: "https://xstate.js.org/favicon/favicon-32x32.png",
      },
    ],
  },
  {
    category: "Testing",
    tools: [
      {
        name: "Jest",
        url: "https://jestjs.io/",
        description:
          "Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It provides a zero-configuration testing experience, snapshot testing, and a powerful mocking library. Jest is widely used with React applications but works with any JavaScript project. Use Jest for unit and integration testing to ensure code reliability and prevent regressions.",
        logo: "https://jestjs.io/img/opengraph.png",
      },
      {
        name: "Vitest",
        url: "https://vitest.dev/",
        description:
          "Vitest is a Vite-native unit test framework that's fast and integrates deeply with Vite projects. It supports features like hot module replacement (HMR) in tests, instant test feedback, and a Jest-compatible API. Use Vitest when working with Vite to enjoy a speedy and seamless testing experience that leverages Vite's advantages.",
        logo: "https://vitest.dev/logo-shadow.webp",
      },
      {
        name: "Cypress",
        url: "https://www.cypress.io/",
        description:
          "Cypress is an end-to-end testing framework for web applications. It runs in the browser and provides a developer-friendly interface for writing, running, and debugging tests. Cypress allows you to write tests that simulate real user interactions, making it ideal for catching issues that unit tests might miss. Use Cypress for comprehensive integration and end-to-end testing.",
        logo: "https://www.cypress.io/icons/icon-96x96.png?v=fd144d7f30f05f48c5e33aa362d9c0ce",
      },
      {
        name: "Playwright",
        url: "https://playwright.dev/",
        description:
          "Playwright is a Node.js library for automating browsers (Chromium, Firefox, and WebKit) with a single API. It is used for end-to-end testing and supports modern web features, including cross-browser support and testing in headless mode. Use Playwright when you need cross-browser automation for testing complex web applications, ensuring consistent behavior across different environments.",
        logo: "https://playwright.dev/img/playwright-logo.svg",
      },
      {
        name: "Testing Library",
        url: "https://testing-library.com/",
        description:
          "Testing Library is a family of libraries for testing UI components in a way that resembles how users interact with them. It encourages good testing practices by focusing on user-centric interactions rather than implementation details. Use Testing Library to write maintainable tests that are less coupled to the code and more resilient to changes.",
        logo: "https://testing-library.com/img/octopus-64x64.png",
      },
      {
        name: "Storybook",
        url: "https://storybook.js.org/",
        description:
          "Storybook is an open-source tool for developing UI components in isolation. It provides a sandbox environment for building, documenting, and testing components independently of the main application. Use Storybook to improve component development workflow, enhance collaboration among team members, and create a living style guide for your UI components.",
        logo: "https://storybook.js.org/images/logos/icon-storybook.png",
      },
    ],
  },
  {
    category: "API Integration",
    tools: [
      {
        name: "REST",
        url: "https://restfulapi.net/",
        description:
          "REST (Representational State Transfer) is an architectural style for designing networked applications. It uses standard HTTP methods (GET, POST, PUT, DELETE) for communication and is stateless, making it scalable and simple. Use REST APIs when you need a straightforward, widely adopted way to communicate between client and server, suitable for most CRUD applications.",
        logo: "https://restfulapi.net/wp-content/uploads/rest.png",
      },
      {
        name: "GraphQL",
        url: "https://graphql.org/",
        description:
          "GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data. It allows clients to request exactly the data they need, reducing over-fetching and under-fetching. Use GraphQL when you need efficient data fetching for applications with complex data requirements, especially when working with multiple data sources.",
        logo: "https://graphql.org/img/logo.svg",
      },
      {
        name: "tRPC",
        url: "https://trpc.io/",
        description:
          "tRPC is an end-to-end type-safe RPC framework for building APIs, allowing you to easily create fully typesafe APIs without schemas or code generation. It leverages TypeScript's type system to ensure type safety between client and server. Use tRPC when working with TypeScript and you want seamless type safety and minimal overhead in your API layer.",
        logo: "https://trpc.io/img/logo.svg",
      },
      {
        name: "Apollo",
        url: "https://www.apollographql.com/",
        description:
          "Apollo is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. It includes a client and server implementation, offering features like caching, optimistic UI, and real-time updates via subscriptions. Use Apollo when building GraphQL applications and you require advanced features and tools to manage data efficiently.",
        logo: "https://www.apollographql.com/apollo-home.svg",
      },
      {
        name: "React Query",
        url: "https://tanstack.com/query/latest",
        description:
          "React Query is a data-fetching library for React that simplifies state management for asynchronous data. It provides caching, re-fetching, mutation APIs, and more. Use React Query when working with RESTful or GraphQL endpoints and you want to manage server state efficiently, reduce boilerplate, and improve the user experience with features like data synchronization and background updates.",
        logo: "https://react-query.tanstack.com/_next/static/media/logo.eb5da057.png",
      },
      {
        name: "SWR",
        url: "https://swr.vercel.app/",
        description:
          "SWR is a React Hooks library for data fetching developed by Vercel. It stands for 'stale-while-revalidate' and provides caching and revalidation mechanisms, making data fetching simple and efficient. Use SWR when you need to fetch data in React applications with automatic caching, request deduplication, and real-time data synchronization.",
        logo: "https://swr.vercel.app/swr-logo.svg",
      },
    ],
  },
  {
    category: "Development Tools",
    tools: [
      {
        name: "TypeScript",
        url: "https://www.typescriptlang.org/",
        description:
          "TypeScript is a strongly typed programming language that builds on JavaScript, adding static type definitions. It helps catch errors early, improves code maintainability, and enhances developer productivity with better tooling and IntelliSense. Use TypeScript when you want type safety and self-documenting code in JavaScript projects, especially in large codebases.",
        logo: "https://www.typescriptlang.org/icons/icon-144x144.png",
      },
      {
        name: "ESLint",
        url: "https://eslint.org/",
        description:
          "ESLint is a pluggable linting utility for JavaScript and TypeScript code, used to find and fix problems in your codebase. It enforces code consistency and helps prevent bugs by identifying problematic patterns. Use ESLint to enforce coding standards, maintain code quality, and adopt best practices in your projects.",
        logo: "https://eslint.org/img/logo.svg",
      },
      {
        name: "Prettier",
        url: "https://prettier.io/",
        description:
          "Prettier is an opinionated code formatter that supports multiple languages. It enforces a consistent style by parsing code and re-printing it with its own rules, wrapping code when necessary. Use Prettier to maintain uniform code formatting across your project, reducing code review overhead and eliminating debates over code style.",
        logo: "https://prettier.io/icon.png",
      },
      {
        name: "Husky",
        url: "https://typicode.github.io/husky/",
        description:
          "Husky is a tool that allows you to easily manage Git hooks, such as pre-commit or pre-push scripts. It helps automate tasks like linting, testing, or formatting code before code is committed. Use Husky to ensure code quality and enforce team standards by integrating automated checks into your Git workflow.",
        logo: "https://raw.githubusercontent.com/typicode/typicode.github.io/master/husky-logo.png",
      },
      {
        name: "lint-staged",
        url: "https://github.com/okonet/lint-staged",
        description:
          "lint-staged allows you to run linters on Git staged files, improving performance by only checking changed files. Use it in conjunction with Husky to automate code checks before commits without slowing down the development process. Use lint-staged to optimize your Git hooks by focusing on modified code, ensuring fast pre-commit checks.",
        logo: "https://raw.githubusercontent.com/okonet/lint-staged/master/logo.png",
      },
      {
        name: "commitlint",
        url: "https://commitlint.js.org/",
        description:
          "commitlint checks if your commit messages meet specified guidelines, ensuring a consistent commit history. It can be used with Husky to enforce commit message conventions like the Conventional Commits standard. Use commitlint to maintain a readable and standardized commit history, which is especially useful for generating changelogs and automation.",
        logo: "https://commitlint.js.org/assets/icon.svg",
      },
    ],
  },
  {
    category: "Performance & Optimization",
    tools: [
      {
        name: "Lighthouse",
        url: "https://developers.google.com/web/tools/lighthouse",
        description:
          "Lighthouse is an open-source, automated tool for improving the quality of web pages. It provides audits for performance, accessibility, progressive web apps, SEO, and more. Use Lighthouse to identify and fix issues that affect your site's user experience and performance, helping you build fast and accessible web applications.",
        logo: "https://developers.google.com/web/progressive-web-apps/images/pwa-lighthouse.png",
      },
      {
        name: "Web Vitals",
        url: "https://web.dev/vitals/",
        description:
          "Web Vitals are a set of metrics developed by Google to quantify user experience, focusing on loading performance, interactivity, and visual stability. These metrics include Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). Use Web Vitals to measure and optimize the key aspects of user experience on your site, ensuring high-quality performance.",
        logo: "https://web.dev/images/web-vitals-icon.svg",
      },
      {
        name: "Webpack Bundle Analyzer",
        url: "https://github.com/webpack-contrib/webpack-bundle-analyzer",
        description:
          "Webpack Bundle Analyzer is a plugin and CLI utility that represents bundle content as a convenient interactive zoomable treemap. Use it to analyze what's inside your bundle, find out what's contributing to the size of your bundles, and optimize them accordingly. It's essential for optimizing load times and improving application performance.",
        logo: "https://webpack.js.org/site-logo.1fcab817090e78435061.svg",
      },
      {
        name: "Performance Budget",
        url: "https://developers.google.com/web/fundamentals/performance/budgets",
        description:
          "A Performance Budget is a set of limits to certain values that affect site performance, like page weight, number of HTTP requests, or time to interactive. Use performance budgets to set and enforce standards for your web application's performance goals during development, helping teams make informed decisions that keep performance in check.",
        logo: "https://www.gstatic.com/devrel-devsite/prod/vda0d842b9fd8219a4d9ec277c068575dc0a9934dce54bd515371bf19a56eff6f/web/images/favicon.png",
      },
    ],
  },
  {
    category: "Deployment & Hosting",
    tools: [
      {
        name: "Vercel",
        url: "https://vercel.com/",
        description:
          "Vercel is a platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database. It offers features like serverless functions, edge caching, and instant deployments with Git integration. Use Vercel to deploy modern web applications with ease and speed, benefiting from a global CDN and automatic optimizations.",
        logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/57x57.png",
      },
      {
        name: "Netlify",
        url: "https://www.netlify.com/",
        description:
          "Netlify is a platform for automating modern web projects. It provides continuous deployment, serverless functions, form handling, and instant rollbacks. Use Netlify when you need an all-in-one solution to build, deploy, and manage static and dynamic websites with a focus on developer experience.",
        logo: "https://www.netlify.com/v3/static/favicon/favicon-32x32.png",
      },
      {
        name: "AWS Amplify",
        url: "https://aws.amazon.com/amplify/",
        description:
          "AWS Amplify is a set of tools and services that enables mobile and front-end web developers to build secure, scalable full-stack applications powered by AWS. It offers features like authentication, APIs, storage, and hosting integrated with AWS services. Use AWS Amplify when building applications that require tight integration with AWS infrastructure and services.",
        logo: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
      },
      {
        name: "GitHub Pages",
        url: "https://pages.github.com/",
        description:
          "GitHub Pages is a service that turns your GitHub repository into a static website. It supports custom domains, SSL, and seamless integration with GitHub workflows. Use GitHub Pages for hosting project documentation, personal blogs, or any static content directly from your GitHub repository without additional cost.",
        logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Firebase Hosting",
        url: "https://firebase.google.com/products/hosting",
        description:
          "Firebase Hosting is production-grade web content hosting for developers. It provides fast and secure hosting for web applications, static and dynamic content, and microservices. Features include global CDN, SSL certificates, and one-click rollbacks. Use Firebase Hosting when you need integrated hosting with other Firebase services like Firestore and Authentication for a seamless development experience.",
        logo: "https://firebase.google.com/favicon.ico",
      },
    ],
  },
];

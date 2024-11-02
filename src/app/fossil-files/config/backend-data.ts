export interface BackendCategory {
  category: string;
  tools: { name: string; url: string; description: string; logo: string }[];
}

export const backend_categories: BackendCategory[] = [
  {
    category: "Programming Languages",
    tools: [
      {
        name: "Python",
        url: "https://www.python.org/",
        description:
          "A programming language that lets you work quickly and integrate systems more effectively.",
        logo: "https://www.python.org/static/apple-touch-icon-144x144-precomposed.png",
      },
      {
        name: "Node.js",
        url: "https://nodejs.org/",
        description:
          "An open-source, cross-platform JavaScript runtime environment.",
        logo: "https://nodejs.org/static/images/favicons/apple-touch-icon.png",
      },
      {
        name: "Java",
        url: "https://www.java.com/",
        description:
          "A class-based, object-oriented programming language designed to have as few implementation dependencies as possible.",
        logo: "https://www.java.com/favicon.ico",
      },
      {
        name: "Go",
        url: "https://golang.org/",
        description:
          "An open-source programming language that makes it easy to build simple, reliable, and efficient software.",
        logo: "https://golang.org/lib/godoc/images/go-logo-blue.svg",
      },
      {
        name: "Rust",
        url: "https://www.rust-lang.org/",
        description:
          "A language empowering everyone to build reliable and efficient software.",
        logo: "https://www.rust-lang.org/static/images/favicon-32x32.png",
      },
    ],
  },
  {
    category: "Web Frameworks",
    tools: [
      {
        name: "Django",
        url: "https://www.djangoproject.com/",
        description:
          "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
        logo: "https://static.djangoproject.com/img/icon-touch.e4872c4da341.png",
      },
      {
        name: "Express.js",
        url: "https://expressjs.com/",
        description:
          "A minimal and flexible Node.js web application framework.",
        logo: "https://expressjs.com/images/favicon.png",
      },
      {
        name: "FastAPI",
        url: "https://fastapi.tiangolo.com/",
        description:
          "A modern, fast web framework for building APIs with Python 3.6+ based on standard Python type hints.",
        logo: "https://fastapi.tiangolo.com/img/icon-white.svg",
      },
      {
        name: "Spring Boot",
        url: "https://spring.io/projects/spring-boot",
        description:
          "Makes it easy to create stand-alone, production-grade Spring based Applications.",
        logo: "https://spring.io/images/favicon-32x32.png",
      },
      {
        name: "Laravel",
        url: "https://laravel.com/",
        description:
          "A web application framework with expressive, elegant syntax in PHP.",
        logo: "https://laravel.com/img/logomark.min.svg",
      },
    ],
  },
  {
    category: "Databases",
    tools: [
      {
        name: "PostgreSQL",
        url: "https://www.postgresql.org/",
        description:
          "An advanced, open-source relational database management system.",
        logo: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "MongoDB",
        url: "https://www.mongodb.com/",
        description:
          "A source-available cross-platform document-oriented database program.",
        logo: "https://www.mongodb.com/assets/images/global/favicon.ico",
      },
      {
        name: "MySQL",
        url: "https://www.mysql.com/",
        description: "An open-source relational database management system.",
        logo: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
      },
      {
        name: "Redis",
        url: "https://redis.io/",
        description:
          "An open-source, in-memory data structure store, used as a database, cache, and message broker.",
        logo: "https://redis.io/images/redis-white.png",
      },
      {
        name: "Elasticsearch",
        url: "https://www.elastic.co/elasticsearch/",
        description:
          "A distributed, RESTful search and analytics engine capable of addressing a growing number of use cases.",
        logo: "https://www.elastic.co/favicon.ico",
      },
    ],
  },
  {
    category: "API Development",
    tools: [
      {
        name: "REST APIs",
        url: "https://restfulapi.net/",
        description:
          "An architectural style for an application program interface (API) that uses HTTP requests to access and use data.",
        logo: "https://restfulapi.net/wp-content/uploads/rest.png",
      },
      {
        name: "GraphQL",
        url: "https://graphql.org/",
        description:
          "A query language for APIs and a runtime for fulfilling those queries.",
        logo: "https://graphql.org/img/logo.svg",
      },
      {
        name: "gRPC",
        url: "https://grpc.io/",
        description: "A high-performance, open-source universal RPC framework.",
        logo: "https://grpc.io/img/favicon.png",
      },
      {
        name: "WebSockets",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
        description:
          "A computer communications protocol providing full-duplex communication channels over a single TCP connection.",
        logo: "https://developer.mozilla.org/favicon-48x48.cbbd161b.png",
      },
      {
        name: "Swagger/OpenAPI",
        url: "https://swagger.io/",
        description:
          "Tools for implementing the OpenAPI specification for designing, building, documenting, and using RESTful web services.",
        logo: "https://swagger.io/swagger/media/assets/favicon-32x32.png",
      },
    ],
  },
  {
    category: "Authentication & Security",
    tools: [
      {
        name: "JWT",
        url: "https://jwt.io/",
        description:
          "JSON Web Tokens are an open, industry standard method for representing claims securely between two parties.",
        logo: "https://jwt.io/img/favicon/apple-icon-76x76.png",
      },
      {
        name: "OAuth 2.0",
        url: "https://oauth.net/2/",
        description:
          "An open standard for access delegation, commonly used for token-based authentication.",
        logo: "https://oauth.net/images/oauth-2-sm.png",
      },
      {
        name: "Passport.js",
        url: "http://www.passportjs.org/",
        description:
          "Simple, unobtrusive authentication for Node.js with support for over 500 authentication strategies.",
        logo: "http://www.passportjs.org/images/favicon.png",
      },
      {
        name: "Auth0",
        url: "https://auth0.com/",
        description:
          "A flexible, drop-in solution to add authentication and authorization services to applications.",
        logo: "https://cdn.auth0.com/styleguide/latest/lib/logos/img/favicon.png",
      },
      {
        name: "Keycloak",
        url: "https://www.keycloak.org/",
        description:
          "An open-source Identity and Access Management solution aimed at modern applications and services.",
        logo: "https://www.keycloak.org/resources/images/favicon.ico",
      },
    ],
  },
  {
    category: "Cloud Services",
    tools: [
      {
        name: "AWS",
        url: "https://aws.amazon.com/",
        description:
          "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.",
        logo: "https://a0.awsstatic.com/libra-css/images/site/touch-icon-ipad-144.png",
      },
      {
        name: "Google Cloud",
        url: "https://cloud.google.com/",
        description:
          "Google Cloud provides a suite of cloud computing services that runs on the same infrastructure that Google uses.",
        logo: "https://cloud.google.com/images/favicons/onecloud/apple-icon-57x57.png",
      },
      {
        name: "Azure",
        url: "https://azure.microsoft.com/",
        description:
          "Microsoft Azure is a cloud computing service created by Microsoft for building, testing, and managing applications and services.",
        logo: "https://azurecomcdn.azureedge.net/cvt-c2a791bf36cf0779ac582ea66f2f3d2dcec6666b738623476d3879799f7dc653/images/icon/apple-touch/57x57.png",
      },
      {
        name: "DigitalOcean",
        url: "https://www.digitalocean.com/",
        description:
          "Simplifies cloud computing so builders can spend more time creating software that changes the world.",
        logo: "https://www.digitalocean.com/favicon.ico",
      },
      {
        name: "Heroku",
        url: "https://www.heroku.com/",
        description:
          "A cloud platform as a service supporting several programming languages.",
        logo: "https://www.heroku.com/favicon.ico",
      },
    ],
  },
  {
    category: "DevOps & CI/CD",
    tools: [
      {
        name: "Docker",
        url: "https://www.docker.com/",
        description:
          "An open platform for developing, shipping, and running applications using containerization technology.",
        logo: "https://www.docker.com/favicon.ico",
      },
      {
        name: "Kubernetes",
        url: "https://kubernetes.io/",
        description:
          "An open-source system for automating deployment, scaling, and management of containerized applications.",
        logo: "https://kubernetes.io/images/favicon.png",
      },
      {
        name: "Jenkins",
        url: "https://www.jenkins.io/",
        description:
          "An open-source automation server used for continuous integration and continuous delivery.",
        logo: "https://www.jenkins.io/images/favicon.ico",
      },
      {
        name: "GitHub Actions",
        url: "https://github.com/features/actions",
        description:
          "Automate, customize, and execute software development workflows right in your repository.",
        logo: "https://github.githubassets.com/favicons/favicon.svg",
      },
      {
        name: "GitLab CI",
        url: "https://docs.gitlab.com/ee/ci/",
        description:
          "A continuous integration and delivery (CI/CD) solution fully integrated with GitLab.",
        logo: "https://about.gitlab.com/ico/favicon.png",
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
          "A delightful JavaScript Testing Framework with a focus on simplicity.",
        logo: "https://jestjs.io/img/favicon/favicon.ico",
      },
      {
        name: "PyTest",
        url: "https://docs.pytest.org/",
        description:
          "A mature full-featured Python testing tool that helps you write better programs.",
        logo: "https://docs.pytest.org/en/stable/_static/pytest1.png",
      },
      {
        name: "JUnit",
        url: "https://junit.org/",
        description:
          "A simple framework to write repeatable tests for Java programming language.",
        logo: "https://junit.org/junit5/assets/img/favicon.ico",
      },
      {
        name: "Postman",
        url: "https://www.postman.com/",
        description:
          "An API platform for building and using APIs, enabling collaborative environment to design, develop, and test APIs.",
        logo: "https://www.postman.com/favicon-32x32.png?v=23ad554f4d895efacafa2938a0c1833a",
      },
      {
        name: "K6",
        url: "https://k6.io/",
        description:
          "A developer-centric, modern load testing tool that provides an outstanding developer experience to test the performance of APIs.",
        logo: "https://k6.io/icons/icon-48x48.png?v=dc43f4a7796487d598082742e785d544",
      },
    ],
  },
  {
    category: "Monitoring & Logging",
    tools: [
      {
        name: "Prometheus",
        url: "https://prometheus.io/",
        description:
          "An open-source systems monitoring and alerting toolkit originally built at SoundCloud.",
        logo: "https://prometheus.io/assets/favicons/favicon-32x32.png",
      },
      {
        name: "Grafana",
        url: "https://grafana.com/",
        description:
          "An open-source platform for monitoring and observability that lets you query, visualize, alert on, and explore your metrics.",
        logo: "https://grafana.com/static/assets/img/fav32.png",
      },
      {
        name: "ELK Stack",
        url: "https://www.elastic.co/what-is/elk-stack",
        description:
          "A collection of three open-source products — Elasticsearch, Logstash, and Kibana — used for search, analysis, and visualization.",
        logo: "https://www.elastic.co/favicon-32x32.png",
      },
      {
        name: "New Relic",
        url: "https://newrelic.com/",
        description:
          "An observability platform that helps to visualize, analyze, and troubleshoot your entire software stack.",
        logo: "https://newrelic.com/favicon.ico",
      },
      {
        name: "Datadog",
        url: "https://www.datadoghq.com/",
        description:
          "A monitoring and security platform for cloud applications, integrating and automating infrastructure monitoring, APM, and log management.",
        logo: "https://www.datadoghq.com/favicon.ico",
      },
    ],
  },
  {
    category: "Message Brokers",
    tools: [
      {
        name: "RabbitMQ",
        url: "https://www.rabbitmq.com/",
        description:
          "An open-source message-broker software that originally implemented the Advanced Message Queuing Protocol (AMQP).",
        logo: "https://www.rabbitmq.com/img/favicon.png",
      },
      {
        name: "Apache Kafka",
        url: "https://kafka.apache.org/",
        description:
          "An open-source distributed event streaming platform used by thousands of companies for high-performance data pipelines, streaming analytics, etc.",
        logo: "https://kafka.apache.org/images/favicon.ico",
      },
      {
        name: "Redis Pub/Sub",
        url: "https://redis.io/topics/pubsub",
        description:
          "Redis supports the PUB/SUB pattern to send messages between clients through channels.",
        logo: "https://redis.io/images/favicon.png",
      },
      {
        name: "AWS SQS",
        url: "https://aws.amazon.com/sqs/",
        description:
          "A fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications.",
        logo: "https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico",
      },
      {
        name: "Apache ActiveMQ",
        url: "http://activemq.apache.org/",
        description:
          "An open-source, multi-protocol, Java-based message broker software.",
        logo: "http://activemq.apache.org/assets/img/favicon.ico",
      },
    ],
  },
  {
    category: "Caching",
    tools: [
      {
        name: "Redis",
        url: "https://redis.io/",
        description:
          "An open-source, in-memory data structure store, used as a database, cache, and message broker.",
        logo: "https://redis.io/images/redis-white.png",
      },
      {
        name: "Memcached",
        url: "https://memcached.org/",
        description:
          "A free and open-source, high-performance, distributed memory object caching system.",
        logo: "https://memcached.org/favicon.ico",
      },
      {
        name: "Varnish",
        url: "https://varnish-cache.org/",
        description:
          "An HTTP accelerator designed for content-heavy dynamic web sites.",
        logo: "https://varnish-cache.org/favicon.ico",
      },
      {
        name: "CDN",
        url: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/",
        description:
          "A Content Delivery Network distributes copies of content through a network of servers in different locations.",
        logo: "https://www.cloudflare.com/favicon.ico",
      },
      {
        name: "Browser Caching",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching",
        description:
          "The process of storing resources locally on a user's device to improve performance.",
        logo: "https://developer.mozilla.org/favicon-48x48.cbbd161b.png",
      },
    ],
  },
  {
    category: "ORM & Data Access",
    tools: [
      {
        name: "Prisma",
        url: "https://www.prisma.io/",
        description:
          "Next-generation Node.js and TypeScript ORM that turns your database into a fully type-safe API.",
        logo: "https://www.prisma.io/images/favicon-32x32.png",
      },
      {
        name: "Sequelize",
        url: "https://sequelize.org/",
        description:
          "A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server.",
        logo: "https://sequelize.org/favicon.ico",
      },
      {
        name: "SQLAlchemy",
        url: "https://www.sqlalchemy.org/",
        description:
          "The Python SQL Toolkit and Object Relational Mapper that gives application developers the full power and flexibility of SQL.",
        logo: "https://www.sqlalchemy.org/favicon.ico",
      },
      {
        name: "Hibernate",
        url: "https://hibernate.org/",
        description:
          "An object-relational mapping tool for the Java programming language.",
        logo: "https://hibernate.org/favicon.ico",
      },
      {
        name: "TypeORM",
        url: "https://typeorm.io/",
        description:
          "An ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, and Electron platforms.",
        logo: "https://typeorm.io/images/favicon.ico",
      },
    ],
  },
  {
    category: "Serverless",
    tools: [
      {
        name: "AWS Lambda",
        url: "https://aws.amazon.com/lambda/",
        description:
          "Run code without thinking about servers. Pay only for the compute time you consume.",
        logo: "https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico",
      },
      {
        name: "Azure Functions",
        url: "https://azure.microsoft.com/en-us/services/functions/",
        description:
          "An event-driven serverless compute platform that helps in running code on-demand without having to explicitly provision or manage infrastructure.",
        logo: "https://azurecomcdn.azureedge.net/cvt-7265904234d7488f47005e04d96a3f3943f4fd678dfab363b8e98f14a116cbbb/images/icon/apple-touch/57x57.png",
      },
      {
        name: "Google Cloud Functions",
        url: "https://cloud.google.com/functions",
        description:
          "A serverless execution environment for building and connecting cloud services.",
        logo: "https://cloud.google.com/images/favicons/onecloud/apple-icon-57x57.png",
      },
      {
        name: "Vercel Functions",
        url: "https://vercel.com/docs/concepts/functions/serverless-functions",
        description:
          "Allow you to write serverless functions with ease, which are served by Vercel's edge network.",
        logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/57x57.png",
      },
      {
        name: "Cloudflare Workers",
        url: "https://workers.cloudflare.com/",
        description:
          "A serverless application platform running on Cloudflare's global cloud network.",
        logo: "https://workers.cloudflare.com/resources/logo/logo.svg",
      },
    ],
  },
  {
    category: "Content Management",
    tools: [
      {
        name: "Strapi",
        url: "https://strapi.io/",
        description:
          "An open-source Headless CMS, enabling content-rich experiences to be created, managed, and exposed to any digital device.",
        logo: "https://strapi.io/assets/strapi-logo.png",
      },
      {
        name: "WordPress",
        url: "https://wordpress.org/",
        description:
          "A free and open-source content management system based on PHP and MySQL.",
        logo: "https://s.w.org/images/wmark.png",
      },
      {
        name: "Contentful",
        url: "https://www.contentful.com/",
        description:
          "An API-first content platform to build digital experiences and deliver content across channels.",
        logo: "https://www.contentful.com/favicon-32x32.png",
      },
      {
        name: "Sanity",
        url: "https://www.sanity.io/",
        description:
          "A platform for structured content that comes with an open-source editing environment.",
        logo: "https://www.sanity.io/static/images/favicons/favicon-32x32.png",
      },
      {
        name: "Directus",
        url: "https://directus.io/",
        description:
          "An instant REST+GraphQL API and intuitive app for managing content and data.",
        logo: "https://directus.io/uploads/favicon-32x32.png",
      },
    ],
  },
];

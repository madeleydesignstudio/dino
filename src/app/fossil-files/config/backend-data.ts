export interface BackendCategory {
  category: string;
  tools: string[];
}

export const backend_categories: BackendCategory[] = [
  {
    category: "Programming Languages",
    tools: ["Python", "Node.js", "Java", "Go", "Rust"],
  },
  {
    category: "Web Frameworks",
    tools: ["Django", "Express.js", "FastAPI", "Spring Boot", "Laravel"],
  },
  {
    category: "Databases",
    tools: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"],
  },
  {
    category: "API Development",
    tools: ["REST APIs", "GraphQL", "gRPC", "WebSockets", "Swagger/OpenAPI"],
  },
  {
    category: "Authentication & Security",
    tools: ["JWT", "OAuth 2.0", "Passport.js", "Auth0", "Keycloak"],
  },
  {
    category: "Cloud Services",
    tools: ["AWS", "Google Cloud", "Azure", "Digital Ocean", "Heroku"],
  },
  {
    category: "DevOps & CI/CD",
    tools: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "GitLab CI"],
  },
  {
    category: "Testing",
    tools: ["Jest", "PyTest", "JUnit", "Postman", "K6"],
  },
  {
    category: "Monitoring & Logging",
    tools: ["Prometheus", "Grafana", "ELK Stack", "New Relic", "Datadog"],
  },
  {
    category: "Message Brokers",
    tools: [
      "RabbitMQ",
      "Apache Kafka",
      "Redis Pub/Sub",
      "AWS SQS",
      "Apache ActiveMQ",
    ],
  },
  {
    category: "Caching",
    tools: ["Redis", "Memcached", "Varnish", "CDN", "Browser Caching"],
  },
  {
    category: "ORM & Data Access",
    tools: ["Prisma", "Sequelize", "SQLAlchemy", "Hibernate", "TypeORM"],
  },
  {
    category: "Serverless",
    tools: [
      "AWS Lambda",
      "Azure Functions",
      "Google Cloud Functions",
      "Vercel Functions",
      "Cloudflare Workers",
    ],
  },
  {
    category: "Content Management",
    tools: ["Strapi", "WordPress", "Contentful", "Sanity", "Directus"],
  },
];

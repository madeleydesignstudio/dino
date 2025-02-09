export interface JobPosition {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  salary?: string;
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];
  aboutTeam?: string;
  applicationProcess?: string[];
}

export const jobPositions: Record<string, JobPosition> = {
  "senior-frontend": {
    id: "senior-frontend",
    title: "Senior Frontend Engineer",
    location: "London, UK (Hybrid)",
    type: "Full-time",
    department: "Engineering",
    description:
      "Join our pack of code-loving dinosaurs to build exceptional user experiences using React, Next.js, and our prehistoric-powered UI components.",
    salary: "£70,000 - £90,000",
    responsibilities: [
      "Lead the development of complex frontend features using React and Next.js",
      "Mentor junior developers and conduct code reviews",
      "Collaborate with designers to implement pixel-perfect UI components",
      "Optimize application performance and accessibility",
      "Contribute to our internal UI component library",
      "Write clean, maintainable, and well-tested code",
    ],
    requirements: [
      "5+ years of experience with React and modern JavaScript",
      "Strong understanding of web performance optimization",
      "Experience with Next.js and TypeScript",
      "Knowledge of modern CSS practices and responsive design",
      "Understanding of SEO and web accessibility standards",
      "Experience with testing frameworks (Jest, React Testing Library)",
    ],
    benefits: [
      "Flexible working hours and hybrid work arrangement",
      "25 days annual leave + bank holidays",
      "Private health insurance",
      "Learning and development budget",
      "Regular team social events",
      "Stock options",
      "Gym membership",
    ],
    aboutTeam:
      "You'll be joining our engineering team of 12 passionate developers who love creating exceptional web experiences. We value collaboration, continuous learning, and maintaining a healthy work-life balance. Our team works closely with designers and product managers in an agile environment.",
    applicationProcess: [
      "Initial application review (1-2 days)",
      "Technical screening call (30 mins)",
      "Take-home coding challenge (4-6 hours)",
      "Technical interview with team leads (1 hour)",
      "Culture fit interview with the team (45 mins)",
      "Offer and negotiation",
    ],
  },
  "ui-designer": {
    id: "ui-designer",
    title: "UI/UX Designer",
    location: "London, UK (Hybrid)",
    type: "Full-time",
    department: "Design",
    description:
      "Help shape the future of digital experiences by creating intuitive and beautiful interfaces that make our clients' products roar.",
    salary: "£50,000 - £65,000",
    responsibilities: [
      "Create user-centered designs by understanding business requirements",
      "Create user flows, wireframes, prototypes and mockups",
      "Design UI elements and tools",
      "Develop UI style guides",
      "Ensure designs are accessible and inclusive",
    ],
    requirements: [
      "3+ years of UI/UX design experience",
      "Strong portfolio of design projects",
      "Proficiency in design tools (Figma, Adobe XD)",
      "Understanding of user research and usability principles",
      "Experience with design systems",
    ],
    benefits: [
      "Flexible working hours and hybrid work arrangement",
      "25 days annual leave + bank holidays",
      "Private health insurance",
      "Learning and development budget",
      "Regular team social events",
    ],
    aboutTeam:
      "Join our creative design team where innovation meets prehistoric charm. We're a collaborative group focused on creating exceptional user experiences.",
    applicationProcess: [
      "Portfolio review",
      "Initial screening call",
      "Design challenge",
      "Team interview",
      "Final interview with design lead",
    ],
  },
  "backend-engineer": {
    id: "backend-engineer",
    title: "Backend Software Engineer",
    location: "London, UK (Hybrid)",
    type: "Full-time",
    department: "Engineering",
    description:
      "Join our backend team to build robust, scalable systems that power our prehistoric platforms using Node.js, TypeScript, and cloud technologies.",
    salary: "£65,000 - £85,000",
    responsibilities: [
      "Design and implement scalable backend services and APIs",
      "Work with databases and optimize query performance",
      "Implement security best practices and data protection measures",
      "Collaborate with frontend teams to integrate APIs",
      "Participate in system architecture discussions",
      "Monitor and optimize application performance",
    ],
    requirements: [
      "4+ years of backend development experience",
      "Strong knowledge of Node.js and TypeScript",
      "Experience with REST APIs and GraphQL",
      "Familiarity with SQL and NoSQL databases",
      "Understanding of cloud services (AWS/Azure/GCP)",
      "Experience with microservices architecture",
    ],
    benefits: [
      "Flexible working hours and hybrid work arrangement",
      "25 days annual leave + bank holidays",
      "Private health insurance",
      "Learning and development budget",
      "Regular team social events",
      "Stock options",
    ],
    aboutTeam:
      "Our backend team consists of 8 talented engineers who love solving complex problems and building reliable systems. We embrace modern technologies and best practices while maintaining a supportive and collaborative environment.",
    applicationProcess: [
      "Initial application review (1-2 days)",
      "Technical screening call (45 mins)",
      "System design interview (1 hour)",
      "Coding interview (1.5 hours)",
      "Team culture fit interview (45 mins)",
      "Offer and negotiation",
    ],
  },
  "product-manager": {
    id: "product-manager",
    title: "Senior Product Manager",
    location: "London, UK (Hybrid)",
    type: "Full-time",
    department: "Product",
    description:
      "Lead the evolution of our products by combining data-driven insights with prehistoric instincts to deliver exceptional user experiences.",
    salary: "£75,000 - £95,000",
    responsibilities: [
      "Define product strategy and roadmap",
      "Conduct market research and competitive analysis",
      "Work closely with engineering and design teams",
      "Gather and analyze user feedback",
      "Prioritize features and manage product backlog",
      "Present product metrics and KPIs to stakeholders",
    ],
    requirements: [
      "5+ years of product management experience",
      "Strong analytical and problem-solving skills",
      "Experience with agile methodologies",
      "Excellent communication and presentation skills",
      "Track record of successful product launches",
      "Technical background preferred",
    ],
    benefits: [
      "Flexible working hours and hybrid work arrangement",
      "25 days annual leave + bank holidays",
      "Private health insurance",
      "Learning and development budget",
      "Regular team social events",
      "Stock options",
      "Annual product conference allowance",
    ],
    aboutTeam:
      "Join our product team of innovative thinkers who bridge the gap between business needs and user satisfaction. We value data-driven decision making and user-centric design principles.",
    applicationProcess: [
      "Initial application review",
      "Screening call with HR",
      "Product case study presentation",
      "Interview with product leadership",
      "Team fit interviews",
      "Final interview with CEO",
    ],
  },
  "devops-engineer": {
    id: "devops-engineer",
    title: "DevOps Engineer",
    location: "London, UK (Hybrid)",
    type: "Full-time",
    department: "Engineering",
    description:
      "Help us maintain and evolve our infrastructure, ensuring our prehistoric systems run smoothly in the modern cloud era.",
    salary: "£60,000 - £80,000",
    responsibilities: [
      "Manage and improve CI/CD pipelines",
      "Maintain cloud infrastructure using IaC",
      "Monitor system performance and reliability",
      "Implement security best practices",
      "Automate deployment processes",
      "Provide on-call support when needed",
    ],
    requirements: [
      "3+ years of DevOps experience",
      "Strong knowledge of AWS or similar cloud platforms",
      "Experience with Docker and Kubernetes",
      "Proficiency in scripting languages (Python, Bash)",
      "Understanding of monitoring and logging tools",
      "Experience with Infrastructure as Code (Terraform)",
    ],
    benefits: [
      "Flexible working hours and hybrid work arrangement",
      "25 days annual leave + bank holidays",
      "Private health insurance",
      "Learning and development budget",
      "Regular team social events",
      "Stock options",
      "On-call compensation",
    ],
    aboutTeam:
      "Our DevOps team is a small but mighty group of 4 engineers who keep our systems running smoothly. We believe in automation, continuous improvement, and maintaining a healthy work-life balance.",
    applicationProcess: [
      "Initial application review",
      "Technical screening call",
      "Infrastructure design challenge",
      "Technical interview",
      "Team culture interview",
      "Offer discussion",
    ],
  },
};

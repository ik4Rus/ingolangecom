"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const skills = [
  {
    name: "Python",
    text: "Python is my one of my two primary language for backend work, such as APIs, ETL, and scraping, particularly in the realm of Natural Language Processing (NLP). I`ve built the current MARA product using Python APIs and devised custom language models within Python.",
    logo: "/logos/skills/PythonLogo.png",
  },
  {
    name: "TS",
    text: "The second language for backend work whereby I mostly develop NestJS APIs. I really like that I can use TypeScript for both front-end and back-end development and combine both in a monorepo.",
    logo: "/logos/skills/TSLogo.png",
  },
  {
    name: "R",
    text: "During my parallel studies in Mathematics and Economics, my carrer as a Data Scientist started using R focusing on non-parametric statistics, time series analysis and optimization. During my McKinsey times I continued using it for different clients and part of the very first MARA product were build in it. I try to still use it from time to time to keep my skills sharp.",
    logo: "/logos/skills/RLogo.png",
  },
  {
    name: "React",
    text: "React is my main framework when it comes to developing web applications. Developing our MARA SaaS application used by hundreds of customers on a daily basis, I gained substantial experience with React and Frontend Development in general.",
    logo: "/logos/skills/ReactLogo.png",
  },
  {
    name: "React Native",
    text: "With WPF Coaching I developed a mobile application that is live in the App Store (https://apps.apple.com/de/app/wpf-coaching/id6477957146?l=en-GB) and Google Play Store (https://play.google.com/store/apps/details?id=com.ofm.coachingcentral). It is an community app with a focus on AI and automation in the backend.",
    logo: "/logos/skills/ReactNativeLogo.png",
  },
  {
    name: "SQL",
    text: "As a data science professional, writing SQL queries comes naturally to me. I`ve also honed my skills in complex query optimization, data structure development, and database setup. PostgreSQL is my database of choice, but I`ve also employed MySQL, Athena, and BigQuery over time.",
    logo: "/logos/skills/PostgresLogo.png",
  },
  {
    name: "NoSQL",
    text: "I acknowledge the performance benefits of NoSQL databases for storing large document collections. With MARA, I`ve developed substantial experience with DynamoDB, from optimizing data structures to introducing and enhancing indexes.",
    logo: "/logos/skills/DynamoLogo.png",
  },
  {
    name: "Docker",
    text: "My mantra - Everything, no matter how small, should be dockerized. I`ve deployed many services using Docker and have extensively explored how to streamline image building, secret handling, and size reduction, particularly for backend services.",
    logo: "/logos/skills/DockerLogo.png",
  },
  {
    name: "Git",
    text: "GitLab is certainly on my tool belt, but my expertise truly shines with GitHub. I`ve constructed most of my CI/CD workflows with GitHub Actions (encompassing secret handling, building, testing, linting, and deployment), and that`s also where I manage my development team for MARA.",
    logo: "/logos/skills/GitLogo.png",
  },
  {
    name: "Sentry",
    text: "In my view, centralized error logging is critical when working with microservices and bifurcating backend and frontend. Sentry proved to be an asset, making the debugging process much smoother with its excellent context logging features. It empowered me to identify and resolve issues swiftly.",
    logo: "/logos/skills/SentryLogo.png",
  },
  {
    name: "HTML",
    text: "HTML serves as the foundation for my frontend development, but it`s also vital for the scraping tasks I`ve handled. Nowadays, I write a majority of my HTML directly within React as part of TSX.",
    logo: "/logos/skills/HTMLLogo.png",
  },

  {
    name: "Tailwind",
    text: "I`ve acquired expertise in Tailwind CSS, which is now my fastest means of designing new pages. Literature like `Refactoring UI` and authors such as Adam Wathan and Steve Schoger have also significantly informed my understanding of user interfaces and UX design approaches.",
    logo: "/logos/skills/TailwindLogo.png",
  },
  {
    name: "Figma",
    text: "I believe in the power of using platforms like Figma to mock up designs to demonstrate to stakeholders before beginning page development. I`m also fond of using a whiteboard or paper and pen for brainstorming new UI ideas before delving into the details.",
    logo: "/logos/skills/FigmaLogo.png",
  },
  {
    name: "AWS",
    text: "Having built two SaaS products with MARA, I`ve gained considerable experience in infrastructure, particularly within AWS. I`m familiar with numerous services like Lambda, ECS, EC2, ECR, S3, Aurora, Athena, RDS, DynamoDB, CloudWatch, Amplify, SQS, EFS, SQS, API Gateway, Cognito and many others. I rely on the AWS SDK to orchestrate these services.",
    logo: "/logos/skills/AWSLogo.png",
  },
  {
    name: "Cloud",
    text: "Being a start-up grants the boon of receiving free credits from major cloud providers. Consequently, I`ve leveraged databases, APIs from GCP and container services and language models from Azure.",
    logo: "/logos/skills/GitLogo.png",
  },
  {
    name: "More",
    text: "Over the years I gained experience in many more technologies and collected a long list of random skills like SPSS, STATA, Alteryx, MATLAB, Tableau, Grafana or C. I`m not up to speed with all of them, but they those experiences help me to quickly adapt to new technologies and understand the key principals.",
    logo: "/logos/skills/GitLogo.png",
  },
];

function Skills() {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 2.2 }}
      className="w-full bg-black grid grid-cols-2 mt-12 p-8 rounded-lg"
    >
      <div className="pr-12">
        <div className="grid grid-cols-4 gap-12">
          {skills.map((skill, index) => (
            <button
              key={`skill-overview-${index}`}
              onClick={() => setActiveSkillIndex(index)}
              className={twMerge(
                "w-20 h-20 rounded-lg hover:scale-105 flex items-center justify-center transition-all duration-300 ease-in-out",
                index === activeSkillIndex ? "bg-primary" : "bg-white"
              )}
            >
              {skill?.logo && <img src={skill.logo} className="h-12" />}
            </button>
          ))}
        </div>
      </div>
      <div className="text-justify">
        My toolkit encompasses a blend of front-end and back-end languages,
        fortified with a robust understanding of cloud providers, serverless
        infrastructures, and both SQL and NoSQL databases. While a selection of
        my favored technologies can be found on the left, over the years a
        worked with a wide range of different tools and technologies. An
        detailed overview of my skills can be found on the skills page or in my
        CV. For example: <br />
        <span className="text-primary font-bold">
          {skills[activeSkillIndex].name}
        </span>
        : {skills[activeSkillIndex].text}
      </div>
    </motion.div>
    // <div className="w-full bg-opacity-90 bg-black grid grid-cols-2 mt-12 p-8 rounded-lg">

    // </div>
  );
}

export default Skills;

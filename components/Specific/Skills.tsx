"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const skills = [
  {
    name: "Python",
    text: "Python is one of my two main languages for backend work such as APIs, ETL and scraping. The complete backend of MARA consists of Python FastAPIs called by our Frontends as well as by platform customers who integrate our language models via APIs into their platforms. Beyond that, Python is my primary language for NLP (MARA, Ph.D. etc.).",
    logo: "/logos/skills/PythonLogo.png",
  },
  {
    name: "TS",
    text: "TS is the second language for back-end work, where I mainly develop NestJS APIs. The main advantage for me is that I can use TypeScript for both front-end and back-end development. Using a monorepo, I usually use turborepo, I can have everything in one repository and deploy it separately.",
    logo: "/logos/skills/TSLogo.png",
  },
  {
    name: "R",
    text: "During my parallel studies in mathematics and economics, I started my career as a data scientist with R, focusing on non-parametric statistics, time series analysis and optimization. I continued to use it for various clients during my time at McKinsey, and part of the very first MARA product was developed with it. During the launch of MARA, I did a lot with R using custom packages and an RShiny frontend. I now use it less, but still try to use it from time to time to keep my skills up to date.",
    logo: "/logos/skills/RLogo.png",
  },
  {
    name: "React",
    text: "React is my main framework when it comes to web application development. Through the development of our MARA SaaS application, which is used by hundreds of paying customers every day, I have gained extensive experience with React and frontend development in SaaS services in general. My standard approach is Next.js and Tailwind for web frontends.",
    logo: "/logos/skills/ReactLogo.png",
  },
  {
    name: "React Native",
    text: "Using React Native and Expo I created WPF Coaching, which is available in the App Store (https://apps.apple.com/de/app/wpf-coaching/id6477957146?l=en-GB) and Google Play Store (https://play.google.com/store/apps/details?id=com.ofm.coachingcentral). It is a community app with a focus on AI and automation in the backend. React Native is perfect for me, as the stack with NativeWind is very similar to Web, where I have significantly more experience. ",
    logo: "/logos/skills/ReactNativeLogo.png",
  },
  {
    name: "SQL",
    text: "With a background as a Data Scientist, I have a lot of experience in SQL analyses. During MARA I honed my skills in optimizing complex queries, developing data structures and setting up databases. PostgreSQL is my preferred database, but I have also used MySQL, Athena and BigQuery over the years. For my applications, I use Prisma (TS) or alambic (Python) for migration management, among other things.",
    logo: "/logos/skills/PostgresLogo.png",
  },
  {
    name: "NoSQL",
    text: "With MARA, I gained extensive experience with DynamoDB, as we used it for faster queries for reviews in particular. I set up the database back then and worked a lot with it at the beginning, from optimizing data structures to introducing and improving indexes. In summary, I am familiar with NoSQL and in particular how the data should be structured, but I use SQL for most things.",
    logo: "/logos/skills/DynamoLogo.png",
  },
  {
    name: "Docker",
    text: "I try to dockerize all my services in the backend because it's easier to switch cloud providers in the long term and you don't have the `it works on my machine` problem. Especially when deploying very large custom language models, which I wrote, I have dealt a lot with how to optimize the images. Since my go to approach in the backend is to dockerize the FastAPI or NestJS API and then deploy it, I have my workflow for CI/CD and setting secrets for the different stages.",
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
      <div>
        <h2 className="text-2xl mb-4 lg:text-4xl">
          My <span className="text-primary">skills</span>
        </h2>
        <p className="text-justify">
          My toolkit encompasses a blend of front-end and back-end languages,
          fortified with a robust understanding of cloud providers, serverless
          infrastructures, and both SQL and NoSQL databases. While a selection
          of my favored technologies can be found on the left, over the years a
          worked with a wide range of different tools and technologies. An
          detailed overview of my skills can be found on the skills page or in
          my CV. For example:{" "}
        </p>
        <p className="pt-4">
          <span className="text-primary font-bold">
            {skills[activeSkillIndex].name}
          </span>
          : {skills[activeSkillIndex].text}
        </p>
      </div>
    </motion.div>
  );
}

export default Skills;

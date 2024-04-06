"use client";
import Typist from "react-typist-component";

import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 2.2 }}
      className="w-full bg-black grid grid-cols-2 mt-12 p-8 rounded-lg"
    >
      <div className="text-justify">
        <div className="text-2xl mb-4 pt-8 lg:text-4xl">
          Hi, I{"'"}m Ingo
          <div>
            a{" "}
            <span className="text-primary">
              <Typist
                typingDelay={100}
                cursor={<span className="cursor">|</span>}
                loop={true}
              >
                Backend Developer
                <Typist.Delay ms={1000} />
                <Typist.Backspace count={17} />
                <Typist.Delay ms={300} />
                Data Scientist
                <Typist.Delay ms={1000} />
                <Typist.Backspace count={14} />
                <Typist.Delay ms={300} />
                Frontend Developer
                <Typist.Delay ms={1000} />
                <Typist.Backspace count={18} />
                <Typist.Delay ms={300} />
                Founder & CTO
                <Typist.Delay ms={1000} />
                <Typist.Backspace count={10} />
                <Typist.Delay ms={300} />
              </Typist>
            </span>
          </div>
        </div>
        I{"'"}m a software developer and since 4+ years{" "}
        <span className="font-bold text-primary">founder and CTO</span> of MARA,
        a <span className="font-bold text-primary">NLP startup </span> to
        revolutionize customer feedback in the hotel industry. Building two
        software products, I had the opportunity to look deep into every aspect
        of software development, from Backend to Frontend, from Devops to Data
        Science. <br />
        With a <span className="font-bold text-primary">Ph.D.</span> from the
        Karlsruhe Institute for Technology, I have expanded my theoretical
        knowledge in the field of{" "}
        <span className="font-bold text-primary">NLP and Machine Learning</span>
        .<br />
        Before founding I worked as{" "}
        <span className="font-bold text-primary">Data Scientist</span> for{" "}
        <span className="font-bold text-primary">McKinsey & Company</span>,
        developing ML models across diverse industries after my studies of
        Mathematics and Ecomomics.
        <br />I{"'"}m passionate about building software that is elegant,
        simple, and performant. I{"'"}m always interested in technical
        discussions and knowledge exchange, so feel free to reach out to me.
      </div>
      <div className="h-[500px]">
        <Spline scene="https://prod.spline.design/6dEhA4rlX2dMSyRW/scene.splinecode" />
      </div>
    </motion.div>
  );
}

export default Hero;

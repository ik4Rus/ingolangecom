"use client";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav className="flex items-center flex-grow">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        className="w-full flex items-center rounded-lg mt-6 px-4 py-2 bg-opacity-90 bg-black"
      >
        <div className="flex flex-row w-full">
          <div className="flex flex-row gap-2.5 items-center">
            <img
              src="/logos/ingo_lange_logo.png"
              className="w-14 h-14"
              alt="Logo of the website"
            />
            <div>
              <h1 className="text-xl font-bold">Dr. Ingo Lange</h1>
              <h2 className="text-md">
                Let{"'"}s <span className="text-primary font-bold">ship</span>{" "}
                together
              </h2>
            </div>
          </div>
          <div className="flex flex-grow items-center justify-end gap-4">
            <div className="hover:text-primary">CV</div>
            <div className="hover:text-primary">Skills</div>
            <div className="hover:text-primary">Blog</div>
            <div className="hover:text-primary">Contact</div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;

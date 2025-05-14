import React from "react";
import { motion } from "framer-motion";
const textVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const subtextVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { delay: 1, duration: 0.5 } },
  hover: { scale: 1.1 },
};

const Home = () => {
  return (
   
      <div className="relative text-slate h-screen w-full bg-cover bg-center bg-no-repeat t" style={{ backgroundImage: "url('/bg.jpg')" }}>
        
       
        <div className="absolute inset-0 bg-black/20 z-0" />
  
  
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          

          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl text-rose-200/90 shadow:black md:text-5xl font-bold"
          >
            STAY SAFE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 text-lg md:text-xl"
          >
            Online any URL before you click!
          </motion.p>
  

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8 px-6 py-3 bg-cyan-300/50 text-slate font-bold rounded-xl shadow-lg hover:bg-rose-200/60 transition duration-300"
          >
            GET STARTED
          </motion.button>
        </div>
      </div>
    );

};

export default Home;

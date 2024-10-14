'use client';
import { motion } from "framer-motion";
export default function AnimatedLoading(){
    return(
        <div>
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M 20 50 C 20 30, 40 30, 50 50 S 80 70, 80 50 C 80 30, 60 30, 50 50 S 20 70, 20 50 Z"
      fill="none"
      stroke='#cfcfd9'></path>
      <motion.path
        d="M 20 50 C 20 30, 40 30, 50 50 S 80 70, 80 50 C 80 30, 60 30, 50 50 S 20 70, 20 50 Z"
        fill="none"
        stroke="#295396"
        strokeWidth="2"
        strokeDasharray="20 165"  
        strokeDashoffset={0}
        animate={{
          strokeDashoffset: [0, -185], 
        }}
        transition={{
          duration: 2,   
          ease: [0.50, -0.40, 0.24, 1.20], 
          repeat: Infinity 
        }}
      />
    </svg>   
        </div>
    );
}
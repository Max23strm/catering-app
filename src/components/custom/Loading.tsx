"use client"
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Loading = ({ text = 'Loading', textSize = 'text-xl'} : {text: string, textSize: string} ) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
      <div className="flex space-x-1 justify-center">
        <AnimatePresence>
          {text.split('').map((char, i) => (
            <motion.p
              ref={ref}
              key={i}
              initial={{ opacity: 0, x: -5 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              exit="hidden"
              transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity, repeatType: "loop", ease:'easeIn' }}
              className={`${textSize} text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]`}
            >
              {char === ' ' ? <span>&nbsp;</span> : char}
            </motion.p>
          ))}
        </AnimatePresence>
      </div>
    );
}

export default Loading
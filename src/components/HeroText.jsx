import { FlipWords } from "./FlipWords"
import {motion} from "motion/react"

const HeroText = () => {
    const words = ["Secure", "Modern", "Scaleable"];
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    }
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/* Desktop */}
        <div className="flex-col hidden md:flex c-space ">
            <motion.h1 className="text-4xl font-medium"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{delay: 1}}
            >Hi i'm Ahmad</motion.h1>
            <div className="flex flex-col items-start">
                <motion.p
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay: 1.2}}
                className="text-5xl font-medium text-neutral-300">A Developer <br/> dedicated to crafting</motion.p>
                <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay: 1.5}}
                ><FlipWords words={words} className="font-black text-white text-8xl"/></motion.div>
                <motion.p
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay: 1.8}}
                className="text-4xl font-medium text-neutral-300">Web Solutions</motion.p>
            </div>
        </div>
        {/* Mobile */}
        <div className="flex flex-col space-y-6 md:hidden">
            <motion.p className="text-4xl font-medium"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay: 1}}>Hi i'm Ahmad</motion.p>
            <div>
                <motion.p className="text-5xl font-black text-neutral-300"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay: 1.2}}>Building</motion.p>
                <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay: 1.5}}>
                    <FlipWords words={words} className="text-6xl font-bold text-white"/>
                </motion.div>
                <motion.p className="text-4xl font-black text-neutral-300"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay: 1.8}}>Web Application</motion.p>
            </div>
        </div>
    </div>
  )
}

export default HeroText

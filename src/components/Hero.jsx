import React from 'react'
import Typewriter from 'typewriter-effect'

import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <>
      <section className={`relative mx-auto h-screen w-full`}>
        <div
          className={`absolute inset-0 top-[100px] mx-auto  max-w-7xl sm:top-[150px] ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex gap-3">
            <div className="flex flex-col items-center justify-center">
              <span className="block h-6 w-6 rounded-full bg-[#915eff]"></span>
              <span className="violet-gradient block h-48 w-1 sm:h-80"></span>
            </div>
            <div className="overflow-hidden">
              <h1 className={styles.heroHeadText}>
                Hi! I'm <span className="text-[#915eff]">Alex</span>
              </h1>
              <div className={`${styles.heroSubText}`}>
                I develop and design
                <span className="font-semibold text-[#915eff]">
                  <Typewriter
                    options={{
                      strings: ['3D visuals', 'user interfaces', 'and web applications'],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 'natural',
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <ComputersCanvas />
        <div className="absolute bottom-[20dvw] xxs:bottom-[10dvh] flex w-full items-center justify-center">
          <a href="#about" className="flex h-[60px] w-[40px] rounded-2xl border-4 border-black dark:border-secondary">
            <motion.div
              animate={{
                y: [0, 32, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5
              }}
              className="h-[20px] mx-auto w-[20px] rounded-full bg-black dark:bg-secondary"
            />
          </a>
        </div>
      </section>
    </>
  )
}

export default Hero

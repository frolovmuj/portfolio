import React from 'react'
import { motion } from 'framer-motion'

import AboutItem from './AboutItem'
import HocWrapper from '../../hoc/HocWrapper'

import { styles } from '../../styles'

import { services, aboutText } from '../../consts'
import { fadeIn } from '../../utils/motion'

const About = () => {
  return (
    <div className="mt-[-50px] xxs:mt-0" id="about">
      <motion.div variants={fadeIn('', '', 0.5, 1)}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>About me</h2>
        <motion.p
          variants={fadeIn('right', 'spring', 2 * 0.5, 0.75)}
          className="mt-4 max-w-2xl text-[18px] text-secondary"
        >
          {aboutText.text}
        </motion.p>
      </motion.div>
      <div className="mt-12 flex flex-row flex-wrap justify-start gap-7">
        {services.map((service, index) => (
          <AboutItem key={index} {...service} index={index} />
        ))}
      </div>
    </div>
  )
}

export default HocWrapper(About, 'about')

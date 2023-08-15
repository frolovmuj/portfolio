import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { fadeIn } from '../../utils/motion'

const AboutItem = ({ title, icon, index }) => {
  return (
    <Tilt
      scale={1.05}
      transitionSpeed={1500}
      tiltReverse={true}
      perspective="780"
      tiltEnable
      className=" w-full xs:w-[350px]"
    >
      <motion.div
        variants={fadeIn(index % 2 === 0 ? 'left' : 'right', 'spring', index * 0.7, 0.75)}
        className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card"
      >
        <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] dark:bg-tertiary px-12 py-5">
          <img width={60} height={60} src={icon} alt="icon" />
          <h3 className="my-3 max-w-[150px] text-center text-2xl font-bold">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

export default AboutItem

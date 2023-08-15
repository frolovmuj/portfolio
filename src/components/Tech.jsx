import { motion } from 'framer-motion'
import { slideIn, textVariant, fadeIn } from '../utils/motion'
import { styles } from '../styles'

import { BallCanvas } from './canvas'
import { technologies } from '../consts/index'

import HocWrapper from '../hoc/HocWrapper'

const Tech = () => {
  return (
    <div>
      <motion.p variants={textVariant(0.2)} className={`${styles.sectionSubText}`}>
        The technologies I use most often in my projects
      </motion.p>
      <motion.h2
        variants={fadeIn('left', 'spring', 0.3)}
        className={`${styles.sectionHeadText}  mb-[40px] md:mb-[90px]`}
      >
        My Tech
      </motion.h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-16">
        {technologies.map((tech, i) => (
          <motion.div
            variants={slideIn(i % 2 === 0 ? 'right' : 'left', 'spring', (i / 5) * 0.6)}
            className="h-[150px] w-[150px]"
            key={tech.name}
          >
            <BallCanvas icon={tech.icon} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default HocWrapper(Tech, 'tech')

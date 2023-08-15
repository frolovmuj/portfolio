import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { github } from '../assets'
import { styles } from '../styles'
import { fadeIn } from '../utils/motion'

import HocWrapper from '../hoc/HocWrapper'
import { projects } from '../consts'

const Works = () => {
  return (
    <div id="works">
      <motion.div className="mb-[40px] md:mb-[90px]" variants={fadeIn('', '', 0.5, 1)}>
        <p className={`${styles.sectionSubText}`}>My works</p>
        <h2 className={`${styles.sectionHeadText}`}>Works</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-8">
        {projects.map(p => (
          <Tilt
            scale={1.02}
            transitionSpeed={7210}
            tiltReverse={true}
            perspective="780"
            tiltEnable
            className=" w-[80%]"
          >
            <motion.div
              variants={fadeIn(2 % 2 === 0 ? 'left' : 'right', 'spring', 0.1 * 0.7, 0.75)}
              className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card"
            >
              <div className="flex w-full flex-col gap-4 rounded-[20px] px-4 min-[400px]:px-12 py-5 dark:bg-tertiary min-[980px]:flex-row min-[980px]:gap-12">
                <div className="mx-auto min-[980px]:mx-0">
                  <button onClick={() => window.open(p.source_code_link, '_blank')}>
                    <div className="relative">
                      <img className="w-[300px] max-w-full rounded-[20px]" src={p.image} alt="icon" />
                      <div className="black-gradient absolute right-2 top-2 flex h-[40px] w-[40px] items-center justify-center rounded-full">
                        <img src={github} alt="github" className="w-[80%] " />
                      </div>
                    </div>
                  </button>
                </div>
                <div>
                  <h2 className="text-[35px] font-bold">{p.name}</h2>
                  <p className="my-3 max-w-[350px] text-[15px] font-normal text-secondary">{p.description}</p>
                  <div className="flex flex-wrap gap-3 ">
                    {p.tags.map(tag => (
                      <span className={tag.color}>#{tag.name}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  )
}

export default HocWrapper(Works, 'works')

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'

import { useSelector } from 'react-redux'
import { selectTheme } from '../redux/theme/selectors'

import { styles } from '../styles'
import { fadeIn } from '../utils/motion'

import HocWrapper from '../hoc/HocWrapper'

import { experiences } from '../consts/index'

const Experience = () => {
  const theme = useSelector(selectTheme)

  return (
    <section>
      <motion.p variants={fadeIn('right', 'spring', 0.3)} className={`${styles.sectionSubText} text-center`}>
        What kind of development experience have I had?
      </motion.p>
      <motion.h2
        variants={fadeIn('left', 'spring', 0.3)}
        className={`${styles.sectionHeadText} mb-[40px] text-center md:mb-[90px]`}
      >
        Work experience
      </motion.h2>
      <VerticalTimeline>
        {experiences.map((experience, i) => {
          return (
            <VerticalTimelineElement
              key={i}
              variants={fadeIn('left', 'spring', 5)}
              contentStyle={{ background: `#1d1836`, color: '#fff' }}
              contentArrowStyle={{ borderRight: `12px solid ${theme === 'dark' ? '#fff' : '#1d1836'} ` }}
              date={experience.date}
              dateClassName={`text-white min-[1170px]:text-${
                theme === 'dark' ? 'white' : 'black'
              } font-extrabol text-[15px]`}
              iconStyle={{ background: `${experience.iconBg}`, color: 'black' }}
              icon={
                <div className="mx-auto mt-[15%] w-2/3">
                  <img src={experience.icon} />
                </div>
              }
            >
              <h3 className=" vertical-timeline-element-title mb-1 text-[21px] font-extrabold">{experience.title}</h3>
              <h4 className="vertical-timeline-element-subtitle mb-5 text-[15px] font-bold text-secondary">
                {experience.company_name}
              </h4>
              <ul className="flex list-inside list-disc flex-col gap-2">
                {experience.points.map(point => (
                  <li className="text-[14px] text-white-100" key={point}>
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </section>
  )
}

export default HocWrapper(Experience, 'experience')

import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'

import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress()

  return (
    <Html>
      <div className="m-[-58px]">
        <div className="z-0 flex flex-col justify-center">
          <ThreeCircles
            height="100"
            width="100"
            color="#915eff"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
          />
          <span className="text-center text-black dark:text-white">{progress.toFixed(2)}%</span>
        </div>
      </div>
    </Html>
  )
}

export default Loader

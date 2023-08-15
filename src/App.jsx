import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from './components/index'

function App () {
  return (
    <div
      className="relative   z-0
    overflow-hidden bg-[#FAF7E8] transition-all delay-200 dark:bg-primary"
    >
      <div
        className="bg-hero-white-pattern bg-cover
  bg-center bg-no-repeat transition-all delay-200 dark:bg-hero-pattern "
      >
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      {/* <Feedbacks />
      <div className="relative z-0 items-center">
        <Contact />
        <StarsCanvas />
      </div> */}
    </div>
  )
}

export default App

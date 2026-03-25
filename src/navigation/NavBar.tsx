import { motion, Variants } from "framer-motion";
import Theme from "../ui/Theme";

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }
}

const NavBar = () => {

  const goToSection = (id: string) => {
    const el = document.getElementById(id);

    if (el === null) {
      return null
    }

    window.scrollTo({
      behavior: 'smooth',
      top: el.offsetTop
    })
  }

  return (
    <motion.div className="navbar bg-base-200 text-base-content fixed justify-center z-50 pl-4 pr-4 w-full" variants={fadeIn} initial="hidden" animate="visible">
      <button className="btn btn-ghost normal-case sm:text-3xl text-s" onClick={() => goToSection('about')}>About</button>
      <button className="btn btn-ghost normal-case sm:text-3xl text-s" onClick={() => goToSection('skills')}>Skills</button>
      {/* <button className="btn btn-ghost normal-case sm:text-3xl text-s" onClick={() => goToSection('projects')}>Projects</button> */}
      <button className="btn btn-ghost normal-case sm:text-3xl text-s" onClick={() => goToSection('resume')}>Resume</button>
      <Theme />
    </motion.div>
  )
}

export default NavBar;
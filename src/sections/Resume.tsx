import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const Resume = () => {
  return (
    <section className="h-fit pb-12" id="resume">
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="flex justify-center">
          <h1 className="sm:text-6xl text-2xl p-4 text-base-content">Resume</h1>
        </div>
        <div className="md:pl-16 md:pr-16 h-5/6 pl-1 pr-1 sm:pr-4 sm:pl-4 lg:pl-36 lg:pr-36">
          <object width="100%" height="100%" data="./assets/resume.pdf" type="application/pdf" className="h h-screen">   </object>
        </div>
      </motion.div>
    </section>
  )
}

export default Resume;
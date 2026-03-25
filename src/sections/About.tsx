import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Helmet } from "react-helmet-async";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const roles = ["software engineer", "backend developer", "data platform engineer", "full stack engineer"];

const About = () => {

  const [showMore, setShowMore] = useState(false)
  const [displayedRole, setDisplayedRole] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedRole(current.slice(0, displayedRole.length + 1));
        if (displayedRole.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayedRole(current.slice(0, displayedRole.length - 1));
        if (displayedRole.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <section className="pt-16 text-base-content" id="about">
      <Helmet>
  <title>Alex Williamson - Software Engineer</title>
  <meta name="description" content="Software engineer specializing in Spring Boot, AWS, and data platforms. Currently at Cox Automotive and Georgia Tech OMSCS student." />
  
  {/* Open Graph Tags */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://alexwilliamson.codes/" />
  <meta property="og:title" content="Alex Williamson - Software Engineer" />
  <meta property="og:description" content="Software engineer specializing in Spring Boot, AWS, and data platforms. Currently at Cox Automotive and Georgia Tech OMSCS student." />
  <meta property="og:image" content="https://alexwilliamson.codes/preview-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Alex Williamson - Software Engineer Portfolio" />
  
  {/* Twitter Cards */}
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://alexwilliamson.codes/" />
  <meta property="twitter:title" content="Alex Williamson - Software Engineer" />
  <meta property="twitter:description" content="Software engineer specializing in Spring Boot, AWS, and data platforms. Currently at Cox Automotive and Georgia Tech OMSCS student." />
  <meta property="twitter:image" content="https://alexwilliamson.codes/preview-image.png" />
</Helmet>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          {/* <div className="max-w-xs md:max-w-sm sm:w-full rounded-lg shadow-2xl mask mask-squircle">
            <img src="./assets/alex2.jpg" className="scale-110" alt="Alex Williamson - Software Engineer"/>
          </div> */}
          <motion.div className="pl-4 sm:pl-8" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h1 className="font-bold sm:text-4xl md:text-6xl text-3xl pb-4">
              Hi, I'm Alex Williamson<br />
              <span className="text-primary">{displayedRole}<span className="animate-pulse">|</span></span>
            </h1>
            <p className="lg:py-6 md:py-4 sm:py-2 sm:text-2xl pl-4 text-2xl pb-4">I currently work at Cox Automotive where I work on
            the Data Platform team which organizes the data across all the brands Cox Automotive owns.
            </p>
            <div className="flex justify-center">
              <button className="btn btn-primary btn-lg min-w-[220px]" onClick={() => setShowMore(!showMore)}>See {showMore ? 'less' : 'more'} about me</button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex align-middle justify-center pt-6 w-full px-4">
        {showMore && <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl" variants={fadeInUp} initial="hidden" animate="visible">
          <div className="bg-base-200 rounded-lg p-5 border border-base-content/10">
            <h3 className="text-lg font-bold text-base-content mb-2">What I do</h3>
            <p className="text-base text-base-content/70 leading-relaxed">Software engineer at Cox Automotive on the Data Platform team - building Snowflake automation, RBAC workflows, and governance tooling using Spring Boot, AWS, and Terraform.</p>
          </div>
          <div className="bg-base-200 rounded-lg p-5 border border-base-content/10">
            <h3 className="text-lg font-bold text-base-content mb-2">How I got here</h3>
            <p className="text-base text-base-content/70 leading-relaxed">Started as a chemical engineer after UGA, then taught myself Python and pivoted into software. Joined FedEx as my first dev role, then moved to Cox Automotive.</p>
          </div>
          <div className="bg-base-200 rounded-lg p-5 border border-base-content/10">
            <h3 className="text-lg font-bold text-base-content mb-2">Education</h3>
            <p className="text-base text-base-content/70 leading-relaxed">BS in Biochemical Engineering UGA. Currently finishing an MS in Computer Science at Georgia Tech (graduating May 2026), filling in the theory behind everything I learned on the job.</p>
          </div>
          <div className="bg-base-200 rounded-lg p-5 border border-base-content/10">
            <h3 className="text-lg font-bold text-base-content mb-2">Outside work</h3>
            <p className="text-base text-base-content/70 leading-relaxed mb-4">Backpacking, chess, and running. Feel free to reach out about my experience or any of these.</p>
            <div className="flex gap-3">
              <a className="btn btn-sm btn-primary" href="mailto:recruiting@alexwilliamson.codes">Email</a>
              <a className="btn btn-sm btn-outline" target="_blank" href="https://www.linkedin.com/in/alex-williamson-dev" rel="noopener">LinkedIn</a>
              <a className="btn btn-sm btn-outline" target="_blank" href="https://github.com/alex-williamson96" rel="noopener">GitHub</a>
            </div>
          </div>
        </motion.div>}

      </div>
    </section>
  )
}

export default About;
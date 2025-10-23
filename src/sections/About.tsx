import { useState } from "react";
import { Helmet } from "react-helmet-async";

const About = () => {

  const [showMore, setShowMore] = useState(false)

  const link = "text-primary underline hover:text-primary-focus visited:text-secondary"

  return (
    <section className="pt-16 text-base-content" id="about">
      <Helmet>
        <title>Alex Williamson - Software Engineer</title>
        <meta
          name="description"
          content="Software engineer specializing in Spring Boot, AWS, and data platforms. Currently at Cox Automotive and Georgia Tech OMSCS student."/>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alex-williamson96.github.io/" />
        <meta
          property="og:title"
          content="Alex Williamson - Software Engineer"/>
        <meta
          property="og:description"
          content="Software engineer specializing in Spring Boot, AWS, and data platforms. Currently at Cox Automotive and Georgia Tech OMSCS student."/>
        <meta
          property="og:image"
          content="https://alex-williamson96.github.io/preview-image.png"/>
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Alex Williamson - Software Engineer"/>
        <meta
          property="twitter:description"
          content="Software engineer specializing in Spring Boot, AWS, and data platforms. Currently at Cox Automotive and Georgia Tech OMSCS student."/>
        <meta
          property="twitter:image"
          content="https://alex-williamson96.github.io/preview-image.png"/>
      </Helmet>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="max-w-xs md:max-w-sm sm:w-full rounded-lg shadow-2xl mask mask-squircle">
            <img src="./assets/alex2.jpg" className="scale-110" alt="Alex Williamson - Software Engineer"/>
          </div>
          <div className="pl-4 sm:pl-8">
            <h1 className="font-bold sm:text-4xl md:text-6xl text-3xl pb-4">Hi, I'm Alex Williamson a software engineer</h1>
            <p className="lg:py-6 md:py-4 sm:py-2 sm:text-2xl pl-4 text-2xl pb-4">I currently work at Cox Automotive where I work on
            the Data Platform team which organizes the data across all the brands Cox Automotive owns.
            </p>
            <button className="btn btn-primary" onClick={() => setShowMore(!showMore)}>See {showMore ? 'less' : 'more'} about me</button>
          </div>
        </div>
      </div>
      <div className="flex align-middle justify-center pt-6">
        {showMore && <div className="text-2xl sm:w-3/4 justify-start p-4 bg-base-100 rounded-lg ls leading-relaxed">
          <p className="pb-8">
            Thanks for visiting my website! Let me tell you more about myself. I am currently a software engineer with a focus on Spring Boot, AWS, and Snowflake. 
            
            I work on the Data Platform team focusing on automating tasks within Snowflake such as service account creation, entitlements (RBAC), and data governence.
          </p>
          <p className="pb-8">
            After graduating from UGA, I worked as a chemical engineer. While I enjoyed the work, I was more interested by the data and programming aspect of my jobs.
            I realized I wanted to pursue a career in programming, so I taught myself Python and started making projects in my free time.
            After months of learning and working on projects, I landed a job at FedEx, where I worked for 2 years before joining Cox Automotive.
          </p>
          <p className="pb-8">
            I am currently enrolled at Georgia Tech in their OMSCS program, where I am getting a Masters in Computer Science.
            Being able to fill in the knowledge gaps from my self-teaching has been extremely meaningful and is helping me to become a better software engineer.
          </p>
          <p className="pb-8">
            In my free time, I like to go backpacking, play chess, and run. Feel free to reach out to me about my professional experience or if you want to talk about any of my interests.
          </p>
          <p className="pb-8">
            You can <a className={link} href="mailto:recruiting@alexwilliamson.codes">email me here</a> or message me directly on <a target="_blank" className={link} href="https://www.linkedin.com/in/alex-williamson-dev" rel="noopener">LinkedIn</a>.
          </p>
          <p>
            My skills are listed below along with my projects which you can also find <a target="_blank" className={link} href="https://github.com/alex-williamson96" rel="noopener">here on GitHub.</a>
          </p>
        </div>}

      </div>
    </section>
  )
}

export default About;
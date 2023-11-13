import { useState } from "react";

const About = () => {

  const [showMore, setShowMore] = useState(false)

  const link = "text-primary underline hover:text-primary-focus visited:text-secondary"

  return (
    <section className="pt-16" id="about">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          {/* <img src="./assets/alex.jpg" className="rounded-lg shadow-2xl sm:w-full mask mask-squircle" /> */}
          <div className="pl-4 sm:pl-8">
            <h1 className="font-bold sm:text-4xl md:text-6xl text-3xl pb-4">Hi, I'm Alex Williamson a full-stack developer</h1>
            <p className="lg:py-6 md:py-4 sm:py-2 sm:text-2xl pl-4 text-2xl pb-4">I currently work at FedEx where I use my skills to
              create and improve internal tools used for tracking incidents across the organization.
            </p>
            <button className="btn btn-primary" onClick={() => setShowMore(!showMore)}>See {showMore ? 'less' : 'more'} about me</button>
          </div>
        </div>
      </div>
      <div className="flex align-middle justify-center ">
        {showMore && <div className="text-2xl sm:w-3/4 justify-start p-4 bg-base-100 rounded-lg ls leading-relaxed">
          <p className="pb-8">
            Thanks for visiting my website! Let me tell you more about myself. I am a full-stack developer. On the backend, I mostly work with Spring Boot, and on the frontend, I specialize in Angular and React.
          </p>
          <p className="pb-8">
            After graduating from UGA, I worked as a chemical engineer. While I enjoyed the work, I was more interested by the data and programming aspect of my jobs.
            I realized I wanted to pursue a career in programming, so I taught myself Python and started making projects in my free time.
            After months of learning and working on projects, I landed a job at FedEx.
          </p>
          <p className="pb-8">
            I am currently enrolled at Georgia Tech in their OMSCS program, where I am getting a Masters in Computer Science.
            Being able to fill in the knowledge gaps from my self-teaching has been extremely meaningful and is helping me to become a better software engineer.
          </p>
          <p className="pb-8">
            In my free time, I like to go backpacking, play chess, and bake. Feel free to reach out to me about my professional experience or to hear about my latest hike or recipe.
          </p>
          <p className="pb-8">
            You can <a className={link} href="mailto:arthurwilliamson96@gmail.com">email me here</a> or message me directly on <a target="_blank" className={link} href="https://www.linkedin.com/in/alex-williamson-dev" rel="noopener">LinkedIn</a>.
          </p>
          <p>
            My skills are listed below along with my projects which you can also find <a target="_blank" className={link} href="https://github.com/alex-williamson96" rel="noopener">here.</a>
          </p>
        </div>}

      </div>
    </section>
  )
}

export default About;
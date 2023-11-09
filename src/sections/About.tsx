import { useState } from "react";

const About = () => {

  const [showMore, setShowMore] = useState(false)
  console.log(showMore)

  return (
    <section id="about">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src="./assets/alex.jpg" className="rounded-lg shadow-2xl sm:w-full" />
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
        {showMore && <div className="text-2xl sm:w-3/5 justify-start p-4 bg-base-100 rounded-lg">
          <p className="p-2">
            Thanks for visiting my website, let me tell you more about myself. I am a full-stack developer. On the backend, I mostly worth with
            Spring Boot, and on the frontend I specialize in Angular and React. I am passionate about building code that is scalable, testable,
            and intuitive within an enterprise environment.
          </p>
          <p className="p-4"></p>
          <p className="p-2">After graudating from UGA, I worked as a chemical engineer. While I enjoyed the work, I was more intrigued by
            the data and programming aspect of my job. I realized I wanted to pursue a career in programming, so I taught myself Python
            and made some projects after work and eventually landed a job at FedEx,</p>
          <p className="p-4"></p>
          <p className="p-2">I am also currenlty enrolled at Gerogia Tech where I am getting a Masters in computer science. Being able to
            fill in the knowledge gaps from my self teaching has been extremely meaningful.</p>
          <p className="p-4"></p>
          <p className="p-2">In my free time, I like to go backpacking, play chess, and bake. Feel free to reach out to me about my professional
            experience or to hear about my latest hike or recipe.</p>
          <p className="p-4"></p>
          <p className="p-2">You can <a className="text-primary underline hover:text-primary-focus"
            href="mailto:arthurwilliamson96@gmail.com">email me</a> or message me directly on <a className="text-primary underline hover:text-primary-focus" href="https://www.linkedin.com/in/alex-williamson-dev">LinkedIn.</a></p>
        </div>}

      </div>
    </section>
  )
}

export default About;
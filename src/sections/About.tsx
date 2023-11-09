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
            <button className="btn btn-primary" onClick={() => setShowMore(true)}>See more about me</button>
          </div>
        </div>
      </div>
      <div className="flex align-middle justify-center">
        <div className="text-2xl sm:w-3/5 justify-start p-4">
          <p className="p-2">
            Thanks for visiting my website, let me tell you more about myself. I am a full-stack developer. On the backend, I mostly worth with
            Spring Boot, and on the frontend I specialize in Angular and React. I am passionate about building code that is scalable and testable
            within an enterprise environment.
          </p>
          <p className="p-2">In my free time, I like to go backpacking, play chess, and bake.</p>
        </div>
      </div>
    </section>
  )
}

export default About;
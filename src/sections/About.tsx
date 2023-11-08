const About = () => {

  return (
    <section className="lg:p-16 md:p-8 sm:p-2" id="about">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src="/src/assets/man.jpg" className="lg:max-w-sm rounded-lg shadow-2xl sm:max-w-s md:max-w-sm" />
          <div>
            <h1 className="lg:text-6xl font-bold sm:text-4xl md:text-6xl">Hi, I'm Alex Williamson a full-stack developer</h1>
            <p className="lg:py-6 md:py-4 sm:py-2 lg:text-xl md:text-xl sm:text-lg pl-4">I currently work at FedEx where I use my skills to
              create and improve internal tools used for tracking incidents across the organization.
            </p>
            <button className="btn btn-primary">See more</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
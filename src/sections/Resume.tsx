const Resume = () => {
  return (
    <section className="h-screen" id="resume">
      <div className="flex justify-center">
        <h1 className="sm:text-6xl text-2xl p-4">Resume</h1>
      </div>
      <div className="md:pl-16 md:pr-16 h-5/6 pl-1 pr-1 sm:pr-4 sm:pl-4 lg:pl-72 lg:pr-72">
        <object width="100%" height="100%" data="./assets/resume.pdf" type="application/pdf">   </object>
      </div>

    </section>
  )
}

export default Resume;
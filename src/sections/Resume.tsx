const Resume = () => {
  return (
    <section className="h-screen" id="resume">
      <div className="flex justify-center">
        <h1 className="sm:text-6xl text-2xl p-4">Resume</h1>
      </div>
      <div className="md:pr-72 md:pl-72 h-5/6 pl-4 pr-4">
        <object width="100%" height="100%" data="/src/assets/resume.pdf" type="application/pdf">   </object>
      </div>

    </section>
  )
}

export default Resume;
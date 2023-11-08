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
    <div className="navbar bg-neutral text-neutral-content fixed justify-center z-50">
      <button className="btn btn-ghost normal-case lg:text-xl md:text-lg " onClick={() => goToSection('about')}>About</button>
      <button className="btn btn-ghost normal-case lg:text-xl md:text-lg " onClick={() => goToSection('skills')}>Skills</button>
      <button className="btn btn-ghost normal-case lg:text-xl md:text-lg" onClick={() => goToSection('projects')}>Projects</button>
      <button className="btn btn-ghost normal-case lg:text-xl md:text-lg" onClick={() => goToSection('resume')}>Resume</button>
      <button className="btn btn-ghost normal-case lg:text-xl md:text-lg" onClick={() => goToSection('contact')}>Contact</button>

    </div>
  )
}

export default NavBar;
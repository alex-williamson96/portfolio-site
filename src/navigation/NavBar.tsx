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
    <div className="navbar bg-base-100 text-neutral-content fixed justify-center z-50 pl-4 pr-4 w-full">
      <button className="btn btn-ghost normal-case sm:text-lg text-xs" onClick={() => goToSection('about')}>About</button>
      <button className="btn btn-ghost normal-case sm:text-lg text-xs" onClick={() => goToSection('skills')}>Skills</button>
      <button className="btn btn-ghost normal-case sm:text-lg text-xs" onClick={() => goToSection('projects')}>Projects</button>
      <button className="btn btn-ghost normal-case sm:text-lg text-xs" onClick={() => goToSection('resume')}>Resume</button>
      <button className="btn btn-ghost normal-case sm:text-lg text-xs" onClick={() => goToSection('contact')}>Contact</button>

    </div>
  )
}

export default NavBar;
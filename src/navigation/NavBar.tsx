import Theme from "../ui/Theme";

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
    <div className="navbar bg-base-200 text-base-content fixed justify-center z-50 pl-4 pr-4 w-full">
      <button className="btn btn-ghost normal-case sm:text-3xl text-s" onClick={() => goToSection('about')}>About</button>
      <button className="btn btn-ghost normal-case sm:text-3xl text-s" onClick={() => goToSection('skills')}>Skills</button>
      <button className="btn btn-ghost normal-case sm:text-3xl text-s" onClick={() => goToSection('projects')}>Projects</button>
      <button className="btn btn-ghost normal-case sm:text-3xl text-s" onClick={() => goToSection('resume')}>Resume</button>
      <Theme />
    </div>
  )
}

export default NavBar;
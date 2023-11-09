import { useRef } from "react";

const Projects = () => {


  const carousel = useRef(null);

  const scrollCarousel = (isLeft: boolean) => {

    if (carousel.current === null) {
      return
    }
    const carouselElement: HTMLElement = carousel.current;

    const width = carouselElement.scrollWidth

    if (isLeft) {
      carouselElement.scrollLeft -= width / 10
    } else {
      carouselElement.scrollLeft += width / 10
    }
  }

  return (
    <section className="sm:p-6 p-4" id="projects">
      <div className="flex justify-center">
        <h1 className="lg:text-6xl md:text-4xl sm:text-2xl p-4">Projects</h1>
      </div>
      <div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box" ref={carousel}>
        <div className="carousel-item lg:w-1/3 w-11/12 overflow-hidden relative group">
          <img src="./assets/man.jpg" className="rounded-box hover:transform hover:scale-150 hover:opacity-25 duration-700 ease-in-out" title="see more" />
          <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-center align-top text-xl bg-transparent "><button className="btn">Learn more here</button></div>
        </div>
        <div className="carousel-item lg:w-1/3 w-11/12 overflow-hidden relative group">
          <img src="./assets/man.jpg" className="rounded-box hover:transform hover:scale-125 hover:opacity-25 duration-700 ease-in-out" title="see more" />
          <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-center align-top text-xl bg-transparent "><button className="btn">Learn more here</button></div>
        </div>
        <div className="carousel-item lg:w-1/3 w-11/12 overflow-hidden relative group">
          <img src="./assets/man.jpg" className="rounded-box hover:transform hover:scale-125 hover:opacity-25 duration-700 ease-in-out" title="see more" />
          <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-center align-top text-xl bg-transparent "><button className="btn">Learn more here</button></div>
        </div>
        <div className="carousel-item lg:w-1/3 w-11/12 overflow-hidden relative group">
          <img src="./assets/man.jpg" className="rounded-box hover:transform hover:scale-125 hover:opacity-25 duration-700 ease-in-out" title="see more" />
          <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justi fy-center align-top text-xl bg-transparent "><button className="btn">Learn more here</button></div>
        </div>
        <div className="carousel-item lg:w-1/3 w-11/12 overflow-hidden relative group">
          <img src="./assets/man.jpg" className="rounded-box hover:transform hover:scale-125 hover:opacity-25 duration-700 ease-in-out" title="see more" />
          <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-center align-top text-xl bg-transparent "><button className="btn">Learn more here</button></div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <button className="btn btn-circle tooltip tooltip-left" data-tip="scroll left" onClick={() => scrollCarousel(true)}>❮</button>
        <button className="btn btn-circle tooltip tooltip-right" data-tip="scroll right" onClick={() => scrollCarousel(false)}>❯</button>
      </div>
    </section>
  )
}

export default Projects;
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
    <section className="lg:p-16 md:p-8 sm:p-4" id="projects">
      <h1 className="lg:text-6xl md:text-4xl sm:text-2xl p-4">Projects</h1>
      <div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box" ref={carousel}>
        <div className="carousel-item lg:w-1/3 w-11/12" id="item1">
          <img src="/src/assets/man.jpg" className="rounded-box" />
        </div>
        <div className="carousel-item lg:w-1/3 w-11/12" id="item2">
          <img src="/src/assets/man.jpg" className="rounded-box" />
        </div>
        <div className="carousel-item lg:w-1/3 w-11/12" id="item3">
          <img src="/src/assets/man.jpg" className="rounded-box" />
        </div>
        <div className="carousel-item lg:w-1/3 w-11/12" id="item4">
          <img src="/src/assets/man.jpg" className="rounded-box" />
        </div>
        <div className="carousel-item lg:w-1/3 w-11/12" id="item5">
          <img src="/src/assets/man.jpg" className="rounded-box" />
        </div>
        <div className="carousel-item lg:w-1/3 w-11/12" id="item6">
          <img src="/src/assets/man.jpg" className="rounded-box" />
        </div>

      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <button className="btn btn-circle" onClick={() => scrollCarousel(true)}>❮</button>
        <button className="btn btn-circle" onClick={() => scrollCarousel(false)}>❯</button>
      </div>
    </section>
  )
}

export default Projects;
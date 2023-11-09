import { useEffect, useState } from "react";

const Theme = () => {
  const lightThemes = [
    "light",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "retro",
    "valentine",
    "garden",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "cmyk",
    "autumn",
    "acid",
    "lemonade",
    "winter",
  ]

  const darkThemes = [
    "dark",
    "synthwave",
    "halloween",
    "forest",
    "black",
    "luxury",
    "dracula",
    "business",
    "night",
    "coffee",
  ];


  const [theme, setTheme] = useState(darkThemes[Math.floor(Math.random() * darkThemes.length)]);
  const toggleTheme = () => {
    setTheme(darkThemes.includes(theme) ? lightThemes[Math.floor(Math.random() * lightThemes.length)] : darkThemes[Math.floor(Math.random() * darkThemes.length)]);
  };


  useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (!htmlElement) {
      throw new Error('Error, no html element')
    }

    htmlElement.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <div className="sm:tooltip sm:tooltip-bottom sm:tooltip-primary" data-tip={'current theme: ' + theme}>
      <label className="swap swap-rotate p-4 hover:bg-neutral hover:rounded-xl">
        <input onClick={toggleTheme} type="checkbox" />
        <div className="swap-on tooltip">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" className="fill-current"><path d="M12 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001zm-7.001 22c-6.617 0-12-5.383-12-12s5.383-12 12-12c1.894 0 3.63.497 5.37 1.179-2.948.504-9.37 3.266-9.37 10.821 0 7.454 5.917 10.208 9.37 10.821-1.5.846-3.476 1.179-5.37 1.179z"></path></svg>
        </div>
        <div className="swap-off">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" className="fill-current"><path d="M21.192 6.221l-2.881 2.881c-.411-.528-.885-1.002-1.414-1.414l2.881-2.881 1.414 1.414zm-8.192-.152v-4.069h-2v4.069c.328-.041.66-.069 1-.069s.672.028 1 .069zm6.931 6.931c.041.328.069.66.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-1.931 1c0 .342-.035.674-.09 1h-11.82c-.055-.326-.09-.658-.09-1 0-3.314 2.686-6 6-6s6 2.686 6 6zm-2.142-1c-.448-1.721-2.001-3-3.858-3-1.858 0-3.41 1.279-3.857 3h7.715zm-8.754-5.312l-2.881-2.881-1.415 1.414 2.881 2.881c.411-.529.885-1.003 1.415-1.414zm-7.104 5.312v2h4.069c-.041-.328-.069-.66-.069-1s.028-.672.069-1h-4.069zm22 6h-20v-2h20v2zm-3 3h-14v-2h14v2z"></path></svg>
        </div>
      </label>
    </div>
  );
}

export default Theme;
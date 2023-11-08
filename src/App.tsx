import './App.css'
import NavBar from './navigation/NavBar'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {
  // const [count, setCount] = useState(0)
  console.log('In App')
  return (
    <>
      <NavBar />
      <div className='pt-16 sm:pt-8'>
        <About />
        <Skills />
        <Projects />
      </div>

    </>
  )
}

export default App

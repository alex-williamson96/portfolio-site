import './App.css'
import NavBar from './navigation/NavBar'
import About from './sections/About'
// import Projects from './sections/Projects'
import Resume from './sections/Resume'
import Skills from './sections/Skills'
import Footer from './ui/Footer'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <div className="bg-gradient-to-r from-base-100 to-base-300">
        <NavBar />
        <div className='pt-16'>
          <About />
          <Skills />
          {/* <Projects /> */}
          <Resume />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App

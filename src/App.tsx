import './App.css'
import NavBar from './navigation/NavBar'
import About from './sections/About'
import Projects from './sections/Projects'
import Resume from './sections/Resume'
import Skills from './sections/Skills'
import Footer from './ui/Footer'

function App() {
  // const [count, setCount] = useState(0)
  console.log('In App')
  return (
    <><div className="bg-gradient-to-r from-base-100 via-base-200 to-base-200">
      <NavBar />
      <div className='pt-16'>
        <About />
        <Skills />
        <Projects />
        <Resume />
      </div>

    </div>
    <Footer /></>
  )
}

export default App

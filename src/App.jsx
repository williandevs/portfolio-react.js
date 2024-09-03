import Navbar from "./Components/Navbar/Navbar.jsx"; 
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Experience from "./Components/Experience/Experience";
import Projects from './Components/Projects/Projects.jsx'
import Footer from "./Components/Footer/Footer.jsx";


function App() {


  return (
    <div className="bg-[#171d23] w-full overflow-hidden ">
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App

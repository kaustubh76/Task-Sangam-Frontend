import { Link } from 'react-router-dom'
import { useRef } from 'react'
import Hero from './pages/Hero'
import About from './pages/About'
import Expertise from './pages/Expertise'
import Creativity from './pages/Creativity'
import Testimonials from './pages/Testmonials'
import Footer from './pages/Footer'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const workRef = useRef();
  const serviceRef = useRef();
  const contactRef = useRef();
  const aboutRef = useRef();

  return (
    <>
      <Hero workRef={workRef} serviceRef={serviceRef} contactRef={contactRef} aboutRef={aboutRef}/>
      <About aboutRef={aboutRef}/>
      <Expertise serviceRef={serviceRef} contactRef={contactRef}/>
      <Creativity workRef={workRef}/>
      <Testimonials/>
      <Footer contactRef={contactRef}/>
      <Toaster />
    </>
  )
}

export default App

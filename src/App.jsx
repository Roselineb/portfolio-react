

import './App.css'
import Contact from './assets/Components/Contactcomponent/Contact'
import Footer from './assets/Components/Footercomponent/Footer'
import Header from './assets/Components/Headercomponent/Header'
import Projects from './assets/Components/Projectscomponent/Projects'
import Skills from './assets/Components/Skillscomponent/Skills'

function App() {
  

  return (
    <>
      
      <div className='App'>
        <Header/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App

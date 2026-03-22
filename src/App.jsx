import { HashRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './assets/Components/Sites/GeneralStyles/Header/Header.jsx'
import Footer from './assets/Components/Sites/GeneralStyles/Footer/Footer.jsx'
import Home from './assets/Components/Sites/Index/Home.jsx'
import Portfolio from './assets/Components/Sites/Portfolio/Portfolio.jsx'
import About from './assets/Components/Sites/About/About.jsx'
// import Cv from './assets/Components/Sites/CV/Cv.jsx'
import Cv1 from './assets/Components/Sites/CV/Cv1.jsx'

import EasterEgg from './assets/Components/Sites/GeneralStyles/EasterEgg/EasterEgg.jsx'

import './App.css'

export default function App() {
  const [easterActive, setEasterActive] = useState(false);


  return (
    <>
    <HashRouter>
      <Header />
        <Routes>
            <Route path="/" element={<Home easterActive={easterActive} />}></Route>
            <Route path="/portfolio" element={<Portfolio easterActive={easterActive} />}></Route>
            <Route path="/about" element={<About easterActive={easterActive} />}></Route>
            <Route path="/cv1" element={<Cv1 easterActive={easterActive} />}></Route>
        </Routes>

      <Footer />
        <EasterEgg active={easterActive} setActive={setEasterActive} />
    </HashRouter>
    </>
  )
}
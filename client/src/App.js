import React, { useState, useEffect } from 'react';
import StoriesContainer from './containers/StoriesContainer'
import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import SmallNav from './components/SmallNav'
import HeroImage from './components/HeroImage'

function App() {
  const [story, setStory] = useState([])

  const url = "https://github.com/e-oj/grabity"


  async function getStoreis() {
    const res = await fetch(`http://localhost:3000/?URL=${url}`)
    const resData = await res.json()

    setStory(resData)
  }
  useEffect(() => {
    getStoreis();
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <SmallNav />
      <HeroImage />
      < StoriesContainer />
    </>
  );
}

export default App;

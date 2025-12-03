import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Accueil from './components/Accueil'
import ContactBar from './components/ContactBar';
import Apropos from './components/Apropos';
import Footer from './components/Footer';
import Projets from './components/Projets';

function App() {
  const [isDark, setIsDark] = useState(false);
  
      useEffect(() => {
          if (isDark){
              document.documentElement.classList.add('dark')
          } else {
              document.documentElement.classList.remove('dark')
          }
      }, [isDark]);
  
      const toggleTheme = () => {
          setIsDark(!isDark);
      }
  return (
    <>
      <Header isDark={isDark} toggleTheme={toggleTheme}/>
      <Accueil isDark={isDark} toggleTheme={toggleTheme}/>
      <ContactBar isDark={isDark} toggleTheme={toggleTheme}/>
      <Projets isDark={isDark} toggleTheme={toggleTheme}/>
      <Apropos isDark={isDark} toggleTheme={toggleTheme}/>
      <Footer isDark={isDark} toggleTheme={toggleTheme}/>
    </>
  )
}

export default App

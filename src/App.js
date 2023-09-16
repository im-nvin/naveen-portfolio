import './App.css';
import { Intro } from './components/intro/Intro';
import { About } from './components/about/About';
import { ProductList } from './components/ProductList/ProductList';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle'
import { useContext } from 'react';
import { ThemeContext } from './Context';
import Certifications from './components/certifications/Certifications';

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div style={{ backgroundColor: darkMode ? '#222' : 'white', color: darkMode && 'white' }}>

      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hamburger from './Components/Hamburger/Hamburger';
import Navbar from './Components/Navbar/Navbar';

// Pages
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Error from './Pages/Error/Error';
import Projects from './Pages/Projects/Projects';
import Sidebar from './Components/Sidebar/Sidebar';
import Navigator from './Components/Navigator/Navigator';

function App() {
  const [ active, setActive ] = useState(false);
  return (
    <BrowserRouter>
      <Navbar/>
      <Navigator/>
      <Sidebar active={active} setActive={setActive}/>
      <Hamburger active={active} setActive={setActive}/>
      <Routes>
        <Route path='*' element={<Error/>}/>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/projects' element={<Projects/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home.jsx'
import Blogs from './Pages/Blog/Blogs.jsx'
import Events from './Pages/Events/Events.jsx'
import Contactus from './Pages/Contactus/Contactus.jsx'
import Ourofferings from './Pages/Our-Offerings/OurOfferings.jsx'
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home/> }/>
        <Route  path='/ourofferings' element={<Ourofferings/> }/>
        <Route  path='/blogs' element={<Blogs/> }/>
        <Route  path='/events' element={<Events/> }/>
        <Route  path='/contactus' element={<Contactus/> }/>
      </Routes>
    </div>
  );
}

export default App;

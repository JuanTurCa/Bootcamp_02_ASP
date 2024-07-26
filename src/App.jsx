import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FNAF1 } from './components/FNAF1';
import { FNAF2 } from './components/FNAF2';
import { FNAF3 } from './components/FNAF3';
import { FNAF4 } from './components/FNAF4';
import { FNAF5 } from './components/FNAF5';
import { FNAF6 } from './components/FNAF6';
import { Nav } from './components/Nav';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1 id='title' className='text-center my-3'>Five Nights at Freddy`s</h1>
        <div id='main-img-container' className='container'>
          <Routes>
            <Route path="/fnaf1" element={<FNAF1 className='image-size' />} />
            <Route path="/FNAF2" element={<FNAF2 className='image-size'/>}  />
            <Route path="/FNAF3" element={<FNAF3 className='image-size'/>}  />
            <Route path="/FNAF4" element={<FNAF4 className='image-size'/>}  />
            <Route path="/FNAF5" element={<FNAF5 className='image-size'/>}  />
            <Route path="/FNAF6" element={<FNAF6 className='image-size'/>}  />
          </Routes>
        </div>
        <div className='container'>
          <Nav />
        </div>

      </BrowserRouter>
    </>
  )
}

export default App

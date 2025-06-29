import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from './pages/Home/home';
import InfoSec from './pages/InfoSec/infoSec';
import Ethical from './pages/Ethical/ethical';
import Networking from './pages/Networking/networking';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/infoSec' element= {<InfoSec/>} />
            <Route path='/ethical' element={<Ethical/>}/>
            <Route path='/networking' element={<Networking/>}/>
          </Routes>

        </BrowserRouter>
    
    </>



  )
}

export default App

/*
<div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

*/
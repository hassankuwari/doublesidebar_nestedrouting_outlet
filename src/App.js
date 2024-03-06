import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Components/CustomNavbar';
import Home from './Components/Home';
import Features from './Components/Features';
import Pricing from './Components/Pricing';
import CustomSidebar from './Components/CustomeSidebar';
import MySidebar1 from './Components/MySidebar1';
import MySidebar2 from './Components/MySidebar2';
import MySidebar3 from './Components/MySidebar3';

import MySidebar1a from './Components/MySidebar1a';
import MySidebar1b from './Components/Mysidebar1b';
import MySidebar1c from './Components/MySidebar1c';

import MySidebar2a from './Components/MySidebar2a';
import MySidebar2b from './Components/MySidebar2b';
import MySidebar2c from './Components/MySidebar2c';

import MySidebar3a from './Components/MySidebar3a';
import MySidebar3b from './Components/MySidebar3b';
import MySidebar3c from './Components/MySidebar3c';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <CustomNavbar />

        <div className='main-container'>

          <div className='sidebar-container'>
            <CustomeSidebar />
          </div>

          <div className='body-container'>
            <Routes>
              <Route path='/home' element={<Home />}></Route>
              <Route path='/features' element={<Features />}></Route>
              <Route path='/pricing' element={<Pricing />}></Route>

              <Route path='/mysidebar1' element={<MySidebar1 />}></Route>
              <Route path='/mysidebar2' element={<MySidebar2 />}></Route>
              <Route path='/mysidebar3' element={<MySidebar3 />}></Route>

              <Route path='/mysidebar1/mysidebar1a' element={<MySidebar1a />}></Route>
              <Route path='/mysidebar1/mysidebar1b' element={<MySidebar1b />}></Route>
              <Route path='/mysidebar1/mysidebar1c' element={<MySidebar1c />}></Route>

              <Route path='/mysidebar2/mysidebar2a' element={<MySidebar2a />}></Route>
              <Route path='/mysidebar2/mysidebar2b' element={<MySidebar2b />}></Route>
              <Route path='/mysidebar2/mysidebar2c' element={<MySidebar2c />}></Route>

              <Route path='/mysidebar3/mysidebar3a' element={<MySidebar3a />}></Route>
              <Route path='/mysidebar3/mysidebar3b' element={<MySidebar3b />}></Route>
              <Route path='/mysidebar3/mysidebar3c' element={<MySidebar3c />}></Route>

            </Routes>
          </div>

        </div>
      </BrowserRouter> */}


<BrowserRouter>
  <CustomNavbar />

  <div className='main-container'>

    <div className='sidebar-container'>
      <CustomSidebar />
    </div>

    <div className='body-container'>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/features' element={<Features />} />
        <Route path='/pricing' element={<Pricing />} />

        <Route path='/mysidebar1' element={<MySidebar1 />}>
          <Route path='mysidebar1a' element={<MySidebar1a />} />
          <Route path='mysidebar1b' element={<MySidebar1b />} />
          <Route path='mysidebar1c' element={<MySidebar1c />} />
        </Route>

        <Route path='/mysidebar2' element={<MySidebar2 />}>
          <Route path='mysidebar2a' element={<MySidebar2a />} />
          <Route path='mysidebar2b' element={<MySidebar2b />} />
          <Route path='mysidebar2c' element={<MySidebar2c />} />
        </Route>

        <Route path='/mysidebar3' element={<MySidebar3 />}>
          <Route path='mysidebar3a' element={<MySidebar3a />} />
          <Route path='mysidebar3b' element={<MySidebar3b />} />
          <Route path='mysidebar3c' element={<MySidebar3c />} />
        </Route>
      </Routes>
    </div>

  </div>
</BrowserRouter>


    </div>
  );
}

export default App;

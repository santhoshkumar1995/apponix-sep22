import React from 'react';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './page/home/Home';
import { Contacts } from './page/contacts/Contacts';
import { About } from './page/About/about';
import { Layout } from './page/layout/Layout';
import BackgroundImage from './image/back ground images/home1.jpg';
import { Jewellery1 } from './page/Jewellery/Jewellery';
import { Flipcart } from './page/flipcart/Flipcart';



export const App = () => {

  return  <div style={{ 
    backgroundImage: `url{(${BackgroundImage})}` 
  }}>
    <Router>
      <Layout>
        <Routes>
          < Route path='/Home' element={<Home />} />
          < Route path='/About' element={<About />} />
          < Route path='/Contact' element={<Contacts />} />
          < Route path='/jewellery1' element={<Jewellery1 />} />
          < Route path='/Flipcart' element={<Flipcart />} />

        </Routes>

      </Layout>

    </Router>
  </div>

}
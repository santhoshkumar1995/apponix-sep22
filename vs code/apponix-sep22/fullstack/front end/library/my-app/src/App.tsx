import React from 'react';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './page/home/Home';
import { Contacts } from './page/contacts/Contacts';
import { About } from './page/About/about';
import { Layout } from './page/layout/Layout';


export const App = () => {

  return <>
    <Router>
      <Layout>
        <Routes>
          < Route path='/Home' element={<Home />} />
          < Route path='/About' element={<About />} />
          < Route path='/Contact' element={<Contacts />} />

        </Routes>

      </Layout>

    </Router>
  </>

}
import React from 'react';
import logo from './logo.svg';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './page/home/Home';


export const App = () => {

  return <>
    <Router>
      <Routes>
        < Route path='/' element={<Home />} />

      </Routes>
    </Router>
  </>

}
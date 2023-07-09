// App.js
import React from 'react';
import NewWebDesign from './Blog';
import Footer from './footer';
import Main from './Main';
import ImageSlider from './latestintown';
import BlogPost from './BlogPost';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import BlogMain from './BlogMain';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<div><Main /><NewWebDesign /><ImageSlider /></div>} />
        <Route exact path="/blog1:1" element={<BlogPost />} />
      </Routes>

    </BrowserRouter>
    <Footer />
  </div>

  );
}

export default App;

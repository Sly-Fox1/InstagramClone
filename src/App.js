import React, { useState, useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home'
import FavoritePosts from './components/FavoritePosts'
import TransitionsModal from './components/TransitionsModal'
import PrimarySearchAppBar from './components/PrimarySearchAppBar'
import Form from './components/Form'
import GlobalContextProvider from './components/Context/GlobalContext';

function App() {

  return (
    <GlobalContextProvider>
      <Router>
        <TransitionsModal />
        <PrimarySearchAppBar />
        <div className="app-body">
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/favorite-post" element={<FavoritePosts />}>
            </Route>
            <Route path="/add-post" element={<Form />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </GlobalContextProvider>
  );
}

export default App;

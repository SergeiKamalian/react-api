import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Posts from './Pages/Posts/Posts';
import './Styles/index.scss'
import { Routes, Route } from 'react-router-dom'
import Comments from './Pages/Comments/Comments';


function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path='/posts' element={<Posts />} />
        <Route path='/comments' element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;

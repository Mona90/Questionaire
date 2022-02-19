import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Intro from './pages/Intro';
import Section1 from './pages/Section1';
import Section2 from './pages/Section2';
import AllAnswer from './pages/AllAnswer';
import { createContext, useState } from 'react';
export const dataContext = createContext({});

function App() {
  const [data, setData] =  useState({})
  return (
    <BrowserRouter>
    <dataContext.Provider value={{data, setData}}>
      <Header/>
      <Routes>
        <Route path='/'>
          <Route index  element={<Intro />}/>
          <Route path='section1' element={<Section1 />} />
          <Route path='section2' element={<Section2/>}/>
          <Route path='all-answer' element={<AllAnswer />}/>
        </Route>
      </Routes>
      </dataContext.Provider>
    </BrowserRouter>
  );
}

export default App;

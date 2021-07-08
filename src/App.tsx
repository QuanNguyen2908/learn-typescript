import React from 'react';
import './App.css';
import Navbar from './component/NavBar';
import ProgressContextProvider from './component/context/ProgressContext'
import ThemeContextProvider from './component/context/ThemeContext';

function App() {
  return (
    <div >
      <ThemeContextProvider>
        <ProgressContextProvider>
          <Navbar />
        </ProgressContextProvider>
      </ThemeContextProvider>
    </div>
  );
}
export default App;

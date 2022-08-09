import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiSettings } from 'react-icons/fi'
import Sidebar from './components/Sidebar';

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button 
                className="text-3x1 p-3 hover:drop-shadow-x1
                hover:bg-light-gray text-white" style={{ backgroundColor: 'blue',
                borderRadius: '50%' 
              }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className=" w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div className={
            activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
          } >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full" >
              Navbar
            </div>
          </div>
          <div>
            <Routes>
              <Route path="/" element="Ecommerce" />
              <Route path="/dashboard" element="Dashboard" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
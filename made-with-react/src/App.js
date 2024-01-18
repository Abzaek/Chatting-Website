import React, { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import MainContainer from './components/mainbar/MainContainer'

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isSidebarVisible && !event.target.closest('.side-bar')) {
        setIsSidebarVisible(false);
      }
      
    };

    // Add event listener to handle clicks outside the sidebar
    document.addEventListener('click', handleOutsideClick);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isSidebarVisible]);

  return (
    <div>
      <Sidebar isVisible={isSidebarVisible}/>
      <MainContainer toggleSidebar={toggleSidebar}/>
    </div>
  );
};

export default App;

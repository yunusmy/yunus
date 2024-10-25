import './App.css';
import NavBer from './components/NavBer';
import Banner from './components/Banner';
import Button from './components/Button';

import Footer from './components/Footer';
import Subscribe from './components/Subscribe';
import { useState } from 'react';

function App() {
  const [isActive, setIsActive] = useState({
    able: true,
    status: 'able',
  });
  const handleStatus = status => {
    if (status == 'able') {
      setIsActive({
        able: true,
        status: 'able',
      });
    } else {
      setIsActive({
        able: false,
        status: 'Selected',
      });
    }
  };

  return (
    <>
      <div>
        <NavBer></NavBer>
        <Banner></Banner>
        <Button isActive={isActive} handleStatus={handleStatus}></Button>
        <Subscribe></Subscribe>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

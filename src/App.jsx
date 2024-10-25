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
  const [players, setPlayers] = useState([]);

  const addplayering = player => {
    const isExist = players.find(
      playing => playing.full_name === player.full_name
    );
    if (!isExist) {
      setPlayers([...players, player]);
    } else {
      alert('player already exists in the queue ');
    }
  };

  return (
    <>
      <div>
        <NavBer></NavBer>
        <Banner></Banner>
        <Button
          isActive={isActive}
          handleStatus={handleStatus}
          addplayering={addplayering}
          players={players}
        ></Button>
        <Subscribe></Subscribe>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

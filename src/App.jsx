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
  const [play, setPlay] = useState([]);
  const handleRemove = id => {
    const removePlayer = players.find(play => play.full_name === id);

    const updatedData = players.filter(p => p.full_name !== id);
    setPlayers(updatedData);
    setPlay([...play, removePlayer]);
  };

  const [freeCoin, setfreeCoin] = useState(0);
  const freeCoins = coin => {
    setfreeCoin(coin + freeCoin);
  };

  return (
    <>
      <div>
        <NavBer freeCoin={freeCoin}></NavBer>
        <Banner freeCoins={freeCoins}></Banner>
        <Button
          isActive={isActive}
          handleStatus={handleStatus}
          addplayering={addplayering}
          players={players}
          handleRemove={handleRemove}
        ></Button>
        <Subscribe></Subscribe>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

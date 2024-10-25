import './App.css';
import NavBer from './components/NavBer';
import Banner from './components/Banner';
import AvailablePlayers from './components/AvailablePlayers';
import Footer from './components/Footer';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <>
      <div>
        <NavBer></NavBer>
        <Banner></Banner>
        <AvailablePlayers></AvailablePlayers>
        <Subscribe></Subscribe>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

import Img from '../assets/banner-main.png';

const Banner = ({ freeCoins }) => {
  const coin = 500;
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 container mx-auto rounded-md py-4">
      <img src={Img} alt="" />
      <h1>Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p>Beyond Boundaries Beyond Limits</p>
      <button className="btn bg-lime-300" onClick={() => freeCoins(coin)}>
        Claim Free Credit
      </button>
    </div>
  );
};

export default Banner;

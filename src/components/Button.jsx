import AvailablePlayers from './AvailablePlayers';
import Selected from './Selected';

const Button = ({ handleStatus, isActive, addplayering, players }) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex mt-6 justify-between items-center ">
          <button className="text-xl">Available Players</button>
          <div className="flex justify-end items-center gap-1">
            <button
              className={`${isActive.able ? 'btn bg-lime-300' : 'btn'}`}
              onClick={() => handleStatus('able')}
            >
              Available
            </button>
            <button
              className={`${isActive.able ? 'btn' : 'btn bg-lime-300'}`}
              onClick={() => handleStatus('Selected')}
            >
              Selected {0 + players.length}
            </button>
          </div>
        </div>

        {isActive.able ? (
          <AvailablePlayers addplayering={addplayering}></AvailablePlayers>
        ) : (
          <Selected players={players}></Selected>
        )}
      </div>
    </>
  );
};

export default Button;

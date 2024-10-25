const Selected = ({ players }) => {
  return (
    <>
      <div>
        {players.map((player, index) => (
          <div key={index} className="flex justify-between px-1 items-center">
            <div className="flex justify-between px-1 items-center gap-2">
              <img className={'w-14'} src={player.img} alt="" />
              <div>
                <h4>{player.full_name}</h4>
                <p>{player.batting_style}</p>
              </div>
            </div>
            <button className="btn bg-lime-300">Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Selected;

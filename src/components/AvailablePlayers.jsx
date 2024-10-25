import { useEffect, useState } from 'react';

const AvailablePlayers = () => {
  const [recipr, setRecipr] = useState([]);
  useEffect(() => {
    fetch('playing.json')
      .then(res => res.json())
      .then(data => setRecipr(data));
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex mt-6 justify-between items-center ">
          <button className="text-xl">Available Players</button>
          <div className="flex justify-end items-center gap-1">
            <button className="btn">Available</button>
            <button className="btn">Selected (0)</button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {recipr.map(recipe => (
            <div
              key={recipe.full_name}
              className="card p-4  shadow-xl flex flex-col my-4"
            >
              <figure>
                <img src={recipe.img} alt="img" className="m-2" />
              </figure>
              <div className="text-xl">{recipe.full_name}</div>
              <div className="flex justify-between">
                <p>{recipe.team}</p>
                <p>{recipe.playing_role}</p>
              </div>
              <p>Rating</p>
              <div className="flex justify-between">
                <p>{recipe.batting_style}</p>
                <p>{recipe.batting_style}</p>
              </div>

              <div className="flex justify-between">
                <p>{recipe.price}</p>
                <button className="btn">Choose Player</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AvailablePlayers;

import { useEffect, useState } from 'react';

const AvailablePlayers = ({ addplayering }) => {
  const [recipr, setRecipr] = useState([]);
  useEffect(() => {
    fetch('playing.json')
      .then(res => res.json())
      .then(data => setRecipr(data));
  }, []);

  return (
    <>
      <div className="container mx-auto">
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
                <button className="btn" onClick={() => addplayering(recipe)}>
                  Choose Player
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AvailablePlayers;

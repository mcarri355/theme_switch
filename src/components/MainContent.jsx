// Content.jsx
import { useContext } from 'react';
import { StyleContext } from '../App';

const Content = () => {
  let { theme, info } = useContext(StyleContext);

  return (
    <>
      {/* determines whether or not to load the light or dark mode */}
      <div className={theme === 'light' ? 'contentSection' : 'contentSection darkContent'}>
        {/* maps through the data and creates individual elements */}
        <div className="gamesContainer">
          {info.map((game) => (
            <div className={theme === 'light' ? 'gameBox' : 'gameBox darkGame'} key={game.id}>
              <p className={theme === 'light' ? 'gameTitle' : 'gameTitle darkGameTitle'}>
                <span className="gameName">{game.title}</span> <br /> {game.genre}
              </p>
              <br />
              <p className={theme === 'light' ? 'gameDesc' : 'gameDesc darkGameDesc'}>
                <span className="gameDescription">Description: </span>
                {game.description}
              </p>
              <br />
              <br />
              <img src={game.image} alt={`${game.title} image`} className="gameImg" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Content;

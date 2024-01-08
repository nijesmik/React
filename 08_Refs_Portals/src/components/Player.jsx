import { useState } from 'react';

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const [playerName, setPlayerName] = useState('unknown entity');

  const handleChange = (event) => {
    setEnteredPlayerName(event.target.value);
  };

  const handleClick = () => {
    if (enteredPlayerName) {
      setPlayerName(() => enteredPlayerName);
    }
  };

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

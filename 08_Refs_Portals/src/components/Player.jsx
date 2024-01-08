import { useState, useRef } from 'react';

export default function Player() {
  const enteredPlayerName = useRef();
  const [playerName, setPlayerName] = useState('unknown entity');

  const handleClick = () => {
    const name = enteredPlayerName.current.value;
    if (name) {
      setPlayerName(() => name);
      enteredPlayerName.current.value = '';
    }
  };

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input type="text" ref={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

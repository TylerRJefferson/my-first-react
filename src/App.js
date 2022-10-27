import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const names = ['Kaylen', 'Ro', 'Tyler', 'Corwin', 'Jacques', 'Captain Ed',
 'Todd', 'Damian', 'Cari', 'Gianna', 'Eddie', 'Mido', 'Adi', 'Nick',
 'Fanessa', 'Gerly', 'Emily', 'Ainis', 'Nerissa', 'Cas', 'Brad', 'Sebas']

function App() {
  const [myName, setMyName] = useState('Tyler')
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {myName} is pretty damn cool!
        </p>
        {names.map(name => (
          <button key={name} onClick={() => setMyName(name)}>{name}</button>
        ))}
        
        <p>You clicked the button {counter} times</p>
        <button onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>-1</button>
        <button onClick={() => setCounter(0)}>Reset Counter</button>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
      </header>
    </div>
  );
}

export default App;

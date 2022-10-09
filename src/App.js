import logo from './logo.svg';
import './App.css';
import {atom, useAtom} from 'jotai';

const countAtom = atom(0);

const Count = () => {
  const [count] = useAtom(countAtom);
  
  return (
    <h2>Count: {count} </h2>
  )
}

const CountIncreaser = () => {
  const [setCount] = useAtom(countAtom);

  return (
    <button onClick={() => setCount(c => c + 1)} >
      +
    </button>
  )
}

function App() {
  return (
    <div className="App">
      <Count />
      <CountIncreaser />
    </div>
  );
}

export default App;

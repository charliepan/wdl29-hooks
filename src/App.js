import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  let [count, setCount] = useState(1),
      [nameInput, setNameInput] = useState(''),
      [imageURL, setImageURL] = useState('');

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${count}`)
    .then(res => setImageURL(res.data.sprites.front_default))
    .catch(err => console.log(err));
  }, [count])

  return (
    <div className="App">
      <h1>React Hooks</h1>
      <h1>{nameInput}</h1>
      <div>
        <input placeholder='Enter Your Name' onChange={e =>setNameInput(e.target.value)} />
      </div>
      <h1>{count}</h1>
      <div>
        <button onClick={()=> setCount(count - 1)}>Down</button>
        <button onClick={()=> setCount(count + 1)}>Up</button>
      </div>
      <img src={imageURL} alt="pokemon sprite"/>
    </div>
  );
}

export default App;

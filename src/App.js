import {useState} from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState(' ')

  const handleName = (event) => {
    setName(event.target.value);
  }

  const handleLastName = (event) => {
    setLastName(event.target.value);
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }


  return (
    <div className="App">
      <input type="text"  placeholder='name' onChange={handleName}/>
      <input type="text"  placeholder='lastname' onChange={handleLastName}/>
      <input type="text"  placeholder='email' onChange={handleEmail}/>
      <p>Vorname:{name}</p>
      <p>Nachname:{lastName}</p>
      <p>Email:{email}</p>
    </div>
  );
}

export default App;

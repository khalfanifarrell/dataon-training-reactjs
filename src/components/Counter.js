import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [employees, setEmployees] = useState({
    name: 'Default Name',
    address: 'Default Address',
    height: 0,
    weight: 0
  })

  const handleDecrement = () => {
    setCount((prevState) => (prevState > 0 ? prevState - 1 : 0))
  }

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  }

  const handleUpdateEmployee = () => {
    setEmployees((prevState) => {
      return {
        ...prevState,
        name: "Updated Name",
        address: "Updated Address",
        height: 170,
        weight: 60
      }
    })
  }

  const employee = [
    { id: 1, name: "John Doe"},
    { id: 2, name: "Jean Doe"},
    { id: 3, name: "Doe John"},
  ]
  return (
    <>
      <Header name="Farrell"/>
      <Content item={employees}/>
      <div>Hello World!</div>
      {count}
      <button onClick={handleUpdateEmployee}>Handle Update</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>

      {employee?.map((v, k) => {
        return <Content item={v} />
      })}
    </>
    // <h1> Hello World! </h1>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

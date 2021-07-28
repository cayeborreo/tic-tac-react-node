import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    // console.log(process.env.REACT_APP_BASE_API_URL);
    const response = await fetch(
      `${process.env.REACT_APP_BASE_API_URL}/api/grid`
    );
    const json = await response.json();
    console.log(json);
    // setData(json?.message);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{data}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

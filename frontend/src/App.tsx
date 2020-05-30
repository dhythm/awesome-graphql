import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import './App.css';
import { GetNumberQuery } from './GetNumberQuery';
import logo from './logo.svg';

const App: React.FunctionComponent = () => {
  const { loading, error, data } = useQuery(GetNumberQuery, {
    fetchPolicy: 'cache-first',
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>{data?.number.value}</div>
      </header>
    </div>
  );
};

export default App;

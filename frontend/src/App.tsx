import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import './App.css';
import { GetNumberQuery } from './GetNumberQuery';
import logo from './logo.svg';

const App: React.FunctionComponent = () => {
  const { loading, error, data: data1 } = useQuery(GetNumberQuery, {
    variables: { input: { id: 1 } },
    fetchPolicy: 'cache-first',
  });
  const { data: data2 } = useQuery(GetNumberQuery, {
    variables: { input: { id: 1 } },
    fetchPolicy: 'cache-only',
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  console.log({ data1, data2 });

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
        <div>
          {data1?.getNumber?.id} {data1?.getNumber?.value}
        </div>
        <div>
          {data2?.getNumber?.id} {data2?.getNumber?.value}
        </div>
      </header>
    </div>
  );
};

export default App;

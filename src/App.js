
import React, { useEffect, useState } from 'react';
import Card from './components/Card'
import './App.scss';

function App() {

      const [data, setData] = useState(null);

      useEffect(() => {
        fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts')
        .then(response => response.json())
        .then(r => setData(r));
      },[])
    if(!data)
    return <span>Loading...</span>

  return (
    <div className="app">{ data.map((cardProps) => <Card {...cardProps} key={cardProps.id} />)
      }
    </div>

  );
}

export default App;

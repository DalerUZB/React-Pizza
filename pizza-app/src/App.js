import React from 'react';
import axios from 'axios'


import { Route } from 'react-router-dom';
import { Header } from './Components';
import { Home, Cart } from './pages';

function App() {

  const [pizzas, setPizzas] = React.useState([])

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas)
    })
  }, [])

  return (
    <div className="wrapper">
      {/* this is HEADER componets  */}
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={pizzas} />} exact />
        <Route path="/Cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;

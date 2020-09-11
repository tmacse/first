import React from 'react';
import Home from './components/Home'
import { BrowserRouter, Route } from 'react-router-dom';
import List from './components/list/List';
import Detail from './components/detail/Detail';
import MovieDetail from './components/movieDetail/MovieDetail'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path='/list' component={List} exact />
        <Route path='/detail' component={Detail} exact />
        <Route path='/movie_detail' component={MovieDetail} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;

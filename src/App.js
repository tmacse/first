import React from 'react';
import Home from './components/Home'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import List from './components/list/List';
import Detail from './components/detail/Detail';
import MovieDetail from './components/movieDetail/MovieDetail'
function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Route path="/" component={Home} exact />
          <Route path='/list' component={List} exact />
          <Route path='/detail' component={Detail} exact />
          <Route path='/movie_detail' component={MovieDetail} exact />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;

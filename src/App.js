import React from 'react';
import Home from './components/Home'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import List from './components/list/List';
import Detail from './components/detail/Detail';
import MovieDetail from './components/movieDetail/MovieDetail'
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <ScrollToTop>
            <Route path="/" component={Home} exact />
            <Route path='/list' component={List} exact />
            <Route path='/detail/:_id' component={Detail} exact />
            <Route path='/movie_detail/:id' component={MovieDetail} exact />
          </ScrollToTop>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;

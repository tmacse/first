import React from 'react';
import Home from './components/Home'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import List from './components/list/List';
import Detail from './components/detail/Detail';
import MovieDetail from './components/movieDetail/MovieDetail'
import ScrollToTop from './components/ScrollToTop';
import MailDetail from './components/mail/MailDetail';
import Success from './components/success/Success';
function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <ScrollToTop>
            <Route path="/" component={Home} exact />
            <Route path='/list/:attr' component={List} exact />
            <Route path='/detail/:_id' component={Detail} exact />
            <Route path='/movie_detail/:id' component={MovieDetail} exact />
            <Route path='/mail/:attr' component={MailDetail}></Route>
            <Route path='/success' component={Success}></Route>
          </ScrollToTop>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;

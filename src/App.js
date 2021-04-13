import "core-js";
import "regenerator-runtime/runtime";
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
import DynamicList from './components/list/DynamicList';
import BackToTop from "./components/BackToTop";
import PicShowDetail from './components/picshowdetail/PicShowDetail'
import Quantization from "./components/quantization/Quantization";
import Statistics from "./components/statistics/Statistics";

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <ScrollToTop>
            <Route path="/" component={Home} exact />
            <Route path='/:attr/list' component={List} exact />
            <Route path='/:attr/dynamiclist' component={DynamicList} exact></Route>
            <Route path='/detail/:_id' component={Detail} exact />
            <Route path='/movie_detail/:id' component={MovieDetail} exact />
            <Route path='/picshowdetail/:_id' component={PicShowDetail}></Route>
            <Route path='/mail/:attr' component={MailDetail}></Route>
            <Route path='/success' component={Success}></Route>
            <Route path='/quantization' component={Quantization}></Route>
            <Route path='/statistic' component={Statistics}></Route>
          </ScrollToTop>
          <BackToTop />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;

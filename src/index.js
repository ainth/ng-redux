import ngReduxProvider from './components/ngRedux';
import {createStore, applyMiddleware, compose} from 'redux';

export default angular.module('ngRedux', [])
  .provider('$ngRedux', ngReduxProvider)
  .name;

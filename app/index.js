import React from 'react';

import { BottomTab } from "./config/navigation";
// import { AppNavigator } from "./config/AppNavigator";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';



const store = createStore(rootReducer);


export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render(){
    return(

  <Provider store={store}>
    <BottomTab />
  </Provider>
)}
}
import React, { Component } from 'react';
import { UIManager } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage';
import reducers from './reducers';
import AppNavigator from './components/AppNavigator';

let Navigation = createAppContainer(AppNavigator);

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
let store = createStore(persistedReducer);
let persistor = persistStore(store);

class App extends Component {
  constructor(props) {
    super(props);
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    //console.log("Store = ", store.getState());
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;

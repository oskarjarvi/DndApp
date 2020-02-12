import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './redux/reducers'

import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  console.disableYellowBox = true
  const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaProvider>
  );
}




import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers'
import saga from './redux/sagas'
import createSagaMiddleware from 'redux-saga'
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function App() {
  console.disableYellowBox = true
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(saga)
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaProvider>
  );
}




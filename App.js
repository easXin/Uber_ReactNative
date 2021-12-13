import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
// >> 1. setup redux
function App() {
  return (
    <Provider store={store}>
        <HomeScreen/>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;

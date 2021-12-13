import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
//import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './store';
//import 'react-native-gesture-handler';
//import 'android.os.Bundle'
import HomeScreen from './screens/HomeScreen';
i//mport { NavigationContainer } from '@react-navigation/native'
// >> 1. setup redux
function App() {
  return (
    <Provider store={store}>
      <HomeScreen/>
      {/* <SafeAreaProvider>
  
      </SafeAreaProvider>; */}
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

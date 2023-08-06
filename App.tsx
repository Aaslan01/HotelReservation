/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ReservationScreen from './src/screens/ReservationScreen';
import OrderScreen from './src/screens/OrderScreen';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        {
          <Stack.Navigator initialRouteName="ReservationScreen">
            <Stack.Screen
              name="ReservationScreen"
              component={ReservationScreen}
              options={{headerTitle: 'Reservation'}}
            />
            <Stack.Screen
              name="OrderScreen"
              component={OrderScreen}
              options={{header: () => null}}
            />
          </Stack.Navigator>
        }
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/components/homeScreen/Home';
import Atributos from './src/components/atributosScreen/Atributos';
import Criar from './src/components/CriarScreen/Criar';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          
          headerStyle: {
            backgroundColor: 'white',
            borderBottomWidth:1,
            borderBottomColor: 'gold', 
          }
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          
        />
        <Stack.Screen
          name="Create"
          component={Criar}
         
        />
        <Stack.Screen
          name="attributes"
          component={Atributos}
         
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

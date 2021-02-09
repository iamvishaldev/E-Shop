import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Login from "./app/components/Login";
import SingUp from './app/components/SingUp';
import ProductList from './app/components/ProductList';
import ProductDetail from './app/components/ProductDetail'
import {createStackNavigator} from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";
import SignUp from './app/components/SingUp';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome"
      screenOptions={{
        headerShown: false
      }} >
        <Stack.Screen 
        name="Welcome"
        component={WelcomeScreen}
        />
         <Stack.Screen 
        name="SignUp"
        component={SignUp}
        />
         <Stack.Screen 
        name="Login"
        component={Login}
        />
         <Stack.Screen 
        name="Product"
        component={ProductList}
        />
         <Stack.Screen 
        name="ProductDetail"
        component={ProductDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

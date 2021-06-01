import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import {AppTabNavigator} from './Components/AppTabNavigator'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import {AppDrawerNavigator} from './Components/AppDrawerNavigator'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}
const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  AppDrawerNavigator:{screen:AppDrawerNavigator}
})
const AppContainer = createAppContainer(SwitchNavigator)
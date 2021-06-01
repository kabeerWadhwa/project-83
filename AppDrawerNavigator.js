import * as React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from './AppTabNavigator'
import SideBarMenu from './SideBarMenu'
import SettingsScreen from '../screens/SettingsScreen'

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {screen:AppTabNavigator},
    Settings:{screen:SettingsScreen}
},
{contentComponent: SideBarMenu}, 
{initialRouteName:'Home'
})
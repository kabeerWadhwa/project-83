import * as React from 'react'
import {Image} from 'react-native'
import BarterDonate from "../screens/BarterDonate"
import BarterRequest from "../screens/BarterRequest"
import {createBottomTabNavigator} from 'react-navigation-tabs'

export const AppTabNavigator = createBottomTabNavigator({
    BarterDonate:{screen:BarterDonate}, 
    BarterRequest:{screen:BarterRequest}
})
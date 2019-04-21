import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import HomeList from '../components/HomeList'
import HomeProducts from '../components/HomeProducts'

const AppNavigator = createStackNavigator({
    HomeList : {
        screen : HomeList
    },

    HomeProducts : {
        screen : HomeProducts
    }
}, {
    tabBarPosition : 'bottom',
    tabBarOptions : {
      showIcon : true
    }
})

export default createAppContainer(AppNavigator)
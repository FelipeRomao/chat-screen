import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

import Home from './src/screens/Home'
import Contato from './src/screens/Contato'
import Horarios from './src/screens/Horarios'
import Sobre from './src/screens/Sobre'

const AppNavigator = createBottomTabNavigator({
  Home : {
    screen : Home
  },

  Contato : {
    screen : Contato
  },

  Horarios : {
    screen : Horarios
  },

  Sobre : {
    screen : Sobre
  },
  
}, {
    tabBarPosition : 'bottom',
    tabBarOptions : {
      showIcon : true
    }
})

export default createAppContainer(AppNavigator)
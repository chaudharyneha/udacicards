import React from 'react'
import { StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { Platform } from 'react-native'
import  {SimpleLineIcons } from '@expo/vector-icons'
import { blue, white } from '../../utils/colors'
import  NewFlashCardScreen  from './views/NewFlashCardScreen'
import  SideBarOpenButton from '../SideBarOpenButton'

const NewDeckNavigator = StackNavigator({
  NewFlashCardScreen: {
    screen: NewFlashCardScreen,
    navigationOptions: ({ navigation, defaultHeader }) => ({
      ...defaultHeader,
      title: 'Desks',
      headerLeft: <SideBarOpenButton navigation={navigation}/>,
    })},
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerMode: 'screen',
      headerStyle: {
        backgroundColor: blue,
      },
      headerTitleStyle: { color: white },
    }),
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
    }
  }
)

export default NewDeckNavigator
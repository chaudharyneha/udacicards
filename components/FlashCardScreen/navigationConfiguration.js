import React from 'react'
import { StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { Platform } from 'react-native'
import  {SimpleLineIcons } from '@expo/vector-icons'
import { blue, white } from '../../utils/colors'

import  DeckListScreen  from './views/DeckListScreen'
import  DeckViewScreen from './views/DeckViewScreen'
import  NewQuestionScreen from './views/NewQuestionScreen'
import  QuizScreen from './views/QuizScreen'
import  SideBarOpenButton from '../SideBarOpenButton'

const DeckNavigator = StackNavigator({
  DeckListScreen: {
    screen: DeckListScreen,
    navigationOptions: ({ navigation, defaultHeader }) => ({
      ...defaultHeader,
      title: 'Decks',
      headerLeft: <SideBarOpenButton navigation={navigation}/>,
    })},

   DeckViewScreen: {
    screen: DeckViewScreen,
    navigationOptions: ({ navigation, defaultHeader }) => ({
      ...defaultHeader,
      drawerLockMode: 'locked-closed'
    })},

  QuizScreen: {
    screen: QuizScreen,
    navigationOptions: ({ navigation, defaultHeader }) => ({
      ...defaultHeader,
      title: 'Quiz',
      drawerLockMode: 'locked-closed'
    })},

  NewQuestionScreen: {
    screen: NewQuestionScreen,
    navigationOptions: ({ navigation, defaultHeader }) => ({
      ...defaultHeader,
      title: 'New Question',
      drawerLockMode: 'locked-closed'
    })},

  },
  {
    initialRouteName: 'DeckListScreen',
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
    },
    navigationOptions: ({ navigation }) => ({
      headerMode: 'screen',
      headerStyle: {
        backgroundColor: blue,
      },
      headerTitleStyle: { color: white },
      headerTintColor: white,
    }),
    initialRouteParams: { index:  2, id: '986hgdsn', title: 'React', deck: {
      id: '986hgdsn',
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'List any two react lifecycle methods?',
          answer: 'componentDidMount, componentWillUnmount'
        }
      ]
    } }
  }
)

export default DeckNavigator

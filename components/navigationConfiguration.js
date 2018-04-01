import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import  {SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons'

import  SideBar from './SideBar'
import  DeckNavigator  from './FlashCardScreen/navigationConfiguration'
import  NewDeckNavigator  from './NewFlashCardScreen/navigationConfiguration'

const MainNavigation = DrawerNavigator({
    Desks: {
      screen: DeckNavigator,
      navigationOptions: {
        title: 'Decks',
        drawerIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name={'cards-outline'} color={tintColor} size={25}/>
        )
      }
    },
    NewDesks: {
      screen: NewDeckNavigator,
      navigationOptions: {
        title: 'Add New Deck',
        drawerIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name={'plus'} color={tintColor} size={25}/>
        )
      }
    },
  },
  {contentComponent: props => (<SideBar {...props}/>)}
)

export default MainNavigation
import React , { Component }from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, Linking, TouchableOpacity, StatusBar } from 'react-native'
import { gray } from '../../utils/colors'
import { Constants } from 'expo'
import { DrawerItems } from 'react-navigation'
import { getBgImage, IMAGE_RESIZE_MODE } from '../../utils/bgImages'

class SideBar extends Component {
  render() {
    return(
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <DrawerItems {...this.props} />
        <TouchableOpacity style={styles.footerLink} onPress={() => Linking.openURL('mailto:neha.1feb@gmail.com?subject=udacicard')}>
          <Text style={{color: gray}} >Neha Seth 2018</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  header: {
    paddingTop: Constants.statusBarHeight,
    height: 170,
    justifyContent:'center',
    alignItems: 'center',
  },
  headerIcon: {
    width: 100,
    height: 100,
  },
  footerLink: {
    position:'absolute',
    bottom : 20,
    left: 20
  }
})


export default SideBar

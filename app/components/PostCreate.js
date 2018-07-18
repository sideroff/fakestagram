import React, { Component } from 'react'
import { StyleSheet, View, Text, } from 'react-native'
import { connect } from 'react-redux'
import { createStackNavigator } from 'react-navigation'

import ChoosePhoto from './ChoosePhoto'
import FinalizePost from './FinalizePost'

import navigation from './../services/navigation'

const Router = createStackNavigator({
  ChoosePhoto: { screen: ChoosePhoto },
  FinalizePost: { screen: FinalizePost }
}, {
  
})

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    photos: state.resources.photos
  }
}

class PostCreate extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <View style={styles.container}>
        <Router ref={navigationRef => { navigation.setUp('main.post', navigationRef) }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default connect(mapStateToProps, dispatch => ({ dispatch }))(PostCreate)
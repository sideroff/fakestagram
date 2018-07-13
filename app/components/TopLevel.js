import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Text } from 'react-native'

import {
  MainApp,
  NoInternet,
  InitialLoadingScreen,
  Authenticate
} from '.'

import { testing } from './../actions'

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  weHaveInternet: state.flags.weHaveInternet,
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

class TopLevel extends Component {

  componentDidMount() {
    console.log('component did mount')
    this.props.dispatch(testing('heyyy'))
  }

  getCorrectComponent() {
    let correctComponent = MainApp

    let weHaveInternet = this.props.weHaveInternet
    let currentUser = this.props.currentUser

    if (weHaveInternet === false) {
      correctComponent = NoInternet
    } else if (weHaveInternet === null || weHaveInternet && currentUser === null) {
      correctComponent = InitialLoadingScreen
    } else if (weHaveInternet && typeof currentUser === 'object' && Object.keys(currentUser).length == 0) {
      correctComponent = Authenticate
    }
    return correctComponent
  }

  render() {
    let Component = this.getCorrectComponent()
    return (
      <Component />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopLevel)
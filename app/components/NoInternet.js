import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

class NoInternet extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('./../src/sad_face.png')} />
        </View>

        <View style={styles.messageContainer}>
          <Text style={styles.message}>You don't appear to be connected to the internet.</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  message: {
    fontSize: 18
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NoInternet)
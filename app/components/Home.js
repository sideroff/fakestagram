import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // firebase.database().ref().child('posts').on('child_added', snapshot => {
    //   let post = snapshot.val()

    //   if (this.props.currentUser.following.indexOf(post.poster) >= 0) {
    //     addPost()
    //   }
    // })
  }

  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
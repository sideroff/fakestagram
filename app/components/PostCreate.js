import React, { Component } from 'react'
import { StyleSheet, View, Text, CameraRoll, ScrollView, Image } from 'react-native'
import { connect } from 'react-redux'
import t from 'tcomb-form-native'
const Form = t.form.Form

import { createPost, getPhotos } from './../actions'
import forms from './../forms'
import { Button } from '.'


function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    photos: state.resources.photos
  }
}

class PostCreate extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
    this.getPhotos = this.getPhotos.bind(this)
  }

  getPhotos() {
    this.props.dispatch(getPhotos({ first: 20, assetType: 'Photos' }))
  }

  onSubmit() {
    let values = this.refs.postCreateForm.getValue()

    let newPost = Object.assign({}, values, { uid: this.props.currentUser.uid })

    console.log('newPost', newPost)

    this.props.dispatch(createPost(newPost))
  }

  render() {
    return (
      <View>
        <Form
          ref='postCreateForm'
          type={forms.postCreate.type}
          options={forms.postCreate.options} />
        <Text>Photos:</Text>
        {this.props.photos && <ScrollView>
          {this.props.photos.map((p, i) => {
            return (
              <Image
                key={i}
                style={{
                  width: 300,
                  height: 100,
                }}
                source={{ uri: p.node.image.uri }}
              />
            )
          })}
        </ScrollView>}
        <Text>End of photos</Text>
        <Button label='Get photos' onPress={this.getPhotos} />
        <Button label='Create Post' onPress={this.onSubmit} />
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

export default connect(mapStateToProps, dispatch => ({ dispatch }))(PostCreate)
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
      <View style={styles.container}>
        <View style={styles.pictureSelect}>
          <ScrollView style={styles.pictureSet}>
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
            <View style={styles.getMorePhotosButtonContainer}>
              <Button label='Get photos' onPress={this.getPhotos} />
            </View>
          </ScrollView>
        </View>


        <Form
          ref='postCreateForm'
          type={forms.postCreate.type}
          options={forms.postCreate.options}
          style={styles.postCreateForm} />

        <Button label='Create Post' onPress={this.onSubmit} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  pictureSelect: {
    flex: 2,
  },
  postCreateForm: {
    flex: 2
  },
  pictureSet: {
    flex: 3,
  },
  getMorePhotosButtonContainer: {
    padding: 20
  }


})

export default connect(mapStateToProps, dispatch => ({ dispatch }))(PostCreate)
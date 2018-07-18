import React, { Component } from 'react'
import { StyleSheet, View, Text, CameraRoll, ScrollView, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import t from 'tcomb-form-native'
const Form = t.form.Form

import { createPost, getReadExternalStoragePermission, updateReadExternalStoragePermission, getPhotos, selectPhoto } from './../actions'
import forms from './../forms'
import { Button } from '.'



function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    photos: state.resources.photos,
    selectedPhoto: state.resources.selectedPhoto,
    readExternalStoragePermission: state.flags.readExternalStoragePermission,
    lastLoadedPhotoCursor: state.flags.lastLoadedPhotoCursor,
    numberOfPhotosToLoad: state.flags.numberOfPhotosToLoad,
    numberOfPhotosOnRow: state.flags.numberOfPhotosOnRow,
    fetchingPhotos: state.flags.fetchingPhotos,
  }
}

class ChoosePhoto extends Component {
  constructor(props) {
    super(props)

    this.getPermission = this.getPermission.bind(this)
    this.getNextPhotos = this.getNextPhotos.bind(this)
    this.selectPhoto = this.selectPhoto.bind(this)
  }

  getNextPhotos() {
    if (this.props.fetchingPhotos) return;
    this.props.dispatch(getPhotos({ first: this.props.numberOfPhotosToLoad, after: this.props.lastLoadedPhotoCursor }))
  }

  getPermission() {
    getReadExternalStoragePermission().then(granted => {
      this.props.dispatch(updateReadExternalStoragePermission(true))
      this.getNextPhotos()
    }).catch(error => {
      this.props.dispatch(updateReadExternalStoragePermission(false))
    })
  }

  selectPhoto(photo) {
    this.props.dispatch(selectPhoto(photo))
  }

  componentDidMount() {
    console.log('here')
    this.getPermission()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.selectedPhotoContainer}>
          {this.props.selectedPhoto
            ? <Image resizeMode='contain' style={styles.selectedPhoto} source={{ uri: this.props.selectedPhoto.node.image.uri }} />
            : <View style={styles.centered}>
              {this.props.readExternalStoragePermission
                ? <Text style={styles.bigText}>Select a photo...</Text>
                : <View style={styles.centered}>
                  <Text style={styles.bigText}>We need your permission to access the gallery.</Text>
                  <Button label='Grant' onPress={this.getPermission} />
                </View>}

            </View>
          }
        </View>
        <View style={styles.photos}>
          <FlatList
            data={this.props.photos}
            keyExtractor={(item) => { return item.node.image.uri }}
            numColumns={this.props.numberOfPhotosOnRow}
            renderItem={({ item }) =>
              <TouchableOpacity onPress={() => { this.selectPhoto(item) }}>
                <Image
                  source={{ uri: item.node.image.uri }}
                  style={{
                    width: Dimensions.get('window').width / this.props.numberOfPhotosOnRow,
                    height: Dimensions.get('window').width / this.props.numberOfPhotosOnRow,
                  }}
                />
              </TouchableOpacity>}
            onEndReachedThreshold={0}
            onEndReached={this.getNextPhotos}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selectedPhotoContainer: {
    flex: 2.5,
    borderBottomWidth: 2,

  },
  selectedPhoto: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  photos: {
    flex: 1.5,
    backgroundColor: 'blue'
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bigText: {
    fontSize: 30
  }
})

export default connect(mapStateToProps, dispatch => ({ dispatch }))(ChoosePhoto)
import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import t from 'tcomb-form-native'
const Form = t.form.Form

import { createPost } from './../actions'
import forms from './../forms'
import { Button } from '.'


function mapStateToProps(state) { return {} }

class Home extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {
    let values = this.refs.postCreateForm.getValue()

    console.log('here', this)
    this.props.dispatch(createPost(values))
  }

  render() {
    return (
      <View>
        <Form
          ref='postCreateForm'
          type={forms.postCreate.type}
          options={forms.postCreate.options} />

        <Button label='Create Post' onPress={this.onSubmit} />
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

export default connect(mapStateToProps, dispatch => ({ dispatch }))(Home)
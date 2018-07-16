import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import t from 'tcomb-form-native'
const Form = t.form.Form

import { createPost } from './../actions'
import forms from './../forms'
import { Button } from '.'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {
    let values = this.refs.postCreateForm.getValue()

    if (!values) return;

    createPost(values)
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
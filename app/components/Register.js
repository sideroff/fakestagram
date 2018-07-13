import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, Button } from 'react-native'
import t from 'tcomb-form-native'
const Form = t.form.Form

import forms from './../forms'
import { register } from './../actions'

function mapStateToProps(state) {
  return {}
}

class Register extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {
    console.log('reg submit', this.refs)
    let values = this.refs.registerForm.getValue()

    if (!values) return;

    this.props.dispatch(register(values))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logoText}>fakestagram</Text>
        <View style={styles.formContainer}>
          <Form
            ref='registerForm'
            type={forms.register.type}
            options={forms.register.options}
          />
        </View>

        <Button title='register' onPress={this.onSubmit}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  formContainer: {
    width: 200
  }
})

export default connect(mapStateToProps, dispatch => ({ dispatch }))(Register)
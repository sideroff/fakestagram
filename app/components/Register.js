import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'
import t from 'tcomb-form-native'
const Form = t.form.Form

import forms from './../forms'
import { register } from './../actions'
import { Button } from '.'
import types from './../actions/types'
const authStates = types.authStates

function mapStateToProps(state) {
  return {
    isRegistering: state.flags.isRegistering,
    messages: state.messages
  }
}

class Register extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {
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

        {this.props.messages.register && <Text>{this.props.messages.register}</Text>}

        <Button label='register' onPress={this.onSubmit} disabled={this.props.authState === authStates.registering} />
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
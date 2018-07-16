import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'
import t from 'tcomb-form-native'
const Form = t.form.Form

import { Button } from '.'
import forms from './../forms'
import { login } from './../actions'
import types from './../actions/types'
const authStates = types.authStates


function mapStateToProps(state) {
  return {
    authState: state.flags.authState,
    messages: state.messages
  }
}


class Login extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {
    let values = this.refs.loginForm.getValue()

    if (!values) return

    this.props.dispatch(login(values))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logoText}>fakestagram</Text>
        <View style={styles.formContainer}>
          <Form
            ref='loginForm'
            type={forms.login.type}
            options={forms.login.options}
          />
        </View>

        {this.props.messages.login && <Text>{this.props.messages.login}</Text>}

        <Button label='Login' onPress={this.onSubmit} disabled={this.props.authState === authStates.loggingIn} />
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

export default connect(mapStateToProps, dispatch => ({ dispatch }))(Login)
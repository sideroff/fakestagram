import t from 'tcomb-form-native'

export default {
  login: {
    type: t.struct({
      email: t.String,
      password: t.String,
    }),
    options: {
      fields: {
        password: {
          secureTextEntry: true,
        }
      }
    }
  },
  register: {
    type: t.struct({
      email: t.String,
      password: t.String,
      confirmPassword: t.String,
    }),
    options: {
      fields: {
        password: {
          secureTextEntry: true,
        },
        confirmPassword: {
          secureTextEntry: true,
        }
      }
    }
  },
  postCreate: {
    type: t.struct({
      title: t.String,
      description: t.String,
      image: t.String,
    }),
    options: {}
  }
}
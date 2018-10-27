import React, { Component } from 'react'
import * as API from '../../utils'

export class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault()

  }

  render() {
    const { email, password } = this.state

    return(
      <form onSubmit={this.handleSubmit}>
        <h2>Have an account?</h2>
        <input
          className="email-login"
          type="email"
          name="email"
          value={email}
          onChange={this.handleInputChange}
          placeholder="wes@anderson.com"
        />
        <input
          className="password-login"
          type="password"
          name="password"
          value={password}
          onChange={this.handleInputChange}
          placeholder="Type password here"
        />
      </form>
    )
  }
}

export default LoginForm;
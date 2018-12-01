import React, { Component } from "react"
import "./SignUp.css"

// import SignUpInput from "./SignUpInput"

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.validate = this.validate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  validate(input) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return emailRegex.test(input)
  }
  
  handleSubmit(event) {
    alert(`Thanks for signing up with your email, ${this.state.value}!`)
    event.preventDefault()
  }

  render() {
    return (
      <form className="SignUp" onSubmit={this.handleSubmit}>
        <h2>only seconds away</h2>
        <p>join our mailing list</p>
        <input type="text" placeholder="email" value={this.state.value} onChange={this.handleChange} />
        {this.validate(this.state.value) && <button type="submit">Submit</button>}
      </form>
    )
  }
}

export default SignUp

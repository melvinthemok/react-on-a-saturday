import React, { Component } from "react"
import "./App.css"

import Header from "./components/Header"
import SignUp from "./components/SignUp"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {apiValue: null}
  }

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Singapore&APPID=${PROCESS.ENV.API_KEY}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            apiValue: result.weather[0].description
          })
        },
        (error) => {
          this.setState({
            error
          })
        }
      )
  }

  render() {
    return (
      <div className="App">
        <Header />
        <h1>The solution to life's problems, {this.state.apiValue}</h1>
        <SignUp />
      </div>
    )
  }
}

export default App

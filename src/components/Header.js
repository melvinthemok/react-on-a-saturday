import React from "react"
import "./Header.css"

import HeaderItem from "./HeaderItem"

const Header = () => (
  <div className="Header">
    <HeaderItem
      text="Home"
      link="https://www.google.com"
    />
    <HeaderItem
      text="Help"
      link="https://www.bing.com"
    />
  </div>
)

export default Header

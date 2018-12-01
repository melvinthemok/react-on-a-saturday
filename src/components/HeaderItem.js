import React from "react"
import "./HeaderItem.css"

const HeaderItem = (props) => (
  <a href={props.link}>
    <p className="HeaderItem">{props.text}</p>
  </a>
)

export default HeaderItem

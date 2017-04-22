// Simple Typescript + ReactJS + Webpack example
// Copyright (c) 2017 Javier Arevalo
// MIT license: https://opensource.org/licenses/MIT

import * as React from "react"
import * as ReactDOM from "react-dom"
import Hello from "./Hello"

// Making arrays of elements
function makeList(): JSX.Element[] {
  return ["React", "Typescript", "Webpack", "UglifyJS"].map( (v, i) =>
    <li key={i}><Hello name={v} /></li>
  )
}

// Stateless component
const Panel: React.SFC<{title: string}> = (props) =>
  // Always a single node (may have children)
  <div>
    <h1>{props.title}</h1>
    <ul>{ makeList() }</ul>
  </div>

// Root node
ReactDOM.render(
  <Panel title="Typescript ReactJS Webpack demo" />,
  document.getElementById("root")
)

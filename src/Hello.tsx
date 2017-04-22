// Simple Typescript + ReactJS + Webpack example
// Copyright (c) 2017 Javier Arevalo
// MIT license: https://opensource.org/licenses/MIT

import * as React from "react"

interface IProps {
  name: string
}

interface IState {
  shown: boolean
}

class Hello extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = { shown: false }
  }

  public render(): JSX.Element {
    return <div>
           <button onClick={this.clicked}>Hello</button>
           { this.state.shown ? <span> {this.props.name}</span> : null }
           </div>
  }

  // Event handler
  private clicked = (e: React.MouseEvent<HTMLInputElement>): void => {
      this.setState({ ...this.state, shown: !this.state.shown})
  }
}

export default Hello

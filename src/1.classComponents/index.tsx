import React, { Component } from "react";

interface State {
  counter: number;
}

interface Props {
  title: string;
  namaHalaman?: string;
}

export default class ClassComp extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0,
    };
    this._delCount = this._delCount.bind(this);
  }

  _addCount(): void {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  _delCount(): void {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  _xCount(param: number): void {
    this.setState({
      counter: param * 2,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.state.counter}
        <div>
          <button onClick={this._addCount.bind(this)}>Add Count</button>
          <button onClick={() => this._addCount()}>Add Count</button>
        </div>
        <div>
          <button onClick={this._delCount}>Del Count</button>
        </div>
        <div>
          <button onClick={this._xCount.bind(this, this.state.counter)}>
            X Count
          </button>
        </div>
        <h1>{this.props?.namaHalaman}</h1>
      </div>
    );
  }
}

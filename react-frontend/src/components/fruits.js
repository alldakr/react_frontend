import React from 'react';
import { Button } from 'antd';
// import Header from './components/Header';
class Counter1 extends React.Component {
  state = {
    value: this.props.initialValue,
  };

  onClick = () => {
    const { value } = this.state;
    this.setState({
      value: value + 1,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        Counter1: {value}
        <Button onClick={this.onClick}>+1</Button>
      </div>
    );
  }
}

class FruitComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>좋아하는 과일</h1>
        <ul>
          {this.props.fruits.map((name, idx) => {
            return <li key={idx}>{name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    const fruits = ['바나나', '사과', 'Apple'];
    return (
      <div>
        <Counter1 initialValue={5} />
        <FruitComponent fruits={fruits} />
      </div>
    );
  }
}

export default App;

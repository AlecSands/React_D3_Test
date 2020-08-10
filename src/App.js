import React from 'react';
import * as d3 from 'd3';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount(){
    console.log(this.myRef);
    d3.select(this.myRef.current)
     .append('p')
     .text('Hello from D3');
  }
  render(){
    return (
      <div ref={this.myRef}>
      </div>
    );
  }

}
export default App;

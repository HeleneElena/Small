import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [0, 1, 2, 3, 4, 5, 6, 7, 8]
    }
  }

  clickHandler = event => {
    
  }
  render() {
    return (
      <div className='tic-tac'>
        <div className='t-grid' onClick={this.clickHandler} data='0'> {this.state.squares[0]} </div>
        <div className='t-grid' onClick={this.clickHandler} data='0'> {this.state.squares[1]} </div>
        <div className='t-grid' onClick={this.clickHandler} data='0'> {this.state.squares[2]} </div>
        <div className='t-grid' onClick={this.clickHandler} data='0'> {this.state.squares[3]} </div>
        <div className='t-grid' onClick={this.clickHandler} data='0'> {this.state.squares[4]} </div>
        <div className='t-grid' onClick={this.clickHandler} data='0'> {this.state.squares[5]} </div>
        <div className='t-grid' onClick={this.clickHandler} data='0'> {this.state.squares[6]} </div>
        <div className='t-grid' onClick={this.clickHandler} data='0'> {this.state.squares[7]} </div>
        <div className='t-grid' onClick={this.clickHandler} data='0'> {this.state.squares[8]} </div>
      </div>
    )
  }
}

export default App;

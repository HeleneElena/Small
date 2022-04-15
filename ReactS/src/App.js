import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null), 
      count: 0
    }
  }

  clickHandler = event => {
    let data = event.target.getAttribute('data');
    let currentSquares = this.state.squares;
    this.setState({squares: currentSquares});
    currentSquares[data] = (this.state.count % 2 === 0) ? 'X' : '0';
    this.setState({count: this.state.count + 1});
    this.setState({squares: currentSquares});
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

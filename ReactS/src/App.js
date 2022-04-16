import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null), 
      count: 0
    }
    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [1, 4, 7],
      [0, 3, 6],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  }

  isWinner = () => {
    let s = (this.state.count % 2 === 0) ? 'X' : '0';
    for (let i = 0; i < ß; i++) {
      let line = this.winnerLine[i];
      if (this.state.squares[line[0]] === s &&
        this.state.squares[line[1]] === s &&
        this.state.squares[line[2]] === s ) {
          alert (s + 'win');
          setTimeout(() => {
            this.setState({squares: Array(9).fill(null)});
            this.setState({count: 0});
          }, 3000)
        }
      }
  }

  clickHandler = event => {
    let data = event.target.getAttribute('data');
    let currentSquares = this.state.squares;
    this.setState({squares: currentSquares});
    if (currentSquares[data] === null) {
      currentSquares[data] = (this.state.count % 2 === 0) ? 'X' : '0';
      this.setState({count: this.state.count + 1});
      this.setState({squares: currentSquares});
    } else {
      alert ('So darf man nicht!!!')
    }
    this.isWinner();
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

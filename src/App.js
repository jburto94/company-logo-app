import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      sizeTerm: '250',
      searchImage: 'google.com/',
      imageSize: '250'
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onSizeChange = this.onSizeChange.bind(this);
  }


  onSearchChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  onSizeChange(e) {
    this.setState({ sizeTerm: e.target.value });
  }

  onSearchSubmit(e) {
    e.preventDefault();
    const {searchTerm, sizeTerm} = this.state;
    this.setState({ 
      searchImage: searchTerm,
      imageSize: sizeTerm
    });
  }

  render() {
    const URL = 'https://logo.clearbit.com/';
    const {searchImage, imageSize} = this.state;

    return (
      <div className="App">
        <form onSubmit={this.onSearchSubmit}>
          <input type='text'
                 placeholder='Enter Company URL Here'
                 onChange={this.onSearchChange} 
                 className='urlInput' />
          <input type='text'
                 placeholder='Enter Logo Size Up to 800'
                 onChange={this.onSizeChange} 
                 className='sizeInput' />
          <input type="submit" value="GET YOUR LOGO" className='submitButton' />
        </form>
        <img src={`${URL}${searchImage}?size=${imageSize}`} 
             alt={searchImage} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Form from './Form';
import Search from './Search';
import Size from './Size';
import Logo from './Logo';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      sizeTerm: '',
      searchImage: 'google.com/',
      imageSize: ''
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
    const {searchImage, imageSize} = this.state;
  
    return (
      <div className="App">
        <Form onSubmit={this.onSearchSubmit}>
          <Search onChange={this.onSearchChange} />
          <Size onChange={this.onSizeChange} />
        </Form>
        <Logo image={searchImage} size={imageSize} />
      </div>
    );
  }
}

export default App;

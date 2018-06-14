import React, {Component} from 'react';

class Search extends Component {
  render() {
    return (
      <input type='text'
              placeholder='Enter Company URL Here'
              onChange={this.props.onChange} 
              className='urlInput' />
    )
  }
}

export default Search;
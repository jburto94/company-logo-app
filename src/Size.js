import React, {Component} from 'react';
import './Input.css';

class Size extends Component {
  render() {
    return (
      <input type='text'
              placeholder='Edit Logo Size Up to 800'
              onChange={this.props.onChange} 
              className='sizeInput' />
    )
  }
}

export default Size;
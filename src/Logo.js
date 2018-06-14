import React, {Component} from 'react';

class Logo extends Component {
  render() {
    const URL = 'https://logo.clearbit.com/';
    const {image, size} = this.props;

    return (
      <img src={`${URL}${image}?size=${size}`} 
           alt={image} />
    )
  }
}

export default Logo;
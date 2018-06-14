import React, {Component} from 'react';

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        {this.props.children}
        <input type='submit' class='submitButton' value='GET YOUR LOGO' />
      </form>
    )
  }
}

export default Form;
import React from 'react';

import './styles.scss';

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }
  }

  handleInputChange = (e) => {
    this.setState({ value: e.target.value });
  }

  // handleClickPost = () => {
  //
  // }

  render() {
    return (
      <div className="input">
        <input
          type="text"
          autoFocus
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        <button onClick={this.props.onClick}>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    );
  }
};

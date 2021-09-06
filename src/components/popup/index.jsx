import React from 'react';

import './styles.scss';

export default class PopUp extends React.Component {
  render() {
    const { onCancel, onAdd, onChange, value } = this.props;
    return (
      <div className="pop-up">
        <div>
          <i className="far fa-folder"></i>
          <input
            autoFocus
            value={value}
            id="new-recipe"
            name="new-recipe"
            onChange={onChange}
          />
        </div>
        <div>
          <button className="add" onClick={onAdd}>
            <i className="fas fa-check"></i>
          </button>
          <button className="cancel" onClick={onCancel}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    )
  }
};

import React from 'react';

import './styles.scss';

export default class Control extends React.Component {
  renderButtonLeft = (id) => {
    if (id) {
      return (
        <button className="home" onClick={this.props.onHome}>
          <i className="fas fa-home"></i>
        </button>
      )
    } else {
      return (
        <button className="view">
          <i className="far fa-eye"></i>
        </button>
      )
    }
  }
  renderButtonEdit = (condition) => {
    if (condition) {
      return (
        <button className="done" onClick={this.props.onDone}>
          <i className="fas fa-check"></i>
        </button>
      )
    } else {
      return (
        <button className="edit" onClick={this.props.onEdit}>
          <i className="fas fa-pen"></i>
        </button>
      )
    }
  }

  renderControl = (id, condition) => {
    return (
      <div className="control">
        {this.renderButtonLeft(id)}
        {this.renderButtonEdit(condition)}
        <button className="add" onClick={this.props.onAdd}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    )
  }

  render() {
    const { recipeId, isEditMode } = this.props;

    return this.renderControl(recipeId, isEditMode);
  }
};

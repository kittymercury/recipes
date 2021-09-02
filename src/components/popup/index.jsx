import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import './styles.scss';

export default class PopUp extends React.Component {
  handleChangeNewRecipe = (e) => {
    this.setState({ e: e.target.value })
  }

  render() {

    return (
      <div className="pop-up">
        <div>
          <i className="far fa-folder"></i>
          <TextareaAutosize
            autoFocus
            id="new-recipe"
            name="new-recipe"
            onChange={this.handleChangeNewRecipe}
          />
        </div>
        <div>
          <button className="add">
            <i className="fas fa-check"></i>
          </button>
          <button className="cancel">
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    )
  }
};

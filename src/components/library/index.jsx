import React from 'react';

import './styles.scss';

export default class Library extends React.Component {
  renderFolderIcon = (condition) => {
    if (condition) {
      return (
        <div className="icon">
          <i className="far fa-folder"></i>
        </div>
      )
    }
  }

  renderLibrary = (condition) => {
    const {
      recipes,
      view,
      order,
      onClickRecipe,
      onCheckRecipe
    } = this.props;

    if (condition) {
      return (
        <div className={`recipes list ${order}`}>
          {recipes.map((recipe) => {
            return (
              <div className="item-checkbox" key={recipe.id}>
                <input type="checkbox" checked={recipe.checked} onChange={(e) => onCheckRecipe(recipe.id, e.target.checked)}/>
                <span>{recipe.name}</span>
              </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <div className={`recipes ${view} ${order}`}>
          {recipes.map((recipe) => {
            return (
              <div key={recipe.id} className="item" onClick={() => onClickRecipe(recipe.id)}>
                {this.renderFolderIcon(view === 'gallery')}
                <div className="name">{recipe.name}</div>
              </div>
            )
          })}
        </div>
      )
    }
  }

  render() {
    const { isDeleteMode } = this.props;

    return (
      <div>
        {this.renderLibrary(isDeleteMode)}
      </div>
    );
  }
};

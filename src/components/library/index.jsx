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
    if (condition) {
      const { recipes, view, order, onClickRecipe, isDeleteMode } = this.props;
      return (
        <div className={`recipes list ${order}`}>
          {recipes.map((recipe) => {
            return (
              <div className="item-checkbox" key={recipe.id}>
                <input type="checkbox" value={recipe.id}/>
                <span>{recipe.name}</span>
              </div>
            )
          })}
        </div>
      )
    }
  }

  render() {
    const { recipes, view, order, onClickRecipe, isDeleteMode } = this.props;

    return (
      <div>
        {/* <div className={`recipes ${view} ${order}`}>
          {recipes.map((recipe) => {
            return (
              <div key={recipe.id} className="item" onClick={() => onClickRecipe(recipe.id)}>
                {this.renderFolderIcon(view === 'gallery')}
                <div className="name">{recipe.name}</div>
              </div>
            )
          })}
        </div> */}
        {this.renderLibrary(isDeleteMode)}
      </div>
    );
  }
};

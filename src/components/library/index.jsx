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

  render() {
    const { recipes, view, order, onClickRecipe } = this.props;

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
    );
  }
};

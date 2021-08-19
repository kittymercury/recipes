import React from 'react';

import './styles.scss';
import Recipe from '../recipe';

export default class Library extends React.Component {

  render() {
    const { view, recipes, isInputVisible } = this.props;

    return (
      <div className="library">
        {recipes.map((recipe) => {
          const onClick = () => this.props.onClick(recipe.id);
          return (
            <div key={recipe.id} className="item" onClick={onClick}>
              <div className="icon">
                <i className="far fa-folder"></i>
              </div>
              <div className="name">{recipe.name}</div>
            </div>
          )
        })}
      </div>
    );
  }
};

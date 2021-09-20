import React from 'react';

import './styles.scss';

export default class Library extends React.Component {
  render() {
    const { recipes, view, order } = this.props;

    return (
      <div className={`recipes ${view} ${order}`}>
        {recipes.map((recipe) => {
          const onClickItem = () => this.props.onClick(recipe.id);
          return (
            <div key={recipe.id} className="item" onClick={onClickItem}>
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

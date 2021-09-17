import React from 'react';

import './styles.scss';

export default class Library extends React.Component {
  render() {
    const { view } = this.props;

    return (
      <div className={`recipes ${view}`}>
        {this.props.recipes.map((recipe) => {
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

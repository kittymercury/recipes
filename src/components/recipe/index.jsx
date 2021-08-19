import React from 'react';

import './styles.scss';

export default class Recipe extends React.Component {
  render() {
    const { recipes, recipeId, isInputVisible } = this.props;
    const recipe = recipes.find((r) => r.id === recipeId);


    return (
      <div className="recipe">
        <div className="ingredients">
          {recipe.ingredients.map((ingr) => {
            return <div>{ingr}</div>
          })}
        </div>
        <div className="instruction">
          {recipe.instruction.map((instr) => {
            return <div>{instr}</div>
          })}
        </div>
      </div>
    );
  }
};

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

  handleClickItem = (id) => {
    const { isDeleteMode, recipes, selectedRecipes } = this.props;

    if (!isDeleteMode) {
      this.props.app.setState({ recipeId: id });
    }

    if (isDeleteMode) {
      const rcp = recipes.find((r) => r.id === id);
      const $recipe = document.getElementById(`${id}`);
      console.log({id: id, recipe: $recipe});
      const isSelected = selectedRecipes.includes(id);

      if (isSelected) {
        $recipe.classList.toggle('selected');
        const filteredSelectedRecipes = selectedRecipes.filter((id) => id !== rcp.id);
        this.props.app.setState({ selectedRecipes: filteredSelectedRecipes })
      }

      if (!isSelected) {
        $recipe.classList.toggle('selected');
        this.setState({ selectedRecipes: selectedRecipes.concat(rcp.id) })
      }
    }
  }


  render() {
    const {
      recipes,
      view,
      order,
      isDeleteMode,
    } = this.props;

    return (
      <div>
        {(isDeleteMode)
          ? (
            <div className={`recipes list ${order}`}>
              {recipes.map((recipe) => {
                return (
                  <div className="item" key={recipe.id} id={recipe.id} onClick={() => this.handleClickItem(recipe.id)}>
                    <div className="select">
                      <i className="far fa-circle"></i>
                      <i className="fas fa-circle"></i>
                    </div>
                    <span>{recipe.name}</span>
                  </div>
                )
              })}
            </div>
          )
          : (
            <div className={`recipes ${view} ${order}`}>
              {recipes.map((recipe) => {
                return (
                  <div key={recipe.id} id={recipe.id} className="item" onClick={() => this.handleClickItem(recipe.id)}>
                    {this.renderFolderIcon(view === 'gallery')}
                    <div className="name">{recipe.name}</div>
                  </div>
                )
              })}
            </div>
          )
        }}
      </div>
    );
  }
};

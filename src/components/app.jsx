import React from 'react';

import Control from './control';
import Library from './library';
import Recipe from './recipe';

// TODO: textarea for 2 areas in Recipe (div onclick -> textarea)
// TODO: search better style for Control (dropdown menu or sidebar)


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'list', // or gallery
      recipeId: null,
      recipes: [
        { id: 1,
          name: 'Lasagne',
          ingredients: ['beef 500g', 'cheese 200g', 'bolognese 450g', 'lasagne leaves', 'for bechamel:', 'milk', 'butter', 'muscat nut' ],
          procedure: [ 'de do de do daaaaaaaa', 'bolognese sauce! i love this sauce sooo much. it is hard to find good bolognese sauce in local stores.. but today i\'ve done it! and now it is waiting for it\'s time to become a part of the masterpiece of art <3' ]
        },
        { id: 2,
          name: 'Tuna salad',
          ingredients: ['tuna in oil', 'tomatoes', 'letucce'],
          procedure: ['eat', 'cry', 'suffer', 'vomit', 'smile', 'relax']
        },
        { id: 3,
          name: 'Peanut butter',
          ingredients: ['peanuts', 'honey', 'salt'],
          procedure: ['roast', 'grind', 'mix']
        }
      ],
      isEditMode: false
    }
  }

  // library
  handleClickItem = (id) => {
    this.setState({ recipeId: id, isEditMode: false });
  }

  // control
  handleClickHome = () => {
    this.setState({ recipeId: null, isEditMode: false });
  }

  // handleClickAdd = () => {
  //   this.setState({ isInputVisible: true });
  // }

  handleClickDone = () => {
    this.setState({ isEditMode: false });
  }

  handleClickEdit = () => {
    this.setState({ isEditMode: true });
  }

  // input
  // handleClickPost = () => {
  //   const { value, recipes, isInputVisible } = this.state;
  //   const isRecipeExist = recipes.find((recipe) => recipe.name === value);
  //
  //   if (value && value.trim() && !isRecipeExist) {
  //     const newRecipe = {
  //       id: +new Date(),
  //       name: value,
  //       ingredients: [],
  //       procedure: []
  //     }
  //     const newRecipes = recipes.concat(newRecipe);
  //
  //     return this.setState({ recipes: newRecipes, isInputVisible: false })
  //   }
  //
  //   if (!value && !value.trim()) {
  //     alert('enter something!')
  //   }
  //
  //   if (isRecipeExist) {
  //     alert('exist!')
  //   }
  // }

  renderPage = (condition) => {
    const {
      view,
      recipeId,
      recipes,
      isInputVisible,
      isEditMode
    } = this.state;

    if (condition) {
      return (
        <Recipe
          recipes={recipes}
          recipeId={recipeId}
          isEditMode={isEditMode}
        />
      )
    } else {
      return (
        <Library
          view={view}
          recipes={recipes}
          onClick={this.handleClickItem}
        />
      )
    }
  }

  render() {
    const { view, recipeId, recipes, isEditMode } = this.state;

    return (
      <div className="recipes">
        <Control
          recipeId={recipeId}
          isEditMode={isEditMode}
          onHome={this.handleClickHome}
          onAdd={this.handleClickAdd}
          onDone={this.handleClickDone}
          onEdit={this.handleClickEdit}
        />
        {this.renderPage(recipeId)}
      </div>
    );
  }
};

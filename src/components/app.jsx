import React from 'react';

import Control from './control';
import Library from './library';
import Recipe from './recipe';
import Input from './input';

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
          ingredients: ['beef', 'cheese', 'bolognese', 'milk', 'butter', 'lasagne leaves'],
          instruction: ['lalala', 'lololo', 'fuck', 'scream', 'mix']
        },
        { id: 2,
          name: 'Tuna salad',
          ingredients: ['tuna in oil', 'tomatoes', 'letucce'],
          instruction: ['eat', 'cry', 'suffer', 'vomit', 'smile', 'relax']
        },
        { id: 3,
          name: 'Peanut butter',
          ingredients: ['peanuts', 'honey', 'salt'],
          instruction: ['roast', 'grind', 'mix']
        }
      ],
      isInputVisible: false,
      isEditMode: false
    }
  }

  // library
  handleClickItem = (id) => {
    this.setState({ recipeId: id });
  }

  // control
  handleClickHome = () => {
    this.setState({ recipeId: null });
  }

  handleClickAdd = () => {
    this.setState({ isInputVisible: true });
  }

  handleClickDone = () => {
    this.setState({ isInputVisible: false, isEditMode: false });
  }

  handleClickEdit = () => {
    this.setState({ isInputVisible: true, isEditMode: true });
  }

  // input
  handleClickPost = () => {
    const { value, recipes, isInputVisible } = this.state;
    const isRecipeExist = recipes.find((recipe) => recipe.name === value);

    if (value && value.trim() && !isRecipeExist) {
      const newRecipe = {
        id: +new Date(),
        name: value,
        ingredients: [],
        instruction: []
      }
      const newRecipes = recipes.concat(newRecipe);

      return this.setState({ recipes: newRecipes, isInputVisible: false })
    }

    if (!value && !value.trim()) {
      alert('enter something!')
    }

    if (isRecipeExist) {
      alert('exist!')
    }
  }

  renderPage = (condition) => {
    const { view, recipeId, recipes, isInputVisible } = this.state;

    if (condition) {
      return (
        <Recipe
          recipes={recipes}
          recipeId={recipeId}
          isInputVisible={isInputVisible}
        />
      )
    } else {
      return (
        <Library
          view={view}
          recipes={recipes}
          isInputVisible={isInputVisible}
          onClick={this.handleClickItem}
        />
      )
    }
  }

  renderInput = (condition) => {
    if (condition) {
      return (
        <Input onClick={this.handleClickPost} />
      )
    } else {
      return;
    }
  }

  render() {
    const { view, recipeId, recipes, isInputVisible, isEditMode } = this.state;

    return (
      <div className="recipes">
        <Control
          recipeId={recipeId}
          isInputVisible={isInputVisible}
          isEditMode={isEditMode}
          onHome={this.handleClickHome}
          onAdd={this.handleClickAdd}
          onDone={this.handleClickDone}
          onEdit={this.handleClickEdit}
        />
        {this.renderPage(recipeId)}
        {this.renderInput(isInputVisible)}
      </div>
    );
  }
};

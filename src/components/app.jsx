import React from 'react';

// import Control from './control';
import Library from './library';
import Recipe from './recipe';

// TODO: textarea for 2 areas in Recipe (div onclick -> textarea)
// TODO: search better style for Control (dropdown menu or sidebar)


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
      isEditMode: false,
      isMenuActive: false
    }
  }

  // library
  handleClickItem = (id) => {
    this.setState({ recipeId: id, isEditMode: false });
  }

  // control
  handleClickBack = () => {
    this.setState({ recipeId: null, isEditMode: false });
  }

  // handleClickAdd = () => {
  //   this.setState({ isInputVisible: true });
  // }

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
      recipeId,
      recipes,
      isMenuActive,
      isEditMode
    } = this.state;

    if (condition) {
      return (
        <Recipe
          isMenuActive={isMenuActive}
          clickBack={this.handleClickBack}
          recipes={recipes}
          recipeId={recipeId}
          isEditMode={isEditMode}
        />
      )
    } else {
      return (
        <Library
          isMenuActive={isMenuActive}
          recipes={recipes}
          onClick={this.handleClickItem}
        />
      )
    }
  }

  render() {
    const { recipeId, recipes, isEditMode, isMenuActive } = this.state;

    return (
      <div className="recipes">
        {this.renderPage(recipeId)}
      </div>
    );
  }
};

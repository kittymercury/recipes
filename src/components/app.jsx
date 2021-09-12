import React from 'react';

import Library from './library';
import Recipe from './recipe';
import PopUp from './popup';

// TODO:
// 1. height of recipe page

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
      isMenuActive: true,

      popUp: null,
      value: ''
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

  // popup
  handleOpenPopUp = (popUp) => {
    this.setState({ popUp, isMenuActive: false })
  }

  handleClickAdd = () => {
    const { value, recipes } = this.state;

    if (value && value.trim()) {
      const newRecipe = {
        id: +new Date(),
        name: value,
        ingredients: [],
        procedure: []
      }
      const newRecipes = recipes.concat(newRecipe);

      return this.setState({ recipes: newRecipes, popUp: null, value: '' })
    }
  }

  handleChangeValue = (e) => {
    this.setState({ value: e.target.value })
  }

  handleClickCancel = () => {
    this.setState({ popUp: null, value: '' })
  }

  // sidebar
  handleClickOpenSidebar = () => {
    this.setState({ isMenuActive: true })
  }

  handleClickCloseSidebar = () => {
    this.setState({ isMenuActive: false })
  }

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
          onOpenPopUp={this.handleOpenPopUp}
          onOpenSidebar={this.handleClickOpenSidebar}
          onCloseSidebar={this.handleClickCloseSidebar}
        />
      )
    }
  }

  render() {
    const {
      recipeId,
      recipes,
      isEditMode,
      isMenuActive,
      popUp,
      value
    } = this.state;

    return (
      <div className="recipes">
        {popUp && (
            <PopUp
              value={value}
              onAdd={this.handleClickAdd}
              onCancel={this.handleClickCancel}
              onChange={this.handleChangeValue}
            />
          )}
        {this.renderPage(recipeId)}
      </div>
    );
  }
};

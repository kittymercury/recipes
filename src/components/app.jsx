import React from 'react';

import Library from './library';
import Recipe from './recipe';
import PopUp from './popup';
import Sidebar from './sidebar';

// TODO:
// 1. height of recipe page +
// 2. height of library page with sidebar active
// 3. 1 handler for edit recipe and library
// 4. check state of library, improve it
// 5. improve all styles on library page

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
        },
        { id: 4,
          name: 'Walnut butter',
          ingredients: ['walnuts', 'honey', 'salt'],
          procedure: ['roast', 'grind', 'mix']
        },
        { id: 5,
          name: 'Almond butter',
          ingredients: ['almonds', 'honey', 'salt'],
          procedure: ['roast', 'grind', 'mix']
        },
        { id: 6,
          name: 'Hazelnut butter',
          ingredients: ['hazelnuts', 'honey', 'salt'],
          procedure: ['roast', 'grind', 'mix']
        },
        { id: 7,
          name: 'Cashew butter',
          ingredients: ['cashews', 'honey', 'salt'],
          procedure: ['roast', 'grind', 'mix']
        },
        { id: 8,
          name: 'Pistachio butter',
          ingredients: ['pistachios', 'honey', 'salt'],
          procedure: ['roast', 'grind', 'mix']
        },
      ],
      value: '',
      popUp: null,

      isEditMode: false,
      isMenuActive: true,
      isDeleteMode: false,
      isRenameMode: true,

      fontSize: '15',
      view: 'column'
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

  handleClickRemove = () => {
    this.setState({ isDeleteMode: true })
  }

  handleClickRename = () => {
    this.setState({ isRenameMode: true })
  }

  renderPage = (condition) => {
    const {
      recipeId,
      recipes,
      isMenuActive,
      isEditMode,
      isRenameMode,
      isDeleteMode
    } = this.state;

    if (condition) {
      return (
        <Recipe
          isMenuActive={isMenuActive}
          clickBack={this.handleClickBack}
          recipes={recipes}
          recipeId={recipeId}
          isEditMode={isEditMode}
          isRenameMode={isRenameMode}
          isDeleteMode={isDeleteMode}
        />
      )
    } else {
      return (
        <div className="library-wrapper">
          <div className="header" onClick={this.handleClickOpenSidebar}>
            <i className="fas fa-bars"></i>
            <span>Library</span>
          </div>
          <Library
            recipes={recipes}
            onClick={this.handleClickItem}
            isMenuActive={isMenuActive}
            onOpenPopUp={this.handleOpenPopUp} // ? check
            onCloseSidebar={this.handleClickCloseSidebar}
          />
          <Sidebar
            isMenuActive={isMenuActive}
            onOpenPopUp={this.handleOpenPopUp}
            onCloseSidebar={this.handleClickCloseSidebar}
            onClickRemove={this.handleClickRemove}
            onClickRename={this.handleClickRename}
          />
        </div>
      )
    }
  }

  render() {
    const {
      recipeId,
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

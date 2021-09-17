import React from 'react';

import Library from './library';
import Recipe from './recipe';
import PopUp from './popup';
import Sidebar from './sidebar';

// TODO:
// 1. height of recipe page +
// 6. scroll only sidebar if it is opened +
// 5. improve all styles on library page +
// 2. height of library page with sidebar active +
// 4. check state of library, improve it +
// 9. add enter and escape for popup +
// 8. go to new recipe after add +
// 3. 1 handler for edit recipe and library
// 7. smooth appear of sidebar
// 9. refactor css and jsx in recipe component
// 10. reverse items order in library
// 11. order from new to old ... in state
// 12. add check symbol on active appearance state in submenu

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
      isSidebarActive: true,
      isDeleteMode: false,
      isRenameMode: true,

      fontSize: '15',
      view: 'list',
      order: 'newest-to-oldest'
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
    this.setState({ popUp, isSidebarActive: false })
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

      return this.setState({
        recipes: newRecipes,
        popUp: null,
        value: '',
        recipeId: newRecipe.id
      })
    }
  }

  handleChangeValue = (e) => {
    this.setState({ value: e.target.value })
  }

  handleClickCancel = () => {
    this.setState({ popUp: null, value: '' })
  }

  handlePressKey = (e) => {
    if (e.keyCode === 13) {
      this.handleClickAdd();
    }
    if (e.keyCode === 27) {
      this.handleClickCancel();
    }
  }


  // sidebar
  handleClickOpenSidebar = () => {
    this.setState({ isSidebarActive: true })
  }

  handleClickCloseSidebar = () => {
    this.setState({ isSidebarActive: false })
  }

  handleClickRemove = () => {
    this.setState({ isDeleteMode: true })
  }

  handleClickRename = () => {
    this.setState({ isRenameMode: true })
  }

  handleClickChangeView = (activeView) => {
    this.setState({ view: activeView })
  }

// render content

  renderPage = (condition) => {
    if (condition) {
      const { recipeId, recipes, isEditMode } = this.state;

      return (
        <Recipe
          clickBack={this.handleClickBack}
          recipes={recipes}
          recipeId={recipeId}
          isEditMode={isEditMode}
        />
      )
    } else {
      const { recipes, isRenameMode, isDeleteMode, view } = this.state;

      return (
        <div className="library">
          <div className="header" onClick={this.handleClickOpenSidebar}>
            <i className="fas fa-bars"></i>
            <span>Library</span>
          </div>
          <Library
            view={view}
            recipes={recipes}
            onClick={this.handleClickItem}
            isRenameMode={isRenameMode}
            isDeleteMode={isDeleteMode}
          />
        </div>
      )
    }
  }

  render() {
    const {
      recipeId,
      popUp,
      value,
      isSidebarActive,
      fontSize,
      view,
      order
    } = this.state;

    return (
      <div className="app">
        {popUp && (
            <PopUp
              value={value}
              onAdd={this.handleClickAdd}
              onCancel={this.handleClickCancel}
              onChange={this.handleChangeValue}
              onKeyUp={this.handlePressKey}
            />
          )}
        {isSidebarActive && (
          <Sidebar
            view={view}
            order={order}
            fontSize={fontSize}
            isSidebarActive={isSidebarActive}
            onOpenPopUp={this.handleOpenPopUp}
            onCloseSidebar={this.handleClickCloseSidebar}
            onClickRemove={this.handleClickRemove}
            onClickRename={this.handleClickRename}
            onClickChangeView={this.handleClickChangeView}
          />
        )}
        {this.renderPage(recipeId)}
      </div>
    );
  }
};

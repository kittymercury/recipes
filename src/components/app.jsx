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
// 11. order from new to old ... in state +
// 10. reverse items order in library +
// 12. add check symbol on active appearance state in submenu +
// 13. ability to change font-size +
// 3. 1 handler for edit recipe and library
// 9. refactor css and jsx in recipe component
// 7. smooth appear of sidebar
// 14. refactor Sidebar
// 15. fix rendering order while gallery view
// 16. make 1 handler for all appearance changes

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeId: null,
      recipes: [
        { id: 1,
          name: 'Lasagne',
          ingredients: ['beef 500g', 'cheese 200g', 'bolognese 450g', 'lasagne leaves', 'for bechamel:', 'milk', 'butter', 'muscat nut' ],
          procedure: [ 'de do de do daaaaaaaa', 'bolognese sauce! i love this sauce sooo much. it is hard to find good bolognese sauce in local stores.. but today i\'ve done it! and now it is waiting for it\'s time to become a part of the masterpiece of art <3' ],
          checked: false
        },
        { id: 2,
          name: 'Tuna salad',
          ingredients: ['tuna in oil', 'tomatoes', 'letucce'],
          procedure: ['eat', 'cry', 'suffer', 'vomit', 'smile', 'relax'],
          checked: false
        },
        { id: 3,
          name: 'Peanut butter',
          ingredients: ['peanuts', 'honey', 'salt'],
          procedure: ['roast', 'grind', 'mix'],
          checked: false
        },
        { id: 4,
          name: 'Walnut butter',
          ingredients: ['walnuts', 'honey', 'salt'],
          procedure: ['roast', 'grind', 'mix'],
          checked: false
        },
        { id: 5,
          name: 'Almond butter',
          ingredients: ['almonds', 'honey', 'salt'],
          procedure: ['roast', 'grind', 'mix'],
          checked: false
        },
        { id: 6,
          name: 'Hazelnut butter',
          ingredients: ['hazelnuts', 'honey', 'salt'],
          procedure: ['roast', 'grind', 'mix'],
          checked: false
        },
        { id: 7,
          name: 'Cashew butter',
          ingredients: ['cashews', 'honey', 'salt'],
          procedure: ['roast', 'grind', 'mix'],
          checked: false
        },
        { id: 8,
          name: 'Pistachio butter',
          ingredients: ['pistachios', 'honey', 'salt'],
          procedure: ['roast', 'grind', 'mix'],
          checked: false
        },
      ],
      value: '',
      popUp: null,
      selectedRecipes: [],

      isEditMode: false,
      isSidebarActive: false,
      isDeleteMode: false,

      view: 'list',
      order: 'new-first'
    }
  }

  // library
  handleClickItem = (id) => {
    this.setState({ recipeId: id });
  }

  handleCheckItem = (id, checked) => {
    console.log(id, checked)
    const { recipes } = this.state;
    // const newRecipes =
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

  handleClickCancelAdding = () => {
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

  // -------------------------

  handleClickChangeView = (activeView) => {
    this.setState({ view: activeView })
  }

  handleClickChangeOrder = (activeOrder) => {
    this.setState({ order: activeOrder })
  }

  handleClickChangeFontSize = (activeSize) => {
    this.setState({ fontSize: activeSize })
  }

  // --------------------------------

  handleClickDelete = () => {
    this.setState({ isDeleteMode: true, isSidebarActive: false })
  }

  // delete-menu
  handleClickCancelDeleting = () => {
    this.setState({ isDeleteMode: false })
  }


// render content

  renderLibraryHeader = (condition) => {
    if (condition) {
      return (
        <div className="delete-menu">
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              value="select-all"
              id="select-all"
              // onChange={this.handleCheckItem}
            />
            <label htmlFor="select-all">Select all</label>
            <button className="delete">
              <i className="fas fa-trash"></i>
            </button>
          </div>
          <button className="cancel" onClick={this.handleClickCancelDeleting}>Cancel</button>
        </div>
      )
    } else {
      return (
        <div className="header">
          <i className="fas fa-bars" onClick={this.handleClickOpenSidebar}></i>
          <span>Library</span>
          <i className="fas fa-search"></i>
        </div>
      )
    }
  }

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
      const { recipes, isDeleteMode, view, order } = this.state;

      return (
        <div className="library">
          {this.renderLibraryHeader(isDeleteMode)}
          <Library
            recipes={recipes}
            view={view}
            order={order}
            onClickRecipe={this.handleClickItem}
            isDeleteMode={isDeleteMode}
            onCheckRecipe={this.handleCheckItem}
          />
        </div>
      )
    }
  }
  //
  // handleClickChangeAppearance = (property, name) => {
  //   this.setState({ [property]: name })
  // }

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
      <div className={`app ${fontSize}`}>
        {popUp && (
            <PopUp
              value={value}
              onAdd={this.handleClickAdd}
              onCancel={this.handleClickCancelAdding}
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
            onClickDelete={this.handleClickDelete}
            onClickChangeView={this.handleClickChangeView}
            onClickChangeOrder={this.handleClickChangeOrder}
            onClickChangeFontSize={this.handleClickChangeFontSize}
          />
        )}
        {this.renderPage(recipeId)}
      </div>
    );
  }
};

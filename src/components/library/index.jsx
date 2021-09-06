import React from 'react';

import './styles.scss';
import Sidebar from '../sidebar';

export default class Library extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuActive: false
    }
  }

  handleClickOpenSidebar = () => {
    this.setState({ isMenuActive: true })
  }

  handleClickCloseSidebar = () => {
    this.setState({ isMenuActive: false })
  }

  render() {
    const {
      onOpenSidebar,
      onCloseSidebar,
      onOpenPopUp,
      isMenuActive,
      recipes
    } = this.props;

    return (
      <div className="library">
        <div className="header" onClick={onOpenSidebar}>
          <i className="fas fa-bars"></i>
          <span>Library</span>
        </div>
        <Sidebar
          isMenuActive={isMenuActive}
          onCloseSidebar={onCloseSidebar}
          onOpenPopUp={onOpenPopUp}
        />
        <div className="list">
          {recipes.map((recipe) => {
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
      </div>
    );
  }
};

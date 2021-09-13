import React from 'react';

import './styles.scss';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: null };
  }

  handleClickItem = (id) => {
    this.setState({ activeItem: (id === this.state.activeItem) ? null : id });
  }

  render() {
    const { isMenuActive, onCloseSidebar, onOpenPopUp } = this.props;
    const { activeItem } = this.state;

    return (
      <div className={`sidebar-wrapper ${isMenuActive ? 'active' : ''}`}>
        <div className="overlay" onClick={onCloseSidebar}></div>
        <div className="sidebar">
          <div className="menu-icon">
            <i className="fas fa-bars" onClick={onCloseSidebar}></i>
            <span>Menu</span>
          </div>
          <div className="menu">
            <div className="menu-item" onClick={onOpenPopUp}>
              <div className="name">
                <i className="fas fa-plus"></i>
                <span>New recipe</span>
              </div>
            </div>
            <div className={`menu-item ${activeItem === 'edit' ? 'active-item' : ''}`}>
              <div className="name" onClick={() => this.handleClickItem('edit')}>
                <i className="fas fa-pen"></i>
                <span>Edit items</span>
                <i className="fas fa-angle-right"></i>
              </div>
              <div className="submenu">
                <div className="submenu-item">Remove</div>
                <div className="submenu-item">Rename</div>
              </div>
            </div>
            <div className={`menu-item ${activeItem === 'appearance' ? 'active-item' : ''}`}>
              <div className="name" onClick={() => this.handleClickItem('appearance')}>
                <i className="far fa-eye"></i>
                <span>Appearance</span>
                <i className="fas fa-angle-right"></i>
              </div>
              <div className="submenu">
                <div className="submenu-item with-dropdown">
                  <span>View</span>
                  <i className="fas fa-angle-down"></i>
                </div>
                <div className="submenu-item dropdown">
                  <i className="fas fa-list"></i>
                  <span>List</span>
                </div>
                <div className="submenu-item dropdown">
                  <i className="fas fa-th-large"></i>
                  <span>Gallery</span>
                </div>
                <div className="submenu-item with-dropdown">
                  <span>Font size</span>
                  <i className="fas fa-angle-down"></i>
                </div>
                <div className="submenu-item dropdown">
                  <span>Small</span>
                </div>
                <div className="submenu-item dropdown">
                  <span>Medium</span>
                  </div>
                <div className="submenu-item dropdown">
                  <span>Large</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

import React from 'react';

import './styles.scss';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownMenu: 'edit-items'
    }
  }

  handleClickDropdown = (id) => {
    this.setState({ dropdownMenu: (id === this.state.dropdownMenu) ? null : id });
  }

  renderCheck = (state, prop) => {
    if (state === prop) {
      return <i className="fas fa-check"></i>
    }
  }

  render() {
    const {
      view,
      order,
      fontSize,
      isSidebarActive,
      onCloseSidebar,
      onOpenPopUp,
      onClickRemove,
      onClickRename,
      onClickChangeView,
      onClickChangeOrder,
      onClickChangeFontSize
    } = this.props;
    const { dropdownMenu } = this.state;

    return (
      <div className={`sidebar-wrapper ${isSidebarActive ? 'active' : ''}`}>
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


            <div className={`menu-item ${dropdownMenu === 'edit-items' ? 'active-item' : ''}`}>

              <div className="name" onClick={() => this.handleClickDropdown('edit-items')}>
                <i className="fas fa-pen"></i>
                <span>Edit items</span>
                <i className="fas fa-angle-right"></i>
              </div>

              <div className="submenu">
                <div className="submenu-item" onClick={onClickRemove}>
                  <i className="fas fa-trash"></i>
                  <span>Remove</span>
                </div>
                <div className="submenu-item" onClick={onClickRename}>
                  <i className="fas fa-eraser"></i>
                  <span>Rename</span>
                </div>
              </div>

            </div>


            <div className={`menu-item ${dropdownMenu === 'appearance' ? 'active-item' : ''}`}>
              <div className="name" onClick={() => this.handleClickDropdown('appearance')}>
                <i className="far fa-eye"></i>
                <span>Appearance</span>
                <i className="fas fa-angle-right"></i>
              </div>
              <div className="submenu">
                <div className="submenu-item with-dropdown">
                  <span>View</span>
                  <i className="fas fa-angle-down"></i>
                </div>
                <div className="submenu-item dropdown" onClick={() => onClickChangeView('list')}>
                  <i className="fas fa-list"></i>
                  <span>List</span>
                  {this.renderCheck(view, 'list')}
                </div>
                <div className="submenu-item dropdown" onClick={() => onClickChangeView('gallery')}>
                  <i className="fas fa-th-large"></i>
                  <span>Gallery</span>
                  {this.renderCheck(view, 'gallery')}
                </div>



                <div className="submenu-item with-dropdown">
                  <span>Sort</span>
                  <i className="fas fa-angle-down"></i>
                </div>

                <div className="submenu-item dropdown" onClick={() => onClickChangeOrder('new-first')}>
                  <span>New first</span>
                  {this.renderCheck(order, 'new-first')}
                </div>

                <div className="submenu-item dropdown" onClick={() => onClickChangeOrder('old-first')}>
                  <span>Old first</span>
                  {this.renderCheck(order, 'old-first')}
                </div>


                {/* WORK HERE RN */}

                <div className="submenu-item with-dropdown">
                  <span>Font size</span>
                  <i className="fas fa-angle-down"></i>
                </div>
                <div className="submenu-item dropdown" onClick={() => onClickChangeFontSize('small')}>
                  <span>Small</span>
                  {this.renderCheck(fontSize, 'small')}
                </div>
                <div className="submenu-item dropdown" onClick={() => onClickChangeFontSize('medium')}>
                  <span>Medium</span>
                  {this.renderCheck(fontSize, 'medium')}
                </div>
                <div className="submenu-item dropdown" onClick={() => onClickChangeFontSize('large')}>
                  <span>Large</span>
                  {this.renderCheck(fontSize, 'large')}
                </div>

                {/* --------------------------- */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

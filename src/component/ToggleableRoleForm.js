import React, { Component, Fragment } from 'react'
import RoleForm from './RoleForm';

export default class ToggleableRoleForm extends Component {
  state = {
    isOpen: false
  }

  handleFormOpen = () => {
    this.setState({ isOpen: true })
  }

  handleFormClose = () => {
    this.setState({ isOpen: false })
  }

  handleFormSubmit = (role) => {
    this.props.onFormSubmit(role)
    this.setState({ isOpen: false })
  }

  render() {
    if (this.state.isOpen) {
      return (
        <RoleForm
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
        />
      )
    } else {
      return (
        <Fragment>
          <button
            onClick={this.handleFormOpen}
          >
            Добавить
          </button>
        </Fragment>
      )
    }

  }
}

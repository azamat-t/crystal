import React, { Component } from 'react'
import RoleForm from './RoleForm'
import Role from './Role'

export default class EditableRole extends Component {
  state = {
    editFormOpen: false
  }

  handleEditClick = () => {
    this.openForm()
  }

  handleFormClose = () => {
    this.closeForm()
  }

  handleSubmit = (role) => {
    this.props.onFormSubmit(role)
    this.closeForm()
  }

  closeForm = () => {
    this.setState({ editFormOpen: false })
  }

  openForm = () => {
    this.setState({ editFormOpen: true })
  }
  render() {
    if (this.state.editFormOpen) {
      return (
        <RoleForm
          id={this.props.id}
          name={this.props.name}
          role={this.props.role}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
        />
      )
    } else {
      return (
        <Role
          key={this.props.id}
          id={this.props.id}
          name={this.props.name}
          role={this.props.role}
          onEditClick={this.handleEditClick}
          onTrashClick={this.props.onTrashClick}
        />
      )
    }

  }
}

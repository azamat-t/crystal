import React, { Component, Fragment } from 'react'
import EditableRole from './EditableRole'

export default class EditableRoleList extends Component {
  render() {
    const roles = this.props.roles.map((role) => (
      <EditableRole
        key={role.id}
        id={role.id}
        name={role.name}
        role={role.role}
        onFormSubmit={this.props.onFormSubmit}
        onTrashClick={this.props.onTrashClick}
      />
    ))
    return (
      <Fragment id='roles'>
        {roles}
      </Fragment>
    )
  }
}

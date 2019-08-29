import React, { Component } from 'react'
import EditableRoleList from './component/EditableRoleList'
import ToggleableRoleForm from './component/ToggleableRoleForm'
// import roles from './data.json'
import axios from 'axios'
import './App.css'
const API_URL = 'http://localhost:8080';

class App extends Component {
  state = {
    roles: []
  }

  componentDidMount() {
    this.loadRolesFromServer()
  }

  loadRolesFromServer = () => {
    const url = `${API_URL}/roles`;
    axios.get(url).then(response => response.data)
      .then((data) => {
        this.setState({ roles: data })
        console.log(this.state.roles)
      })
  }

  handleCreateFormSubmit = (role) => {
    this.createRole(role)

  }

  handleEditFormSubmit = (attrs) => {
    this.updateRole(attrs)
  }

  handleTrashClick = (roleId) => {
    this.deleteRole(roleId)
  }

  createRole = (role) => {
    this.setState({
      roles: this.state.roles.concat(role)
    })
    const url = `${API_URL}/roles`;
    let data = JSON.stringify(role)
    axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: { role },
      json: true
    })
  }

  deleteRole = (roleId) => {
    this.setState({
      roles: this.state.roles.filter(r => r.id !== roleId)
    })
    const url = `${API_URL}/roles/`;
    axios.delete(url + roleId)
  }

  updateRole = (attrs) => {
    this.setState({
      roles: this.state.roles.map((role) => {
        if (role.id === attrs.id) {
          return Object.assign({}, role, {
            name: attrs.name,
            role: attrs.role
          })
        } else {
          return role
        }
      })
    })
    const url = `${API_URL}/roles/`;
    axios.put(url + attrs.id, {
      name: attrs.name,
      role: attrs.role
    })
  }
  render() {
    return (
      <div>
        <table>
          <tr>
            {/* <th>#</th> */}
            <th style={{ width: '30%' }}>Имя</th>
            <th style={{ width: '10%' }}>Администратор</th>
            <th style={{ width: '10%' }}>Поддержка</th>
            <th style={{ width: '10%' }}>Пользователь</th>
            <th style={{ width: '10%' }}>Системный</th>
            <th style={{ width: '15%' }}></th>
            <th style={{ width: '15%' }}></th>
          </tr>
          <EditableRoleList
            roles={this.state.roles}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
          />

          <ToggleableRoleForm onFormSubmit={this.handleCreateFormSubmit} />
        </table>
      </div>
    )
  }

}

export default App;

import React, { Component } from 'react'

export default class RoleForm extends Component {
  state = {
    id: this.props.id || '',
    name: this.props.name || '',
    role: this.props.role || '',
    options: this.props.role || [],
    arrayrole: [
      { code: 'admin', name: 'администратор' },
      { code: 'support', name: 'поддержка' },
      { code: 'user', name: 'пользователь' },
      { code: 'system', name: 'системный' }
    ]
  }



  handleNameChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = () => {
    this.props.onFormSubmit({
      id: this.state.id,
      name: this.state.name,
      role: this.state.role || []
    })
    this.setState({ options: [] })
  }

  onChange(e) {
    const options = this.state.options
    console.log(options)
    let index

    if (e.target.checked) {
      options.push(e.target.value)
    } else {
      index = options.indexOf(e.target.value)
      options.splice(index, 1)
    }

    this.setState({ role: options })
  }

  render() {
    const submitRole = this.props.id ? 'Сохранить' : 'Создать'
    return (
      <tr key={this.state.id}>
        {/* <td>
          {this.state.id}
        </td> */}
        <td>
          <input type='text' value={this.state.name} onChange={this.handleNameChange} required />
        </td>
        {this.state.arrayrole.map((role) => (
          <td key={role.code}>
            <label class="container">
              <input
                type="checkbox"
                name={role.code}
                value={role.name}
                checked={this.state.options && this.state.options.some(item => item === role.name)}
                onChange={this.onChange.bind(this)}
              />
              <span class="checkmark"></span>
            </label>
          </td>
        ))}
        <td>
          <button
            type="submit"
            onClick={this.handleSubmit}
          >
            {submitRole}
          </button>
        </td>
        <td>
          <button
            onClick={this.props.onFormClose}
          >
            Отмена
              </button>
        </td>
      </tr>
    )
  }
}

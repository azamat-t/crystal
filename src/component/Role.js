import React, { Component } from 'react'

export default class Role extends Component {
  state = {
    arrayrole: [
      { code: 'admin', name: 'администратор' },
      { code: 'support', name: 'поддержка' },
      { code: 'user', name: 'пользователь' },
      { code: 'system', name: 'системный' }
    ]
  }
  handleTrashClick = () => {
    this.props.onTrashClick(this.props.id)
  }

  render() {
    return (
      <tr key={this.props.id}>
        {/* <td>{this.props.id}</td> */}
        <td>{this.props.name}</td>
        {this.state.arrayrole.map((item) => (
          this.props.role.some(role => item.name === role) ?
            <td>
              <label class="container">
                <input
                  type="checkbox"
                  checked
                />
                <span class="checkmark"></span>
              </label>
            </td>
            :
            <td></td>
        ))}
        <td>
          <button onClick={this.props.onEditClick}>
            Изменить
        </button>
        </td>
        <td>
          <button onClick={this.handleTrashClick}>
            Удалить
        </button>
        </td>
      </tr>
    )
  }
}

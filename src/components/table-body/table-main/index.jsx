import React from 'react';

export class TableMain extends React.Component {
  render() {
    return (
      <tr>
        <td class="name">{this.props.task.name}</td>
        <td class="description">{this.props.task.description}</td>
        <td class="priority">{this.props.task.priority}</td>
      </tr>
    )
  }
}
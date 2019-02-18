import React from 'react';

export class TableMain extends React.Component {
  render() {
    return (
      <tr>
        <td className="name">{this.props.task.name}</td>
        <td className="description">{this.props.task.description}</td>
        <td className="priority">{this.props.task.priority}</td>
      </tr>
    )
  }
}
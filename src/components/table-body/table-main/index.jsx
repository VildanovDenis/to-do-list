import React from 'react';

export class TableMain extends React.Component {
  constructor(props) {
    super(props);
    this.onDeleteTaskClick = this.onDeleteTaskClick.bind(this);
  }

  onDeleteTaskClick() {
    this.props.deleteTask(this.props.task.id);
  }

  render() {
    return (
      <tr>
        <td className="name">{this.props.task.name}</td>
        <td className="description">{this.props.task.description}</td>
        <td className="priority">{this.props.task.priority}</td>
        <td className="del-task"><button type="button" onClick={this.onDeleteTaskClick}>Удалить</button></td>
      </tr>
    )
  }
}
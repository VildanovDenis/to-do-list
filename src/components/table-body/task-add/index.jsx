import React from 'react';

export class TaskAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: '',
      descriptionInput: '',
      priorityInput: '',
    };
    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onDescriptionInputChange = this.onDescriptionInputChange.bind(this);
    this.onPriorityInputChange = this.onPriorityInputChange.bind(this);
    this.onAddButtonClick = this.onAddButtonClick.bind(this);
  };

  onNameInputChange(event) {
    this.setState({
      nameInput: event.target.value,
    })
  }
  onDescriptionInputChange(event) {
    this.setState({
      descriptionInput: event.target.value,
    })
  }
  onPriorityInputChange(event) {
    this.setState({
      priorityInput: event.target.value,
    })
  }
  onAddButtonClick() {
    if (this.state.priorityInput === "Приоритет") {
      this.setState({ priorityInput: "1"})
    }
    this.props.addTask(this.state.nameInput, this.state.descriptionInput, this.state.priorityInput);
    this.setState({
      nameInput: '',
      descriptionInput: '',
      priorityInput: '',
    })
  }

  render() {
    return (
      <form className="task-add">
        <input id="name" placeholder="Название задачи" onChange={this.onNameInputChange} value={this.state.nameInput}></input>
        <textarea id="description" placeholder="Описание задачи" onChange={this.onDescriptionInputChange} value={this.state.descriptionInput}></textarea>
        <select id="priority" onChange={this.onPriorityInputChange}>
          <option defaultValue>Приоритет</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <button type="button" onClick={this.onAddButtonClick}>Добавить</button>
      </form>
    )
  }
}
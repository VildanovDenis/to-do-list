import React from "react";

export class TaskAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: "",
      descriptionInput: "",
      priorityInput: "Приоритет"
    };

    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onDescriptionInputChange = this.onDescriptionInputChange.bind(this);
    this.onPriorityInputChange = this.onPriorityInputChange.bind(this);
    this.onAddButtonClick = this.onAddButtonClick.bind(this);
  }

  /**
   * Изменяет состояние компонента при изменении value в input
   */
  onNameInputChange(event) {
    this.setState({
      nameInput: event.target.value
    });
  }

  /**
   * Изменяет состояние компонента при изменении value в textarea
   */
  onDescriptionInputChange(event) {
    this.setState({
      descriptionInput: event.target.value
    });
  }

  /**
   * Изменяет состояние компонента при изменении value в select
   */
  onPriorityInputChange(event) {
    this.setState({
      priorityInput: event.target.value
    });
  }

  /**
   * Вызывает свойство родителя для добавления задачи, сбрасывает состояние компонента на стандартные.
   */
  onAddButtonClick() {
    const priorityValue =
      this.state.priorityInput === "Приоритет" ? "1" : this.state.priorityInput;
    this.props.addTask(
      this.state.nameInput,
      this.state.descriptionInput,
      priorityValue
    );
    this.setState({
      nameInput: "",
      descriptionInput: "",
      priorityInput: "Приоритет"
    });
  }

  render() {
    return (
      <form className="task-add">
        <input
          id="name"
          placeholder="Название задачи"
          onChange={this.onNameInputChange}
          value={this.state.nameInput}
        />
        <textarea
          id="description"
          placeholder="Описание задачи"
          onChange={this.onDescriptionInputChange}
          value={this.state.descriptionInput}
        />
        <select
          id="priority"
          value={this.state.priorityInput}
          onChange={this.onPriorityInputChange}
        >
          <option>Приоритет</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <button type="button" onClick={this.onAddButtonClick}>
          Добавить
        </button>
      </form>
    );
  }
}

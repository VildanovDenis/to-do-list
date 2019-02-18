import React from 'react';

export class TaskAdd extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <form class="task-add">
        <input id="name" placeholder="Название задачи"></input>
        <textarea id="description" placeholder="Описание задачи"></textarea>
        <select id="priority">
          <option selected>Приоритет</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <button type="button">Добавить</button>
      </form>
    )
  }
}
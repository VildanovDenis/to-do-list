import React from "react";

export class TableHead extends React.Component {
  render() {
    return (
      <tr>
        <th className="name">Название</th>
        <th className="description">Описание</th>
        <th className="priotiry">Приоритет</th>
        <th className="del-task" />
      </tr>
    );
  }
}

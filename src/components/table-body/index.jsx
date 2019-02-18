import React from "react";
import { TableHead } from "./table-head";
import { TableMain } from "./table-main";

import "./index.css";
import { TaskAdd } from "./task-add";

export class TableBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          name: "Задача 1",
          description: "Описание задачи 1",
          priority: "3"
        },
        {
          name: "Задача 2",
          description: "Описание задачи 2",
          priority: "1"
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <table class="to-do-list">
          <tbody>
            <TableHead />
            {this.state.tasks.map((curr, index) => {
              return <TableMain key={index} task={curr} />;
            })}
          </tbody>
        </table>
        <TaskAdd />
      </React.Fragment>
    );
  }
}

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
          id: 1,
          name: "Задача 1",
          description: "Описание задачи 1",
          priority: "3"
        },
        {
          id: 2,
          name: "Задача 2",
          description: "Описание задачи 2",
          priority: "1"
        }
      ],
      newTask: {
        id: null,
        name: "",
        description: "",
        priority: "",
      },
      
    };
  }

  addTask = (taskName, taskDesc, taskPri) => {
    const taskId = new Date();
    const newTask = {
      id: taskId.getMilliseconds(),
      name: taskName,
      description: taskDesc,
      priority: taskPri,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }

  deleteTask = (i) => {
    const id = i;
    const newTasksList = this.state.tasks.filter((task) => {
      return task.id !== id
    });
    console.log(newTasksList);
    this.setState({
      tasks: newTasksList,
    })
  }

  render() {
    return (
      <React.Fragment>
        <table className="to-do-list">
          <tbody>
            <TableHead />
            {this.state.tasks.map((curr) => {
              return <TableMain key={curr.id} task={curr} deleteTask={this.deleteTask}/>;
            })}
          </tbody>
        </table>
        <TaskAdd addTask={this.addTask}/>
      </React.Fragment>
    );
  }
}

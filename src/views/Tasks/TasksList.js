import React, {Component} from "react";
import {Link} from "react-router-dom";
import TaskService from "../../services/task.service";
import Task from "../../components/Task";

export default class TasksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      tasks_filtree: [],
    }
  }

  async componentDidMount() {
    let tasks = await TaskService.list();
    this.setState({tasks, tasks_filtree: tasks});
  }

  handleChange(e) {
    let task = [];

    if(e.target.value === "") task = this.state.tasks;
    else {
      task = this.state.tasks.filter(t => {
        let recherche = e.target.value.trim().toLowerCase();
        let title = t.title.trim().toLowerCase();
        return title.indexOf(recherche) > -1;
      })
    }

    this.setState({tasks_filtree: task});
  }

  render() {
    return <div className="row mt-4">
      <div className="col">
        <input type="text" onChange={(e) => this.handleChange(e)}/>
        <Link className="btn btn-sm btn-success" to="/tasks/add"><i className="fas fa-plus" /> Ajouter</Link>
        <div className="row mt-4">
          {
            this.state.tasks_filtree.map(task => {
              return <div key={task.id} className="col-4">
                <Task task={task} />
              </div>
            })
          }
        </div>
      </div>
    </div>
  }
}
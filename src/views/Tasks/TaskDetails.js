import React, {Component} from "react";
import TaskService from "../../services/task.service";
import {Link} from "react-router-dom";

export default class TaskDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: null
    }
  }

  async componentDidMount() {
    let {id} = this.props.match.params;
    let task = await TaskService.details(id);
    this.setState({task});
  }

  async handleDelete() {
    await TaskService.delete(this.state.task.id);
    this.props.history.push('/tasks');
  }

  render() {
    let {task} = this.state;

    return <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1>Tâche - {task && task.title}</h1>
          <h2>Statut : { task && task.completed ? 'Complétée' : 'En cours'}</h2>
          { task && <div>
              <Link to={`/users/${task.userId}`}>{task.user && task.user.name}</Link>
            </div>
          }

          <div className="row mt-4">
            {
              task && <div className="col">
                <Link className="btn btn-sm btn-warning" to={`/tasks/${task.id}/modifier`}>Modifier</Link>
              </div>
            }
            <div className="col text-left">
              <button className="btn btn-sm btn-danger" onClick={() => this.handleDelete()}>Supprimer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}
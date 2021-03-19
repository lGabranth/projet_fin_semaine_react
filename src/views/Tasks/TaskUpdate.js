import React, {Component} from "react";
import TaskService from "../../services/task.service";
import UserService from "../../services/user.service";

export default class TaskUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: null,
      title: "",
      completed: true,
      userId: 0,
      users: []
    }
  }

  async componentDidMount() {
    let {id} = this.props.match.params;
    let task = await TaskService.details(id);
    let users = await UserService.list();
    this.setState({task, title: task.title, completed: task.completed, userId: task.userId, users});
  }

  handleChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({[e.target.name]: value});
  }

  async handleSubmit(e) {
    e.preventDefault();

    let {title, completed, userId} = this.state;
    await TaskService.update(this.state.task.id, {title, completed, userId});
    this.props.history.push('/tasks');
  }

  render() {
    let {title, completed, userId} = this.state;
    return <div className="container text-center">
      <h1>Modifier une tâche</h1>

      <div className="row">
        <div className="col">
          <form className="mt-4" onSubmit={e => this.handleSubmit(e)}>
            <div className="form-group">
              <label>Titre</label>
              <input type="text" name="title" value={title} className="form-control" required onChange={e => this.handleChange(e)}/>
            </div>

            <div className="form-group mt-3">
              <label for="completed">Déjà complétée ?</label>
              <input type="checkbox" id="completed" checked={completed} name="completed" onChange={e => this.handleChange(e)}/>
            </div>

            {
              this.state.users.length > 0 &&
                <div className="form-group mt-3">
                  <label htmlFor="completed">User lié : </label>
                  <select name="userId" id="userId" className="form-control" value={userId} onChange={e => this.handleChange(e)}>
                    <option value="0">Choisissez un user</option>
                    {
                      this.state.users.map(user => {
                        return <option value={user.id}>{user.name}</option>
                      })
                    }
                  </select>
                </div>
            }
            <button className="btn btn-warning btn-sm mt-4" type="submit">Modifier</button>
          </form>
        </div>
      </div>
    </div>
  }
}
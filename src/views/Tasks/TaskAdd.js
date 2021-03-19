import React, {Component} from "react";
import TaskService from "../../services/task.service";
import UserService from "../../services/user.service";

export default class TaskAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      title: "",
      completed: true,
      userId: 0
    }
  }

  async componentDidMount() {
    let users = await UserService.list();
    this.setState({users});
  }

  handleChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({[e.target.name]: value});
  }

  async handleSubmit(e) {
    e.preventDefault();

    let {title, completed, userId} = this.state;
    await TaskService.create({title, completed, userId});
    //let call = await TaskService.create({title, completed, userId});
    //console.log(call);
    this.props.history.push('/tasks');
  }

  render() {
    return <div className="container text-center">
      <h1>Ajouter une tâche</h1>

      <div className="row">
        <div className="col">
          <form className="mt-4" onSubmit={e => this.handleSubmit(e)}>
            <div className="form-group">
              <label>Titre</label>
              <input type="text" name="title" className="form-control" required onChange={e => this.handleChange(e)}/>
            </div>

            <div className="form-group mt-3">
              <label htmlFor="completed">Déjà complétée ?</label>
              <input type="checkbox" id="completed" checked={this.state.completed} name="completed" onChange={e => this.handleChange(e)}/>
            </div>

            <div className="form-group mt-3">
              <label htmlFor="completed">User lié : </label>
              <select name="userId" id="userId" className="form-control" onChange={e => this.handleChange(e)}>
                <option value="0">Choisissez un user</option>
                {
                  this.state.users.map((user, index) => {
                    return <option key={index} value={user.id}>{user.name}</option>
                  })
                }
              </select>
            </div>

            <button className="btn btn-primary btn-sm mt-4" type="submit">Ajouter</button>
          </form>
        </div>
      </div>
    </div>
  }
}
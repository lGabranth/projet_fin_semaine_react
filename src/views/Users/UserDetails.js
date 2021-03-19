import React, {Component} from "react";
import UserService from "../../services/user.service";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  async componentDidMount() {
    let {id} = this.props.match.params;
    let response = await UserService.details(id);
    this.setState({user: response});
  }

  async handleDelete() {
    await UserService.delete(this.state.user.id);
    this.props.history.push('/articles');
  }

  render() {
    let {user} = this.state;
    return <div className="container">
      <div className="row mt-5">
        <div className="col text-center">
          <h1>Utilisateur - {user && user.name}</h1>
          <p>Email : {user && user.email}</p>
          <p>Téléphone : {user && user.phone}</p>
          <p>Tâche non-complètes : { user && user.nb_doing}</p>
          <p>Tâche complétées : { user && user.nb_done}</p>
        </div>
      </div>
    </div>
  }
}
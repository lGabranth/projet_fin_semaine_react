import React, {Component} from "react";
import UserService from "../../services/user.service";

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    let users = await UserService.list();
    this.setState({users});
  }

  render() {
    let {users} = this.state;

    return <div className="container">
      <h1>Liste des utilisateurs</h1>

      <div className="row">
        <table className="table-striped table-responsive">
          <thead>
            <tr>
              <th>#</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Nb tâches</th>
            </tr>
          </thead>
          <tbody>
          {
            users.map((user, index) => {
              return <tr>
                <td>{ index + 1}</td>
                <td>{ user.name }</td>
                <td>{ user.email }</td>
                <td>{ user.phone }</td>
                <td>{ user.nb_doing + user.nb_done }</td>
              </tr>
            })
          }
          </tbody>
        </table>
      </div>
    </div>
  }
}
import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Task extends Component {
  render () {
    let {id, title, completed, user} = this.props.task;

    return <div className="card">
      <div className="card-body">
        <h5 className="card-title font-weight-bold">{ title }</h5>
        <p className="card-text">Statut : { completed ? <i className="fas fa-lg fa-check" /> : <i className="fas fa-lg fa-ban" /> }</p>
        <p className="card-text"><b>Ecrit par : { user && user.name }</b></p>
        <Link to={`/tasks/${id}`} className="btn btn-primary">Détails</Link>
      </div>
    </div>
  }
}
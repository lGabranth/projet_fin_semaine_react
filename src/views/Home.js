import React, {Component} from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  render() {

    return <div className="container">

      <div className="row mt-4">
        <div className="col text-center">
          <h1>Homepage</h1>
          <div className="row">
            <div className="alert alert-info mt-4">
              <i className="fas fa-lg fa-info-circle" /> &nbsp;
              Veuillez naviguer directement depuis la navbar
              &nbsp; <i className="fas fa-lg fa-info-circle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}
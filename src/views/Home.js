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
      <h1 className="jumbotron">Homepage</h1>

      <div className="row">
        <div className="col">
          <div className="row">
            test
          </div>
        </div>
      </div>
    </div>
  }
}
import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return <footer className="fixed-bottom">
      <div className="row text-center bg-dark text-white">
        <div className="col">
          <b>CompanyName</b> <br/>
          Adresse <br/>
          CP - Ville <br/>
          email@email.com
        </div>
        <div className="col mt-4">
          Privacy Policy | Terms of use
        </div>
        <div className="col mt-4">
          Our social medias : &nbsp;
          <a href="https://facebook.com"><i className="fab fa-lg fa-facebook" /></a>&nbsp;
          <a href="https://instagram.com"><i className="fab fa-lg fa-instagram" /></a>&nbsp;
          <a href="https://linkedin.com"><i className="fab fa-lg fa-linkedin" /></a>
        </div>
      </div>
    </footer>
  }
}
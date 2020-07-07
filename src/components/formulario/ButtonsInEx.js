import React, { Component } from "react";

export default class ButtonsInEx extends Component {
  prevent = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form>
        <div className="row">
          <div className="input-field">
            <button
              className="btn waves-effect waves-light modal-trigger col s3 l2 offset-s3 offset-l3"
              data-target="modalImportar"
            >
              <i className="material-icons">cloud_download</i>
            </button>
            <button
              className="btn waves-effect waves-light modal-trigger col s3 l2 offset-s1 offset-l1"
              data-target="modalExportar"
            >
              <i className="material-icons">cloud_upload</i>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

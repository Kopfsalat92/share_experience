/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.toggle}
          color="outline-secondary"
          size="lg"
          style={{ position: "relative" }}
          block
        >
          Explore
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader>{this.props.data.title}</ModalHeader>
          <ModalBody>
            <h1> {this.props.data.title}</h1>
            <br />
            <p align="justify">{this.props.data.text2}</p>
            <br />
          </ModalBody>
          <ModalFooter>
            <Button
              className="mr-auto"
              style={{ position: "relative" }}
              color="outline-secondary"
              onClick={this.toggle}
              size="sm"
            >
              close
            </Button>{" "}
            <Button
              href={this.props.data.link}
              color="outline-secondary"
              size="sm"
            >
              Explore
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default ModalOne;

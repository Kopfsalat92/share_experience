// import React from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import * as data from "../resources/data.json";

// class ModalCreator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modal: false
//     };

//     this.toggle = this.toggle.bind(this);
//   }

//   toggle() {
//     this.setState(prevState => ({
//       modal: !prevState.modal
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <Button color="black" onClick={this.toggle}>
//           {this.props.buttonLabel}
//         </Button>
//         <Modal
//           isOpen={this.state.modal}
//           toggle={this.toggle}
//           className={this.props.className}
//         >
//           <ModalHeader toggle={this.toggle}>
//             {this.props.data.title}
//           </ModalHeader>
//           <ModalBody>{this.props.data.text}</ModalBody>
//           <ModalFooter>
//             <Button color="black" onClick={this.toggle}>
//               Do Something
//             </Button>{" "}
//             <Button color="black" onClick={this.toggle}>
//               Cancel
//             </Button>
//           </ModalFooter>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default ModalCreator;

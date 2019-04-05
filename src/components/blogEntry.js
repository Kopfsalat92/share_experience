import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  //CardTitle,
  //CardSubtitle,
  CardFooter,
  CardHeader,
  //Button,
  CardImgOverlay
} from "reactstrap";
import ModalOne from "./modals";
//import { Link } from "gatsby";

export default class BlogEntry extends React.Component {
  render() {
    return (
      <div>
        <Card style={{ margin: "1%" }}>
          <CardImg
            top
            width="100%"
            height="100%"
            src={this.props.data.img2}
            alt="Card image cap"
            style={{ margin: "0" }}
          />
          <CardImgOverlay>
            <CardHeader
              tag="h3"
              style={{
                color: "white",
                textAlign: "left",
                backgroundColor: "transparent",
                borderColor: "transparent"
              }}
            >
              {this.props.data.title}
            </CardHeader>
          </CardImgOverlay>
          <CardBody className="justify" style={{ paddingTop: "2%" }}>
            <CardText>
              <h2 align="center">{this.props.data.text1}</h2>
              <p className="text-truncate" align="justify">
                {this.props.data.text2}
              </p>
            </CardText>
          </CardBody>
          <CardFooter style={{ position: "relative" }}>
            <ModalOne size="lg" data={this.props.data} />
            {/* <Button
              href={this.props.data.link}
              color="outline-secondary"
              size="lg"
              block
            >
              Explore
            </Button> */}
          </CardFooter>
        </Card>
      </div>
    );
  }
}

import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

//import * as data from "../resources/data.json";

let items = [
  {
    src: "/images/G1.jpg",
    altText: "Guatemala"
  },
  {
    src: "/images/G2.jpg",
    altText: "Guatemala"
  },
  {
    src: "/images/G3.jpg",
    altText: "Guatemala"
  },
  {
    src: "/images/G4.jpg",
    altText: "Guatemala"
  },
  {
    src: "/images/G5.jpg",
    altText: "Guatemala"
  },
  {
    src: "/images/N1.jpg",
    altText: "Namibia"
  },
  {
    src: "/images/N2.jpg",
    altText: "Namibia"
  },
  {
    src: "/images/N3.jpg",
    altText: "Namibia"
  },
  {
    src: "/images/N4.jpg",
    altText: "Namibia"
  },
  {
    src: "/images/N5.jpg",
    altText: "Namibia"
  },
  {
    src: "/images/Ma1.jpg",
    altText: "Malawi"
  },
  {
    src: "/images/Ma2.jpg",
    altText: "Malawi"
  },
  {
    src: "/images/Ma3.jpg",
    altText: "Malawi"
  },
  {
    src: "/images/Nz1.jpg",
    altText: "New Zealand"
  },
  {
    src: "/images/Nz2.jpg",
    altText: "New Zealand"
  },
  {
    src: "/images/Nz3.jpg",
    altText: "New Zealand"
  },
  {
    src: "/images/M1.jpg",
    altText: "Mexico"
  },
  {
    src: "/images/M2.jpg",
    altText: "Mexico"
  },
  {
    src: "/images/M3.jpg",
    altText: "mexico"
  }
];

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.altText}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default Slide;

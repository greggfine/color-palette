import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Navbar from "./Navbar";

export default class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = { level: 500 };
  }
  changeLevel = newLevel => {
    this.setState({
      level: newLevel
    });
  };

  render() {
    const { level } = this.state;
    const { colors } = this.props.palette;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className="palette">
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className="palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

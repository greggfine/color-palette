import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Navbar from "./Navbar";

export default class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = { level: 500, format: "hex" };
  }
  changeLevel = newLevel => {
    this.setState({
      level: newLevel
    });
  };

  changeFormat = val => {
    this.setState({ format: val });
  };

  render() {
    const { level, format } = this.state;
    const { colors } = this.props.palette;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color[format]} name={color.name} />
    ));
    return (
      <div className="palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className="palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "rc-slider/assets/index.css";
import "./Palette.css";
import Slider from "rc-slider";

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
        <div className="slider">
          <Slider
            defaultValue={level}
            step={100}
            min={100}
            max={900}
            onAfterChange={this.changeLevel}
          />
        </div>
        <div className="palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

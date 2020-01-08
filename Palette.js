import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './Palette.css'

export default class Palette extends Component {
    render() {
        const {colors} = this.props;
        const colorBoxes = colors.map(color => (
         <ColorBox background={color.color} name={color.name}/>
        ))
        return (
            <div className="palette">
                <div className="palette-colors">
                    {colorBoxes}
                </div>  
                
            </div>
        )
    }
}

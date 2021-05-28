import React, { Component } from 'react'

export default class MediaComponent extends Component {
    
    render() {
        const {name, imgSvg} = this.props
        return (
            <div className = 'col-sm-1 col-md-1'>
                <div className = {name}>
                    <a href = "#"><img class = "img-responsive" src = {imgSvg}/></a>
                </div>
          </div>
        )
    }
}

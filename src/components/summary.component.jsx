import React, { Component } from 'react';

export default class SummaryComponent extends Component {
    render() {
        const {title, description, imgSvg} = this.props
        return (
            <div>
                <div className = "col-sm-1 col-md-1">
                    <div >
                    <img className = "img-responsive" src = {imgSvg}/>
                    </div>
                </div>

                <div className = "col-sm-5 col-md-5">
                    <div >
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

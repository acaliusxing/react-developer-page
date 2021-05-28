import React, { Component } from 'react'

export default class ProjecgComponent extends Component {
    render() {
        const {title, description} = this.props
        return (
            <div className = "col-sm-4 col-md-4 text-center">
                <div className = "luvtalk-project">
                    <h3>{title}</h3>
                    <p>{description} </p>
                    <div className = "row">
                    <div className = "col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                        <div className = "project-more-info">
                        <a className = "btn btn-default btn-border" href = "#">More</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

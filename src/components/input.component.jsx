import React, { Component } from 'react'

export default class InputComponent extends Component {
    render() {
        const {classtype, type, title} = this.props
        return (
            <div className = {classtype}>
                <div className = {type}>
                    <h4>{title} *</h4>
                    <input type = "text" placeholder= {title}/>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';

import DeveloperDesign from '../images/developerdesign.svg';
import ResponsiveDesign from '../images/responsivedesign.svg';
import InnovativeSolutions from '../images/innovativesolutions.svg';
import Passion from '../images/passion.svg';

import SummaryComponent from '../components/summary.component'

export default class Summary extends Component {

    render() {
        return (
            <div className = "summary">
                <div className = "container-fluid">
                    <div className="row">
                        <SummaryComponent
                            key = "summary001"
                            name = "development"
                            title = "Development and Design"
                            description = "I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests."
                            imgSvg = {DeveloperDesign}
                        />
                        <SummaryComponent
                            key = "summary002"
                            name = "responsive"
                            title = "Responsive Layouts"
                            description = "Development and design isn't merely putting information on the site or preferred media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations."
                            imgSvg = {ResponsiveDesign}
                        />
                    </div>
                    <div className="row">
                        <SummaryComponent
                             key = "summary003"
                             name = "idea"
                             title = "Ideas and Solutions"
                             description = "There are still many problems that exist in today's society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, solutions, or products."
                             imgSvg = {InnovativeSolutions}
                        />
                        <SummaryComponent
                             key = "summary004"
                             name = "passion"
                             title = "Passion and Dedication"
                             description = "With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved. "
                             imgSvg = {Passion}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

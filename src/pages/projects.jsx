import React, { Component } from 'react';
import ProjecgComponent from '../components/project.component';

export default class Projects extends Component {


    render() {
        return (
            <div className = "projects" id="projects">
                <div className = "container-fluid">
                <div className = "row">
                    <div className = "col-sm-12 col-md-12 text-center">
                    <div className = "projects-header">
                        <h1>Projects and Portfolio</h1>
                    </div>
                    </div>
                </div>
        
                <div className = "row">
                    <div className = "col-sm-12 col-md-12 text-center">
                    <div className = "projects-header-quote">
                        <h3>Sharing my endeavors and passions...</h3>
                    </div>
                    </div>
                </div>
        
                <div className = "row">
                    <ProjecgComponent 
                        key = "project001"
                        title = 'LUV TALK Website'
                        description = "Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress. "
                    />
                    <ProjecgComponent 
                        key = "project002"
                        title = 'Personal Website'
                        description = "Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests. "
                    />
                    <ProjecgComponent 
                        key = "project003"
                        title = 'Strike Zone Analysis'
                        description = "Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game."
                    />
                </div>
        
                <div className = "row">
                    <div className = "col-sm-2 col-md-2 col-sm-offset-5 col-md-offset-5">
                    <div className = "see-more-button">
                        <a className = "btn btn-default btn-border" href = "#">More Projects</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

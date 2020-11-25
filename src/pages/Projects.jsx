import React, { Component } from 'react';
import Projectslist from '../Components/Projectlist/Projectslist';

class Projects extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <div>
                <Projectslist />
            </div>
        );
    }
}

export default Projects;
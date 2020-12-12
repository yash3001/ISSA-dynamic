import React, { Component } from 'react';
import Projectslist from '../Components/Projectlist/Projectslist';
import Carousel1 from '../Components/Carousel/Carousel';

class Projects extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <div>
                 <Carousel1 />
                <Projectslist />
            </div>
        );
    }
}

export default Projects;
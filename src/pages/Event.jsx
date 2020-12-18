import React, { Component } from 'react';
import Eventslist from '../Components/Eventslist/Eventslist';
import Navigation from '../Components/Navigation/Navigation'

class Events extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <div className=''>
                 <Navigation />
                <Eventslist />
            </div>
        );
    }
}
export default Events;
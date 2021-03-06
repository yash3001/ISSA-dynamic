import React, { Component } from 'react';
import Elists from './Elists';
import Elistnextevents from './Elistnextevents';
import './Elists.css'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Next } from 'react-bootstrap/esm/PageItem';
import Cards from "./Cards";
// import Vid from './vid.mp4';

class Eventslist extends Component{
    state={ clicked: false}

    clickedeventHandler = () => {
        this.setState({clicked: !this.state.clicked});
    }

    render(){
        return(
            <div className="eventpagebackgimg">
                <div> 
                {/* <video id="background-video" loop autoplay>
                <source src={Vid} type="video/mp4" />
                Your browser does not support the video tag.
                </video> */}
                </div>

                <ul className="fulllist"><div className="heading-upcoming heading-secondary">Upcoming Event</div>
                <div className='upcoming-events'>
                {Elistnextevents.map((item, index) => {
                    return(
                        <div className='app'>
                        <Cards image={item.image} name={item.name} description={item.description} date={item.date} switchs={this.state.clicked}>
                            <a className="buttonforevent">Register&nbsp;Now</a>
                        </Cards>
                        </div>
                    )
                })}
                </div>
                <div className="heading-upcoming heading-secondary ">Our Events</div>
                <div className='our-event'>
                {Elists.map(( item ) => {
                    return(
                        <div className='app'>
                    <Cards image={item.image} name={item.name} description={item.description} date={item.date} switchs={this.state.clicked} youtube={item.youtube}>
                        <div className="iconcontainer">
                            <a onClick={this.clickedeventHandler}><i className="fa icons fa-youtube-play" aria-hidden="true"></i></a>
                        </div>
                    </Cards>
                    </div>
                    )
                })}
                </div>
                </ul>
            </div>
        )
    }
};

export default Eventslist;
import React, { Component } from 'react';
import Register from '../Components/Register/Register';

class Registers extends Component{

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <div>
               <Register />
            </div>
            
        );
    }
}
export default Registers;
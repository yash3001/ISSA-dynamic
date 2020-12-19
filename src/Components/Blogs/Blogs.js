import React, {Component} from 'react';
import './Blogs.css';

class Blogs extends Component {
    render(){
        return(
            <div className='blog-page'>
                <img className='d-flex' width='300px' height='300px' src= {require(`../../img/Illustrations/astro.png`).default} />
                <br />
                <div>Cooming Soon!</div>
            </div>
        )
        }
}
export default Blogs;
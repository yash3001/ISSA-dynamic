import React, { Component } from 'react';
import '../Navbar/Navbar.css';
import './Footer.css';
import logo from './issa-logo.png'
import fire from '../../Firebase';
import firebase from 'firebase'
const db = firebase.firestore();
db.settings({timestampInSnapshorts: true});
class Footer extends Component{
    
    state={
        suggestionbox: ""
    }
    handletext=e=>{
        
        this.setState({
            suggestionbox: e.target.value
        })
        console.log(this.state.suggestionbox);
    }
    handlesubmit=e=>{
        let messageRef=fire.database().ref('suggestionbox').orderByKey().limitToLast(200);
        if (this.state.suggestionbox != '')
        fire.database().ref('suggestionbox').push(this.state.suggestionbox);
        const input = document.getElementById('inputtext');
        input.value='';
        this.setState({
            suggestionbox: ""
        })
        console.log(this.state.suggestionbox);
    }
    render(){
        return(
            <footer className='foot'>
                <div className='items'>
                        <ul className='text-center wig d-flex justify-content-center'>
                                <li><a href="https://github.com/ISSA-ICON" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.youtube.com/channel/UCefzYN_1BquuPPVBQJDmKiQ" target="_blank"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.instagram.com/issa_nie/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        </ul>
                </div>
                <div className='name'>
                <a href="index.html">
                    <img className='text-center logo1 ' src={logo} ></img>
                </a>
                <h1 className='groupname'>
                   <span>NIE ISSA STUDENT CHAPTER</span> 
                </h1>
                </div>
                <div className="footer-copyright col-12">
                   <input placeholder='Tell us somthing u want us to know' className='suggestionbox text-center col-12 col-md-12 col-lg-12 col-xl-12' type='text' onChange={this.handletext} id='inputtext'></input>
                    <br />
                    <button className='btn btn--white btn--animated submit' onClick={this.handlesubmit}>SUBMIT</button>
                </div>
            </footer>

        )
    }
}
export default Footer;
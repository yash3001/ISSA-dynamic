import React, { Component } from 'react';
import '../Navbar/Navbar.css';
import './Footer.css';
import logo from './issa-logo.png'

class Footer extends Component{
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
                   <a className='suggestionbox col-12 col-md-12 col-lg-12 col-xl-12' target="_blank" href="https://forms.gle/hD6CDjorzfwBGRKU7" >
                   <span className='buttontext col-12'>SUGGESTION BOX</span>
                       </a>
                </div>
            </footer>

        )
    }
}
export default Footer;
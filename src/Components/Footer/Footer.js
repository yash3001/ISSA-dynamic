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
               <div class="container-fluid col-12 col-lg-12 col-md-12 col-xl-12">
                   <div className="row">

                <div className="address py-3 col-12 text-center col-md-12 col-lg-4 col-xl-4">
                    <span className='addresspage text-center col-6 col-md-6'>ADDRESS</span>
                    <div className="collegedetails">
                    <h3 className="collegename">THE NATIONAL INSTITUTE OF ENGINEERING</h3>
                      <span>Mananthavadi Rd, Vidyaranyapura, Mysuru, Karnataka 570008</span>
                      </div>
                </div>
                <div className="footer-copyright py-3  col-12 col-md-12 col-lg-4 col-xl-4">
                   <a className='suggestionbox col-12 col-md-12 col-lg-12 col-xl-12' target="_blank" href="https://forms.gle/hD6CDjorzfwBGRKU7" >
                   <span className='buttontext col-md-12'  >SUGGESTION BOX</span>
                       </a>
                </div>
               
                <div className="contactuspage py-3 text-center col-12 col-md-12 col-lg-4 col-xl-4">
                    <span className='contactus text-center col-12 col-md-12 col-lg-12'>CONTACT US </span>
                    <div class="contactdetails text-center col-12 col-md-12 col-lg-12">
                    <h3><span className="email">EMAIL US : issa_nie@nie.ac.in</span></h3>
                    <h4 className="contactno">BALACHANDRA DS: <a href="tel:7899797976"> 7899797976 </a></h4> 
                    <h4 className="contactno">SAMBHAV BHANDARI: <a href="tel:6261999236">  6261999236 </a> </h4> 
                    </div>
                  
                </div>
                </div>
                </div>
            </footer>

        )
    }
}
export default Footer;
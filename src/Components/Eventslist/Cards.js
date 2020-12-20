import React,{Component} from 'react';
import './Elists.css'

function Cards( props ) {
    const switchs = props.switchs;
    const images = props.image;
    const youtube = props.youtube;
    function Change(props){
        console.log(youtube);
    if (switchs && youtube!=undefined && youtube!=''){
        return <iframe className='card-img event-image w-100'  src={youtube} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    }
    else{
        return <img class="card-img event-image w-100" src={images} alt="Card image cap" /> 
    }
    }
    return(
        <div>
    <li>
            <div class="card elistcard">
                <Change />
                <div class="card-body">
                    <h5 class="card-title ename">{props.name}</h5>
                    <p class="card-text ediscription">{props.description}</p>
                    <div>{props.children}</div>
                    <div class="card-text d-flex justify-content-center edate">{props.date}</div>
                </div>
            </div>
    </li>
    <br />
    </div>
    )
    switchs != props.switchs;
};
export default Cards;
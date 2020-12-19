import React,{Component} from 'react';
import './Elists.css'

function Cards( props ) {
    return(
        <div>
    <li>
            <div class="card elistcard">
                <img class="card-img event-image w-100" src={props.image} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title ename">{props.name}</h5>
                    <p class="card-text ediscription">{props.description}</p>
                    <div>{props.children}</div>
                    <p class="card-text d-flex justify-content-center"><small class="text-muted">{props.date}</small></p>
                </div>
            </div>
    </li>
    <br />
    </div>
    )
};
export default Cards;
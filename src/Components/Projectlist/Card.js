import React from 'react';
import './Card.css';



function Card({title,imageUrl,body}){
    
    return(
        <div className="application">
            
        <style>{'body {  height: 100vh;background-color: #009FFF;background-image: linear-gradient(to bottom right, #009FFF, #ec2F4B);line-height: 200%;border-color:black;border-width:5px;border-style:solid; }'}</style>
    
        
        <div className='card-container'>
            <div className='image-container'>
                <img src={imageUrl} alt=''/>
                </div>
                <div className='card-title'>
                    <h3>{title}</h3>
                </div>
                <div className='card-body'>
                    <p>{body}</p>
                </div>
                <div className='btnn'>
                    <button>
                        <a>
                            View More
                        </a>
                    </button>
                </div>
                
                </div> 
                </div>
             
                
        
        
    )

}
 

export default Card;
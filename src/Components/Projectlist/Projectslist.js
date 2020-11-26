import React, { Component } from 'react';
import Card from './Card';
import Projects from './Projectinfo';


class Projectslist extends Component{
    
    render(){
        return(
            <div className='projectpage'>
                <div className='col-12'>
            {
                Projects.map((item,index)=>{
                    return(
                        <div className=''>
                            <div className='App' key={index}>
            
                                <Card 
                                title={item.name}
                                imageUrl={item.imageUrl}
                                body={item.body}
                                />

                            </div>
                        </div>
                    )
                })
            }
            </div>
           


           </div>
        );
    }
}

export default Projectslist
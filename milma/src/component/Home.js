import React from 'react'
import '../App.css'
import Card from 'react-bootstrap/Card';
import Group from '../component/images/Group 3.png'
import img1 from '../component/images/img1.png'
import axios from 'axios'
import { useState } from 'react';


function Home() {
  const[List , SetList] = useState([]);

axios.get("http://localhost:2319/api/info/",{

})
.then((res)=> SetList(res.data))


  return (
    <div>
       <div className='home-back'>
        <img  className='first-img' src={Group}/>
       </div>
       <div className='container'>
        <div className='left-image'>
          <img src={img1}/>
        </div>
        <div className='right-text'>
          <div id="cdm">
            <h4 style={{lineHeight:'33px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Fusce tristique vestibulum enim, eget mattis ligula venenatis sit amet.
             Nunc ex magna, convallis ut facilisis nec, vehicula non sem. Mauris vel maximus ex. Proin pellentesque, turpis ut lacinia vulputate, 
              mi lacus interdum est, sit amet pharetra felis massa a risus. Maecen</h4>
          </div>
        </div>

       </div>

       <>
       <div style={{width:"auto",height:'140px', backgroundColor:"blue"}}>
        <h2 style={{textAlign:'center', color:"white", paddingTop:"50px"}}>Product</h2>
       </div>
       <div>
        <h3 className='chocolate'>Chocolate</h3>
        <div className='card-main'>
          {List.map((data)=>(
              <Card style={{ width: '24rem', border:'3px solid brown', marginBottom:'30px', borderRadius:'20px'}}>
          <img src= {`/upload/${data.image}`}width={'350px'} height={'350px'}alt='car-1'></img>
              <Card.Body>
                <Card.Title style={{textAlign:'center'}}>{data.name}</Card.Title>
                <Card.Text style={{textAlign:'center'}}>
                  <p>{data.litter_box}L</p>
                  <p style={{lineHeight:'1px'}}>{data.price}$</p>
        
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
  
        </div>
       </div>
       </>
    </div>
  )
}

export default Home
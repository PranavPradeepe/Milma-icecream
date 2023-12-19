import React from 'react'
import Axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

function Carinfo() {
const[List , SetList] = useState([]);


useEffect(()=>{
  Axios.get('http://localhost:2319/api/info/',{

  })
  .then((res)=> SetList(res.data))

},[]);

 const handleDelete =(Icecream)=>{
  Axios.get(`http://localhost:2319/api/info/delete/${Icecream}`,window.location.reload())
}


  return (
    <div>
      <div className='services-banner'>
        <h1 style={{textAlign:'center',fontSize:'3.3em',fontWeight:'bolder',paddingTop:'150px'}}>Ice cram Types</h1>
      </div>
      <div>
        <h4 style={{textAlign:'center',fontWeight:'bolder',color:'blue',fontSize:'2em',paddingTop:'100px',}}>Add New Ice cream</h4>
        <div>
          <Link to='/form'>
        <button style={{display:'flex',alignItems:'center',margin:'auto',padding:'10px 15px',color:'white',background:'blue', border:'none'}} >AddNew</button>
        </Link>
        </div>
      </div>
      <div className='card-main'>

  {List.map((data)=>(
      <div className='card'>
        <div className='cardImg'>
          <img src= {`/upload/${data.image}`}width={'350px'} height={'400px'} alt='card -1'></img>
        </div>
        <div className='cardContent'>
          <h2 style={{textAlign:'center',padding:'5px 0px'}}>{data.name}</h2>
          <table>
            <tr>
              <td><h4>Liter</h4></td>
              <td>{data.litter_box}</td>
            </tr>

            <tr>
              <td><h4>price</h4></td>
              <td>{data.price}</td>
            </tr>
           <tr>
            <td><h4>category</h4></td>
            <td>{data.category}</td>
           </tr>
          </table>
          <button style={{width:'25rem',padding:'15px 0px',background:'darkred',color:'white',border:'none',fontSize:'25px'}} onClick={()=>handleDelete(data._id)} >Delete</button>

        </div>
      </div>
      ))}
      </div>
    </div>
  )
}

export default Carinfo
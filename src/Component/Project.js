import React from 'react'
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function Project() {
  return (
     
    <div className='main-container' >
         
    <h1 style={{marginLeft:'40%' ,color:'white',marginTop:'5%',position:'absolute'}}>My Projects </h1>
    <table class="table table-striped"  >
      
       <tr>
         <td>Name</td>
         <td>Code link</td>
       </tr>

      <tr>
       <td >Ecommerce website</td>
       <td><a href='https://github.com/Sathiskumarssf/ecommerce'> Ecommerce</a></td>
      </tr>
      <tr>
       <td >Phone & lab sale appilication</td>
       <td><a href='https://github.com/Sathiskumarssf/Phone-lab-sale-website'> technology-sale-website</a></td>
      </tr>
      <tr>
       <td >Whether checker</td>
       <td><a href='https://sathiskumarssf.github.io/WEATHER-/'>you can see this web site </a></td>
      </tr>
      <tr>
       <td >React calculater</td>
       <td><a href='https://github.com/Sathiskumarssf/react-calculator'> react-calculator</a></td>
      </tr>
      <tr>
       <td >Players ranking -react</td>
       <td><a href='https://github.com/Sathiskumarssf/fruit-website-project/tree/main'>Ranking-players</a></td>
      </tr>

      
   </table>
</div>)
  
}

export default Project 
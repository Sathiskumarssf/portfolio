import React   from 'react'
import './main.css'
import face from './face.jpg'
 
import  BiHeart from '../../node_modules/bootstrap-icons/icons/github.svg'
import linkdin from '../../node_modules/bootstrap-icons/icons/linkedin.svg'
import facebook from '../../node_modules/bootstrap-icons/icons/house-exclamation-fill.svg'
import phone from '../../node_modules/bootstrap-icons/icons/phone-fill.svg'
function Randomname() {
      
  return (
    <div>
         
  <div class="main-container    ">
     
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">About me</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNa" aria-controls="navbarNa" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNa">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="https://github.com/Sathiskumarssf">Git <img src={BiHeart}/></a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="https://www.linkedin.com/in/sathiskumar-sk-97771b246/">LinkedIn <img src={linkdin}/></a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="https://www.instagram.com/sathiskumar.sathis.1612147/?hl=en" >075-9686864 <img src={phone}/></a>
            </li>
            <li class="nav-item">
              <a class="nav-link active " aria-disabled="true"href="https://www.facebook.com/sathiskumar.sathis.1612147/">Rathnapura,Rakwana <img src={facebook} /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    

  
    <div class="container text-center  ">
      <div class="row">
      <div class="col">
          <div class="container1">
            <img src={face} alt="Your Image" class="img-fluid rounded mt-5 " width="500"  ></img>
          </div>
        </div>
        <div class="col ">
          <div class="container     w-100   mt-5 pt-5 ">
            <h1>I'm sathis </h1>
            <h1>Software Engineer undergraduate.my GPA is 3.6</h1>
            <h5>I learned lot of technologies base on  
             Web devolopment,Data science,Mobile devolopment, and Artificial interlegent</h5>
            <a href='sathiskumarsk2001@gmail.com'><button type="button" class="btn btn-success">Hire me</button></a>
 
          </div> 
        </div>
       
         
      </div>
    </div>

    
  </div>

   
    </div>
  )
}

export default Randomname
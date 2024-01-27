import React, { useState,useEffect } from 'react'
import star from '../../node_modules/bootstrap-icons/icons/cc-square.svg'
import fillstar from '../../node_modules/bootstrap-icons/icons/star-fill.svg'


import './main.css'
function Myskill() {


   const [backgroundColor,setBackgroundcolor] =useState('white');

   useEffect(()=>{

    const changecolorItervel =setInterval(()=>{
      const newcolor =getRadomColor();
      setBackgroundcolor(newcolor);
    },3000)

   })

   function getRadomColor(){
    const colors =[ 'pink','yellow','white','orange' ,'olive','gold','lightblue'];

    const random =Math.floor(Math.random()*colors.length);
    return colors[random];
   }









  return (
    <div>
    <div className="main-container">
             <h1 style={{color:'white',margin:'5% 0% 0% 25%',position:'absolute'}}>MY SKILLS</h1>2
  <div class="container m-5 ">
    <h1 style={{marginTop:'8%'}}>Technical Skills </h1>
    <div class="row p-5"  style={{margin:'1%'}}>
             <div class="col" style={{float:'left'}}>
                 <h1 style={{color:'white',margin:'5% 0% 0% 5%' }}>CSS /HTML  </h1>      
             </div>
             <div class="col" style={{position:'relative'}}>
             <div style={{width:'20%',height:'80%',backgroundColor:backgroundColor,float:'left',margin:'0% 0% 0% 20%' , bottom:' 0%', position:'absolute' }}></div>               
                 <div style={{width:'20%',height:'90%',backgroundColor:'green' , bottom:' 0%', position:'absolute'  }}></div>               
             </div>           
             <div class="col" style={{float:'left'}}>
                 <h1 style={{color:'white',margin:'5% 0% 0% 5%' }}>React JS</h1>      
             </div>
             <div class="col " style={{position:'relative'}}>
             <div style={{width:'20%',height:'85%',backgroundColor:backgroundColor,float:'left',margin:'0% 0% 0% 20%' , bottom:' 0%', position:'absolute' }}></div>               
                 <div style={{width:'20%',height:'90%',backgroundColor:'green', bottom:' 0%', position:'absolute'  }}></div>               
             </div>       
             <div class="col" style={{float:'left'}}>
                 <h1 style={{color:'white',margin:'5% 0% 0% 5%' }}>JAVA SCRIPT </h1>      
             </div>
             <div class="col " style={{position:'relative'}}>
             <div style={{width:'20%',height:'70%',backgroundColor:backgroundColor,float:'left',margin:'0% 0% 0% 20%' , bottom:' 0%', position:'absolute' }}></div>               
                 <div style={{width:'20%',height:'90%',backgroundColor:'green' , bottom:' 0%', position:'absolute' }}></div>               
             </div>       
    </div>
    <div class="row p-5"  style={{margin:'5%'}}>
             <div class="col" style={{float:'left'}}>
                 <h1 style={{color:'white',margin:'5% 0% 0% 5%' }}>Version Control </h1>      
             </div>
             <div class="col" style={{position:'relative'}}>
             <div style={{width:'20%',height:'60%',backgroundColor:backgroundColor,float:'left',margin:'0% 0% 0% 20%' , bottom:' 0%', position:'absolute' }}></div>               
                 <div style={{width:'20%',height:'90%',backgroundColor:'green', bottom:' 0%', position:'absolute'   }}></div>               
             </div>           
             <div class="col" style={{float:'left'}}>
                 <h1 style={{color:'white',margin:'5% 0% 0% 5%' }}>Node JS </h1>      
             </div>
             <div class="col " style={{position:'relative'}}>
             <div style={{width:'20%',height:'75%',backgroundColor:backgroundColor,float:'left',margin:'0% 0% 0% 20%' , bottom:' 0%', position:'absolute' }}></div>               
                 <div style={{width:'20%',height:'90%',backgroundColor:'green', bottom:' 0%', position:'absolute'  }}></div>               
             </div>       
             <div class="col" style={{float:'left'}}>
                 <h1 style={{color:'white',margin:'5% 0% 0% 5%' }}>Express JS </h1>      
             </div>
             <div class="col " style={{position:'relative'}}>
             <div style={{width:'20%',height:'60%',backgroundColor:backgroundColor,float:'left',margin:'0% 0% 0% 20%' , bottom:' 0%', position:'absolute'}}></div>               
                 <div style={{width:'20%',height:'90%',backgroundColor:'green', bottom:' 0%', position:'absolute'  }}></div>               
             </div>     


             
    </div>
    
    
   </div>
   
</div>
    <div className="main-container">
             <h1 style={{color:'white',margin:'5% 0% 0% 25%',position:'absolute'}}> </h1>2
  <div class="container m-5 ">
     
    <div class="row p-5"  style={{margin:'1%'}}>
             <div class="col" style={{float:'left'}}>
                 <h1 style={{color:'white',margin:'5% 0% 0% 5%' }}>Angular JS </h1>      
             </div>
             <div class="col" style={{position:'relative'}}>
             <div style={{width:'20%',height:'80%',backgroundColor:backgroundColor,float:'left',margin:'0% 0% 0% 20%' , bottom:' 0%', position:'absolute' }}></div>               
                 <div style={{width:'20%',height:'90%',backgroundColor:'green', bottom:' 0%', position:'absolute'   }}></div>               
             </div>           
             <div class="col" style={{float:'left'}}>
                 <h1 style={{color:'white',margin:'5% 0% 0% 5%' }}> Ruby </h1>      
             </div>
             <div class="col " style={{position:'relative'}}>
             <div style={{width:'20%',height:'70%',backgroundColor:backgroundColor,float:'left',margin:'0% 0% 0% 20%' , bottom:' 0%', position:'absolute' }}></div>               
                 <div style={{width:'20%',height:'90%',backgroundColor:'green', bottom:' 0%', position:'absolute'  }}></div>               
             </div>       
             <div class="col" style={{float:'left'}}>
                 <h1 style={{color:'white',margin:'5% 0% 0% 5%' }}>PHP (sever) </h1>      
             </div>
             
             <div class="col " style={{position:'relative'}}>
             <div style={{width:'20%',height:'75%',backgroundColor:backgroundColor,float:'left',margin:'0% 0% 0% 20%' , bottom:' 0%', position:'absolute' }}></div>               
                 <div style={{width:'20%',height:'90%',backgroundColor:'green' , bottom:' 0%', position:'absolute' }}></div>               
             </div>       
    </div>
     
      <h1>Soft Skills</h1>
      <div class="row p-5"  style={{margin:'1%'}}>
             <div class="col" style={{float:'left'}}>
                 <h1 style={{color:'white',margin:'5% 0% 0% 5%' }}>Problem-Solving  </h1>      
             </div>
             <div class="col" style={{position:'relative'}}>
             <div style={{width:'20%',height:'80%',backgroundColor:backgroundColor,float:'left',margin:'0% 0% 0% 20%' , bottom:' 0%', position:'absolute' }}></div>               
                 <div style={{width:'20%',height:'90%',backgroundColor:'green', bottom:' 0%', position:'absolute'   }}></div>               
             </div>           
             <div class="col" style={{float:'left'}}>
                 <h1 style={{color:'white',margin:'5% 0% 0% 5%' }}> Adaptability   </h1>      
             </div>
             <div class="col " style={{position:'relative'}}>
             <div style={{width:'20%',height:'70%',backgroundColor:backgroundColor,float:'left',margin:'0% 0% 0% 20%' , bottom:' 0%', position:'absolute' }}></div>               
                 <div style={{width:'20%',height:'90%',backgroundColor:'green', bottom:' 0%', position:'absolute'  }}></div>               
             </div>       
             <div class="col" style={{float:'left'}}>
                 <h1 style={{color:'white',margin:'5% 0% 0% 5%' }}>leadership</h1>      
             </div>
             
             <div class="col " style={{position:'relative'}}>
             <div style={{width:'20%',height:'75%',backgroundColor:backgroundColor,float:'left',margin:'0% 0% 0% 20%' , bottom:' 0%', position:'absolute' }}></div>               
                 <div style={{width:'20%',height:'90%',backgroundColor:'green' , bottom:' 0%', position:'absolute' }}></div>               
             </div>       
    </div>
    
   </div>
   
</div>
</div>
  )
}

export default Myskill
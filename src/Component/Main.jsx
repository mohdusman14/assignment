import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Main() {
 const [data,setData] = useState([])
 const [singleItem,setSingleItem] = useState({})

 const getData = (item)=>{
  console.log(item)
  setSingleItem(item)
 }

  useEffect(()=>{
    axios.get('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020')
    .then((res)=>{
      console.log(res.data.results)
      setData(res.data.results)
      setSingleItem(res.data.results[0])
    })
},[])
  return (
    <>
      <div className="container-fluid bg-primary p-3">
        <h4 className='text-white'>My Challenge</h4>
      </div>
      
     <div className='conatiner pt-2'>
     <div className='card w-50 m-auto'  style={{boxShadow:'0 0 4px -2px',}}>
        <div className='card-body py-5 d-flex align-items-center'>
        <div className='me-3'>
          <img src={singleItem?.picture?.large} style={{borderRadius:'100%',}}  alt="" />
        </div>
        <div >
            <h1 style={{color:'crimson',borderBottom:'3px solid crimson'}}>{singleItem?.name?.title } {singleItem?.name?.first}  {singleItem?.name?.last}</h1>
            <span>{singleItem?.location?.street?.number} {singleItem?.location?.street?.name}, {singleItem?.location?.city}, {singleItem?.location?.country}, {singleItem?.location?.timezone?.offset}, {singleItem?.location?.tiemzone?.description}</span><br/>
            <spna >{singleItem?.email}</spna>
           </div>
        </div>
      </div>
     </div>

      <div className="container py-5">
        <div className="row ">
        {data.map((item,index)=>
        <div className='col-md-3 pe-2 pb-3' key={index} style={{cursor:'pointer'}}  onClick={()=>getData(item)}>
        <div className='card' style={{boxShadow:'0 0 4px -2px',height:'100%'}}>
           <div className='card-body' >
          
           <span style={{textTransform:'capitalize'}}>{item.gender} - NL</span>
            <h5>{item.name.title } {item.name.first}  {item.name.last}</h5>
            <spna style={{color:'crimson'}}>{item.email}</spna>
           
           </div>
        </div>
        </div>)}
        </div>
      </div>
     
    </>
  )
}



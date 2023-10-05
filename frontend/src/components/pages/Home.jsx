import React, { useEffect } from 'react'
import Slider from './Slider'
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(()=>{
    AOS.init({
        duration:8000,
    })
},[])
  return (
    <>
    <div className=' container-fluid'>
        <div className='row'>
            <div className='col-sm-6'>
        <Slider/>
        </div>
        <div className='col-sm-6 py-5'>
          <h1 className='text-danger'>img elements must have an alt prop</h1>
        <b>
        img elements must have an alt prop, either with meaningful text
        img elements must have an alt prop, either with meaningful text
        mg elements must have an alt prop, either with meaningful text
        mg elements must have an alt prop, either with meaningful text mg 
        </b>
        <b className='text-danger'>
         must have an alt prop, either with meaningful text
        mg elements must have an alt prop, either with meaningful text
        mg elements must have an alt prop, either with meaningful text
        mg elements must have an alt prop, either with meaningful textmg elements
         must have an alt prop, either with meaningful text
         </b>
         <p>
         mg elements must have an alt prop, either with meaningful text
         mg elements must have an alt prop, either with meaningful text
         mg elements must have an alt prop, either with meaningful text
         mg elements must have an alt prop, either with meaningful text
         mg elements must have an alt prop, either with meaningful text
         mg elements must have an alt prop, either with meaningful text
        </p>
        </div>
        </div><br/>
    </div>
    </>
  )
}

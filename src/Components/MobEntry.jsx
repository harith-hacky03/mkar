import React from 'react'
import './MobEntry.css'
import flag from '../assets/flag.png'
import arrow from '../assets/arrow.svg'
import ladysit from '../assets/ladysit.png'
import { Link } from 'react-router-dom'
const MobEntry = () => {
  return (
    <div className='mx-12 mt-10  overflow-hidden'>
        <div className=' font-Inter font-bold pb-5 text-[24px]'>Name Of App</div>
        <div className='grid-cols-2 grid '>
          <div className='mt-32'>
            <div>
              <div className='text-head font-Inter text-[40px] font-semibold'>Mobile Number Verification</div>
              <div className='font-Inter text-[14px] text-gray my-4'>An OTP will be sent to the mobile number provided below.</div>
              <div className='box flex my-5'>
                <div className='flex-row'>
                  <img className='flex p-3' src={flag} alt='indian-flag'/>
                </div>
                <div className='arrow h-2 mr-2 my-auto'>
                  <img src={arrow} alt='arrow'/>
                </div>
                <div className='line flex'></div>
                <div className='num-text h-6 ml-4 my-auto'>Enter your phone number...</div>
              </div>
              <div className='flex my-5'>
                <div className='checkbox'></div>
                <div className='content w-[80%] ml-3'>By providing your number, you agree to receive occasional promotional <br/> offers, updates, and important notifications from us.<span className='text-sm text-head'>Learn More</span></div>
                <div className=''>
                  <Link to="verify">Next</Link>
                </div>
              </div>
            </div>
          </div>
          <div >
            <img width={550} src={ladysit} alt='lady'/>
          </div>
        </div>
    </div>
  )
}

export default MobEntry

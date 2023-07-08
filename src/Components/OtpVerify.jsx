import React from 'react'
import './MobEntry.css'
import flag from '../assets/flag.png'
import box from '../assets/box.svg'
import man from '../assets/man.png'
import { Link } from 'react-router-dom'
const MobEntry = () => {
    const ar=[1,2,3,4,5,6]
  return (
    <div className='mx-12 mt-10  overflow-hidden'>
        <div className=' font-Inter font-bold pb-5 text-[24px]'>Name Of App</div>
        <div className='grid-cols-2 grid '>
          <div className='mt-32'>
            <div>
              <div className='text-head font-Inter text-[40px] font-semibold'>OTP Verification</div>
              <div className='font-Inter text-[14px] text-gray my-4'>An OTP has been sent to the provided number, please enter the OTP in the field below.</div>
              <div className='flex my-5'>
                    {ar.map((a)=>{
                        return(
                            <div>
                                <img src={box} alt='box' />
                            </div>
                        )
                    })}
              </div>
              <div className='flex my-5'>
                <div className='checkbox'></div>
                <div className='content w-[80%] ml-3'>By creating an account with us, you consent to receive important updates,<br/> offers, and information via email. We value your privacy and will only use<br/>your email for relevant communications.<span className='text-sm text-head'>Learn More</span></div>
                <div className=''>
                  <Link to="/dashboard">Next</Link>
                </div>
              </div>
            </div>
          </div>
          <div >
            <img width={550} src={man} alt='lady'/>
          </div>
        </div>
    </div>
  )
}

export default MobEntry

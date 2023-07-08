import React from 'react'
import settings from '../assets/settings.svg'
import bell from '../assets/bell.svg'
import bellblack from '../assets/bellblack.svg'
import blarrow from '../assets/blarrow.svg'
import './DashBoard.css'
const DashBoard = () => {
    const options=["Dashboard","Schedule","View Jobs","Settings"]
    const bells=[1,2,3]
    const heading=[{"head":"Total Revenue","values":"₹91,940","sub":"75% more than last year"},{"head":"Weekly Revenue","values":"₹91,940","sub":"50% more than last year"},{"head":"Expert Revenue","values":"4.2/5","sub":"75% more than last year"},{"head":"Experience","values":"45600","sub":"Global Rank : 364347"}]
    const heads=["Name","Type","Ref.No","Date","Amount"]
    const table2=["Customer Name","Type","Status","Date","Time"]
    const details=[1,2,3,4,5]
    var n=0;
  return (
    <div className='min-h-screen overflow-hidden'>
        <div className='flex'>
            <div className='p-5 '>
                <div className='w-[80%] mb-5 mx-auto text-center logo'>Logo</div>
                <div className='pt-4 opt mb-5'>Main Menu</div>
                <div className='w-[90%] ml-7 text-center'>
                    {options.map((op)=>{
                        return(
                            <div className='flex opt mb-5'>
                            <img className='px-2' src={settings} alt=''/>
                            <div className='mr-7'>{op}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
            <div className='line min-h-[155vh]'></div>
            </div>
            <div className='w-[100%]'>
                <div className=''>
                    <div className='flex justify-between p-3 h-14'>
                        <div>
                        <div className='hi'>Hi Jessica</div>
                        <div className='wel'>Welcome Back!</div>
                        </div>
                        <div className='flex items-center'>
                            <div className='box1 mr-7'>
                            <img className='p-2' src={bell} alt=''/>
                            </div>
                            <div className='flex'>
                                {bells.map((b)=>{
                                    return(
                                        <div className='box1 mr-6'>
                                            <img className='p-2' src={bellblack} alt=''/>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='ml-11 flex items-center'>
                                <div className='mr-2 us'>Username</div>
                                <div className='circle mr-4'></div>
                            </div>
                        </div>
                    </div>
                    <div className='hor-line mt-2'></div>
                    <div className='flex'>
                        {heading.map((he)=>{
                            {n+=1}
                            return(
                                <div className={`${(n%2===0)?'boxwh':'boxoran'} m-6`}>
                                <div className='p-7'>
                                    <div className={`${(n%2===0)?'hb':'hw'} `}>{he.head}</div>
                                    <div className={`${(n%2===0)?'valw':'valb'} mt-3`}>{he.values}</div>
                                    <div className='flex pt-6 items-center'>
                                        <div className={`${(n%2===0)?'subb':'subw'}`}>{he.sub}</div>
                                        <div className='arbox items-center ml-6'>
                                            <img className='p-2' src={blarrow} alt=''/>
                                        </div>
                                    </div>
                                </div>
                        </div>
                            )
                        })}
                        
                    </div>
                    <div className='mt-4'>
                        <div className='maxbox m-auto p-6 pb-8'>
                            <div className='flex justify-between'>
                            <div className='hb'>Recent Transactions</div>
                            <div className='arbox items-center ml-6'>
                                            <img className='p-2' src={blarrow} alt=''/>
                                        </div>
                            </div>
                            <div>
                                <div className='flex  mt-7 '>
                                        {heads.map((h)=>{
                                            return(
                                                <div className='tabhead mx-[35px] px-16'>{h}</div>
                                            )
                                        })}
                                </div>
                                <div className='tabline mt-4'></div>
                                <div>
                                <div className='grid grid-rows-5 '>

                                        {details.map((d)=>{
                                            return(
                                                <div className='flex tabcont mt-4'>
                                                <div className='mx-[100px]'>Harith</div>
                                                <div className='recback ml-[50px]'>
                                                    <div className='w-[50px] m-auto mt-1'>Blowjob</div>
                                                </div>
                                                <div className='ml-[115px]'>1223364377</div>
                                                <div className='ml-[160px]'>08/07/2023</div>
                                                <div className='ml-[180px]'>+100</div>
                                                </div>
                                            )
                                        })}   
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <div className='maxbox m-auto p-6 pb-8'>
                            <div className='flex justify-between'>
                            <div className='hb'>Upcoming Works</div>
                            <div className='arbox items-center ml-6'>
                                            <img className='p-2' src={blarrow} alt=''/>
                                        </div>
                            </div>
                            <div>
                                <div className='flex  mt-7 '>
                                        {table2.map((h)=>{
                                            return(
                                                <div className='tabhead mx-[27px] px-16'>{h}</div>
                                            )
                                        })}
                                </div>
                                <div className='tabline mt-4'></div>
                                <div>
                                <div className='grid grid-rows-5 '>

                                        {details.map((d)=>{
                                            return(
                                                <div className='flex tabcont mt-4'>
                                                <div className='mx-[120px]'>Harith</div>
                                                <div className='recback ml-[50px]'>
                                                    <div className='w-[50px] m-auto mt-1'>Blowjob</div>
                                                </div>
                                                <div className='blu ml-[110px]'>
                                                <div className='ml-[8px] mt-1 text-center text-white'>Booked</div>
                                                </div>
                                                <div className='ml-[140px]'>08/07/2023</div>
                                                <div className='ml-[150px]'>10:30</div>
                                                </div>
                                            )
                                        })}   
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashBoard

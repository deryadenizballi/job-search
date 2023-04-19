import React from 'react'

import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'

const FooterDiv = () => {
  return (
    <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid
    grid-cols-5 m-auto items-center justify-center'>

        <div>
            <div className="logoDiv">
            <h1 className='logo text-[25px] text-white pb-[1.5rem]'><strong>Job</strong>Search</h1>
            </div>
       
        <p className='text-white pb-[13px] opactiy-70 leading-7'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, magnam.
        </p>
        </div>

        <div className="grid">
            <span className='divTitle text-[18px] font-semibold pb-[1.rem] text-white mb-[20px]' >
                Company
            </span>
            <div className="grid gap-3">
                <li className='text-white opactiy-[.7] hover:opactiy-[1]' >About Us</li>
                <li className='text-white opactiy-[.7] hover:opactiy-[1]' >Features</li>
                <li className='text-white opactiy-[.7] hover:opactiy-[1]' >News</li>
                <li className='text-white opactiy-[.7] hover:opactiy-[1]' >FAQ</li>
            </div>
        </div>

        <div className="grid">
            <span className='divTitle text-[18px] font-semibold pb-[1.rem] text-white mb-[20px]' >
                Resource
            </span>
            <div className="grid gap-3">
                <li className='text-white opactiy-[.7] hover:opactiy-[1]' >About Us</li>
                <li className='text-white opactiy-[.7] hover:opactiy-[1]' >Features</li>
                <li className='text-white opactiy-[.7] hover:opactiy-[1]' >News</li>
                <li className='text-white opactiy-[.7] hover:opactiy-[1]' >FAQ</li>
            </div>
        </div>


        <div className="grid">
            <span className='divTitle text-[18px] font-semibold pb-[1.rem] text-white mb-[20px]'  >
                Company
            </span>
            <div className="grid gap-3">
                <li className='text-white opactiy-[.7] hover:opactiy-[1]' >Account</li>
                <li className='text-white opactiy-[.7] hover:opactiy-[1]' >Features</li>
                <li className='text-white opactiy-[.7] hover:opactiy-[1]' >Req Demo</li>
                <li className='text-white opactiy-[.7] hover:opactiy-[1]' >Carreers</li>
            </div>
        </div>

        <div className="grid">
            <span className='divTitle text-[18px] font-semibold pb-[1.rem] text-white mb-[20px]'  >
               Contact Info
            </span>
            <small className='text-[14px] text-white'  >
                ddbmail@outlook.com
            </small>
            <div className='icons flex gap-4 py-[1rem]' >
            <AiFillInstagram className='icon h-[35px] w-[35px]  text-white'/>

            <BsFacebook className='icon h-[30px] w-[30px]  text-white'/>

            <AiFillTwitterCircle className='icon h-[35px] w-[35px]  text-white'/>
            </div>
        </div>


    </div>
  )
}

export default FooterDiv
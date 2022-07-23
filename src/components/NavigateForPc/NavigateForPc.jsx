import React from 'react'
import './NavigateForPc.css'
import { Link } from 'react-router-dom'
import { FaWpforms, FaRegAddressCard } from 'react-icons/fa'
import { GiConfirmed } from 'react-icons/gi'

export default function NavigateForPc() {
    return (
        <div className='wraper-nav'>
            <div className='navigate-wraper'>
                <Link to='/' className='slider-card'>
                    <div className='icon' ><FaWpforms />  </div>
                    <div className='title' >Formulir  </div>
                </Link>
            </div>
            <div className='navigate-wraper'>
                <Link to='/Wizard2' className='slider-card'>
                    <div className='icon' ><FaRegAddressCard />  </div>
                    <div className='title' >Foto  </div>
                </Link>
            </div>
            <div className='navigate-wraper'>
                <Link to='/Wizard3' className='slider-card'>
                    <div className="icon" ><GiConfirmed />  </div>
                    <div className='title' >Confirmasi  </div>
                </Link>
            </div>
        </div>
    )
}

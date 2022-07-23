import React from 'react'
import { Link } from 'react-router-dom'
import { FaWpforms, FaRegAddressCard } from 'react-icons/fa'
import { GiConfirmed } from 'react-icons/gi'
import './Navigate.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';





export default function Navigate(props) {
    const { done, photoDone } = props
    return (
        <div className='wraper'>
            <Swiper slidesPerView={1.4} className='wrap-swiper' >
                <SwiperSlide className='swiper'>
                    <Link to='/' className='slider-card'>
                        <div className={done === true ? 'icon-done' : 'icon'} ><FaWpforms />  </div>
                        <div className='title' >Formulir  </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='swiper'>
                    <Link to='/Wizard2' className='slider-card'>
                        <div className={photoDone === true ? 'icon-done' : 'icon'}><FaRegAddressCard />  </div>
                        <div className='title' >Foto  </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='swiper'>
                    <Link to='/Wizard3' className='slider-card'>
                        <div className='icon' ><GiConfirmed />  </div>
                        <div className='title' >Confirm  </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

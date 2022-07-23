import React, { useState, useEffect } from 'react'
import './Wizard3.css'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import NavigateForPc from '../NavigateForPc/NavigateForPc'
import load from '../../assets/loading.gif'


export default function Wizard3(props) {
    const { previewImage2, setConvertToText, convertToText, imageUrl, firstName, lastName, biodata, provinsi,
        kota, kecamatan, kelurahan, previewImage, previewImage3, isLoading ,sendData
    } = props



    return (
        <div className='container-confirm'>
            <div className='nav-wraper'>
                <NavigateForPc />
            </div>
            {isLoading === true ? <img className='load' src={load} /> :
                <div className='confirm-wraper'>
                    <label className='title-form'>Confirm Your Data</label>
                    <div className='datas-wraper'>
                        <div className='key'>
                            <p>First Name :</p>
                            <p>Last Name :</p>
                            <p>Biodata :</p>
                            <p>Provinsi :</p>
                            <p>Kota :</p>
                            <p>Kecamatan</p>
                            <p>Kelurahan :</p>
                            <p>NIK :</p>
                        </div>
                        <div className='value'>
                            <p>{firstName}</p>
                            <p>{lastName}</p>
                            <p>{biodata}</p>
                            <p>{provinsi}</p>
                            <p>{kota}</p>
                            <p>{kecamatan}</p>
                            <p>{kelurahan}</p>
                            <p>{convertToText}</p>
                        </div>
                    </div>
                    <div className='photo-result'>
                        <label>Photo Selfi </label>
                        <div className='wraper-img'>
                            <Zoom>
                                <img className={previewImage != '' ? 'photo-value' : 'photo'} src={previewImage} alt="photo selfi" />
                            </Zoom>
                        </div>
                    </div>
                    <div className='photo-result'>
                        <label>Photo KTP </label>
                        <div className='wraper-img'>
                            <Zoom>
                                <img className={previewImage2 != '' ? 'photo-value' : 'photo'} src={previewImage2} alt="photo ktp" />
                            </Zoom>
                        </div>
                    </div>
                    <div className='photo-result'>
                        <label>Photo Bebas </label>
                        <div className='wraper-img'>
                            <Zoom>
                                <img className={previewImage3 != '' ? 'photo-value' : 'photo'} src={previewImage3} alt="photo bebas" />
                            </Zoom>
                        </div>
                    </div>
                    <button className='btn-submit3' onClick={() => sendData()} >submit</button>
                </div>
            }
        </div>
    )
}

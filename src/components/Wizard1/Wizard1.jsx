import React, { useState } from 'react'
import './Wizard1.css'
import Select from 'react-select'
import NavigateForPc from '../NavigateForPc/NavigateForPc'

export default function Wizard1(props) {
    const { firstName, setFirstName } = props
    const { lastName, setLastName } = props
    const { biodata, setBiodata } = props
    const { provinsi, setProvinsi } = props
    const { kota, setKota } = props
    const { kecamatan, setKecamatan } = props
    const { kelurahan, setKelurahan } = props
    const { provinces, regencies, districts, villages, submitForm } = props

    const [focusFirst, setFocusFirst] = useState(false)
    const [focusLast, setFocusLast] = useState(false)
    const [focusBiodata, setFocusBiodata] = useState(false)

    return (
        <div className='wraper-one'>
            <div className='nav-wraper'>
                <NavigateForPc />
            </div>
            <div className='form-wraper'>
                <form className='form'>
                    <label className={focusFirst === true ? 'label-focus' : ''}>First Name</label>
                    <input className={focusFirst === true ? 'input-focus' : ''} onFocus={() => setFocusFirst(true)} onBlur={() => setFocusFirst(false)} onChange={(x) => setFirstName(x.target.value)} value={firstName} type="text" placeholder='First Name' required />
                    <label className={focusLast === true ? 'label-focus' : ''}>Last Name</label>
                    <input className={focusLast === true ? 'input-focus' : ''} onFocus={() => setFocusLast(true)} onBlur={() => setFocusLast(false)} onChange={(x) => setLastName(x.target.value)} value={lastName} type="text" placeholder='Last Name' required />
                    <label className={focusBiodata === true ? 'label-focus' : ''}>Biodata</label>
                    <textarea className={focusBiodata === true ? 'textarea-focus' : ''} onFocus={() => setFocusBiodata(true)} onBlur={() => setFocusBiodata(false)} onChange={(x) => setBiodata(x.target.value)} value={biodata} cols="30" rows="10" required></textarea>
                    <label>Provinsi</label>
                    <Select className='option' options={provinces} onChange={(options) => setProvinsi(options.value)} placeholder={provinsi} />
                    <label>Kota</label>
                    <Select className='option' options={regencies} onChange={(options) => setKota(options.value)} placeholder={kota} />
                    <label>Kecamatan</label>
                    <Select className='option' options={districts} onChange={(options) => setKecamatan(options.value)} placeholder={kecamatan} />
                    <label>Kelurahan</label>
                    <Select className='option' options={villages} onChange={(options) => setKelurahan(options.value)} placeholder={kelurahan} />
                    <button className='btn-submit1' id='btn-submit1' type='submit' onClick={(e) => submitForm(e)}>Submit</button>
                </form>
            </div>
        </div>
    )
}

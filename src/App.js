import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigate from './components/Navigate/Navigate';
import Wizard1 from './components/Wizard1/Wizard1';
import Wizard2 from './components/Wizard2/Wizard2';
import Wizard3 from './components/Wizard3/Wizard3';
import Swal from 'sweetalert2'
import axios from 'axios';


function App() {
  //datas to be sent to api
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [biodata, setBiodata] = useState('')
  const [provinsi, setProvinsi] = useState('')
  const [kota, setKota] = useState('')
  const [kecamatan, setKecamatan] = useState('')
  const [kelurahan, setKelurahan] = useState('')
  const [previewImage, setPreviewImage] = useState('')
  const [previewImage2, setPreviewImage2] = useState('')
  const [previewImage3, setPreviewImage3] = useState('')
  const [convertToText, setConvertToText] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  
  //url ktp
  const [imageUrl, setImageUrl] = useState('')

  //api wilayah
  const [provinces, setProvinces] = useState([])
  const [regencies, setRegencies] = useState([])
  const [districts, setDistricts] = useState([])
  const [villages, setVillages] = useState([])

  //provinsi
  const getProv = async () => {
    const prov = await fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)
    const value = await prov.json()
    const ress = value.map(data => {
      return {
        label: data.name,
        value: data.name
      }
    })
    setProvinces(ress)
  }

  //kota
  const getKota = async () => {
    const kota = await fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/regencies/36.json`)
    const value = await kota.json()
    const ress = value.map(data => {
      return {
        label: data.name,
        value: data.name
      }
    })
    setRegencies(ress)
  }

  //kecmatan
  const getKec = async () => {
    const kec = await fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/districts/3671.json`)
    const value = await kec.json()
    const ress = value.map(data => {
      return {
        label: data.name,
        value: data.name
      }
    })
    setDistricts(ress)
  }

  //kelurahan
  const getKel = async () => {
    const kel = await fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/villages/3671050.json`)
    const value = await kel.json()
    const ress = value.map(data => {
      return {
        label: data.name,
        value: data.name
      }
    })
    setVillages(ress)
  }

  useEffect(() => {
    getProv()
    getKota()
    getKec()
    getKel()
  }, [])

  //submit wizard 1
  //change wizard navigation color from blue to green
  const [done, setDone] = useState(false)
  const submitForm = (e) => {
    e.preventDefault()
    if (firstName != '' && lastName != "" && biodata != '' && provinsi != "" && kota != "" && kecamatan != '' && kelurahan != "") {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      setDone(true)
    }
  }

  // submit wizard 2
  const [photoDone, setPhotoDone] = useState(false)
  const submitPhoto = (e) => {
    e.preventDefault()
    if (previewImage != '' && previewImage2 != "" && previewImage3 != '') {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      setPhotoDone(true)
    }
  }

  //data json send to api 
  let resultData = {
    firsName: firstName,
    lastName: lastName,
    biodata: biodata,
    provinsi: provinsi,
    kota: kota,
    kecamatan: kecamatan,
    kelurahan: kelurahan,
    NIK: convertToText,
    photoSelfi: previewImage,
    photoKtp: previewImage2,
    photoBebas: previewImage3
  }


  //post data to api
  const sendData = () => {
    const url = 'https://tescode-api.herokuapp.com/users'
    axios.post(url, resultData)
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }



  return (
    <div>
      <BrowserRouter>
        <Navigate done={done} photoDone={photoDone} />
        <Routes>
          <Route path='/' element={<Wizard1
            firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName}
            biodata={biodata} setBiodata={setBiodata} provinsi={provinsi} setProvinsi={setProvinsi}
            kota={kota} setKota={setKota} kecamatan={kecamatan} setKecamatan={setKecamatan}
            kelurahan={kelurahan} setKelurahan={setKelurahan}
            provinces={provinces} regencies={regencies} districts={districts} villages={villages}
            submitForm={submitForm}
          />} />
          <Route path='/Wizard2' element={<Wizard2
            previewImage={previewImage} setPreviewImage={setPreviewImage}
            previewImage2={previewImage2} setPreviewImage2={setPreviewImage2}
            previewImage3={previewImage3} setPreviewImage3={setPreviewImage3}
            submitPhoto={submitPhoto} convertToText={convertToText} setConvertToText={setConvertToText}
            imageUrl={imageUrl} setImageUrl={setImageUrl} setIsLoading={setIsLoading} isLoading={isLoading}
          />} />
          <Route path='/Wizard3' element={<Wizard3
            convertToText={convertToText} setConvertToText={setConvertToText} previewImage2={previewImage2}
            setImageUrl={setImageUrl} imageUrl={imageUrl} firstName={firstName} lastName={lastName} biodata={biodata}
            provinsi={provinsi} kota={kota} kecamatan={kecamatan} kelurahan={kelurahan} previewImage={previewImage}
            previewImage3={previewImage3} isLoading={isLoading} sendData={sendData}
          />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

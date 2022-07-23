import React, { useCallback, useEffect, useState } from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import './Wizard2.css'
import { ImCloudUpload } from 'react-icons/im'
import { AiOutlineReload } from 'react-icons/ai'
import NavigateForPc from '../NavigateForPc/NavigateForPc'
import { createWorker } from 'tesseract.js';




export default function Wizard2(props) {
    const { previewImage, setPreviewImage, previewImage2, setPreviewImage2, previewImage3, setPreviewImage3, submitPhoto,
        convertToText, setConvertToText, imageUrl, setImageUrl, setIsLoading, isLoading } = props

    //preview image selfi
    function handleUpload(e) {
        const toPreview = URL.createObjectURL(e.target.files[0]);
        setPreviewImage(toPreview)
    }
    // reupload image selfi
    const reupload = (e) => {
        const toPreview = URL.createObjectURL(e.target.files[0]);
        setPreviewImage(toPreview)
    }

    //preview image ktp
    function handleUpload2(ee) {
        setPreviewImage2(URL.createObjectURL(ee.target.files[0]))
        setImageUrl(URL.createObjectURL(ee.target.files[0]))
    }
    // reupload image ktp
    const reupload2 = (ee) => {
        setPreviewImage2(URL.createObjectURL(ee.target.files[0]))
        setImageUrl(URL.createObjectURL(ee.target.files[0]))
        setIsLoading(true)
    }

    //preview image bebas
    function handleUpload3(ee) {
        const to = URL.createObjectURL(ee.target.files[0]);
        setPreviewImage3(to)
        console.log(previewImage3)
    }
    // reupload image bebas
    const reupload3 = (ee) => {
        const toPrevieww = URL.createObjectURL(ee.target.files[0]);
        setPreviewImage3(toPrevieww)
    }

    // convert image to text 
    let ressImg;
    let dataImg;
    const worker = createWorker();

    const handleImg = async () => {
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data } = await worker.recognize(imageUrl);
        ressImg = data.lines[2].text
        dataImg = ressImg.substring(6, 25)
        setConvertToText(dataImg)
        await worker.terminate();
        setIsLoading(false)
    };

    useEffect(() => {
        handleImg()
    }, [imageUrl])

    return (
        <div className='container'>
            <div className='wrapr-nav'>
                <NavigateForPc />
            </div>
            <div className='wraper-card-img'>
                {/* photo selfi */}
                <div className='wraper'>
                    <label className='ket-form' htmlFor="">Photo selfi :</label>
                    <div className='card-img'>
                        <div className={previewImage != '' ? 'preview-wraper-value' : 'preview-wraper'}>
                            {/* preview image and make it zoom */}
                            <Zoom>
                                <img
                                    id='image'
                                    src={previewImage}
                                    className='preview-img'
                                />
                            </Zoom>
                        </div>
                        {/* input upload */}
                        <div className={previewImage != '' ? 'label-wraper-value' : 'label-wraper'}>
                            <input className='input-img' id='uploadImg' type="file" onChange={handleUpload} maxLength='1' />
                            <label htmlFor="uploadImg" className='upload-svg'><ImCloudUpload /></label>
                            <label htmlFor='uploadImg' className='lable-title'>browse a file to upload</label>
                        </div>
                        {/* input reupload  */}
                        <input id='reupload' type="file" onChange={(e) => reupload(e)} />
                        <label htmlFor="reupload" className={previewImage != '' ? 'reupload-img-value' : 'reupload-img'} ><AiOutlineReload /></label>
                    </div>
                </div>

                {/* photo KTP */}
                <div className='wraper'>
                    <label className='ket-form' htmlFor="">photo KTP :</label>
                    <div className='card-img'>
                        <div className={previewImage2 != '' ? 'preview-wraper-value' : 'preview-wraper'}>
                            {/* preview image and make it zoom */}
                            <Zoom>
                                <img
                                    id='image'
                                    src={previewImage2}
                                    className='preview-img'
                                />
                            </Zoom>
                        </div>
                        {/* input upload */}
                        <div className={previewImage2 != '' ? 'label-wraper-value' : 'label-wraper'}>
                            <input className='input-img' id='uploadImg2' type="file" onChange={handleUpload2} maxLength='1' />
                            <label htmlFor="uploadImg2" className='upload-svg'><ImCloudUpload /></label>
                            <label htmlFor='uploadImg2' className='lable-title'>browse a file to upload</label>
                        </div>
                        {/* input reupload */}
                        <input id='reupload2' type="file" onChange={(e) => reupload2(e)} />
                        <label htmlFor="reupload2" className={previewImage2 != '' ? 'reupload-img-value' : 'reupload-img'} ><AiOutlineReload /></label>
                    </div>
                    <label className='ket-form'>* Data pada KTP harus terlihat jelas</label>
                </div>

                {/* photo bebas */}
                <div className='wraper'>
                    <label className='ket-form' htmlFor="">Photo Bebas :</label>
                    <div className='card-img'>
                        <div className={previewImage3 != '' ? 'preview-wraper-value' : 'preview-wraper'}>
                            {/* preview image and make it zoom */}
                            <Zoom>
                                <img
                                    id='image'
                                    src={previewImage3}
                                    className='preview-img'
                                />
                            </Zoom>
                        </div>
                        {/* input upload */}
                        <div className={previewImage3 != '' ? 'label-wraper-value' : 'label-wraper'}>
                            <input className='input-img' id='uploadImg3' type="file" onChange={handleUpload3} maxLength='1' />
                            <label htmlFor="uploadImg3" className='upload-svg'><ImCloudUpload /></label>
                            <label htmlFor='uploadImg3' className='lable-title'>browse a file to upload</label>
                        </div>
                        {/* input reaupload */}
                        <input id='reupload3' type="file" onChange={(e) => reupload3(e)} />
                        <label htmlFor="reupload3" className={previewImage3 != '' ? 'reupload-img-value' : 'reupload-img'} ><AiOutlineReload /></label>
                    </div>
                </div>
                {/* button submit */}
                <button className='btn-submit2' onClick={(e) => submitPhoto(e)}>Submit</button>
            </div>
        </div>
    )
}

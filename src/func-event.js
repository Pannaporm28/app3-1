import React from 'react'

export default function Button(){
    const onClickButtonOK =() =>{
        alert('OK')
    }
    const onClickButtonCencel =() =>{
        alert('Cencel')
    }
    let banner = './image/1.jpg'
    let url = 'https://sites.google.com/a/samakkhi.ac.th/alpaca-245/kar-ae'
    
    const bannerClick =() =>{
        window.open(url)
    }
    return(
        <div>
        <img src={banner} onClick={bannerClick} style={{cursor:'pointer'}}/>
        <button onClick={onClickButtonOK}>OK</button> 
        <button onClick={onClickButtonCencel}>Cencel</button> 
        </div>
    
    )
}
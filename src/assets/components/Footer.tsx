import image from 'next/image'
import React from 'react'
import styles from 'styles/Footer.module.scss'
import Image from 'next/image'
import FooterHead from './FooterHead'
import FooterTail from './FooterTail'
const Footer = () =>{

    return(
        <div style={{padding:0}}>
            <FooterHead/>
            <FooterTail />
        </div>
    )
}


export default Footer;
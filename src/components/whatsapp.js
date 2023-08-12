import React from 'react'
import whatsappIcon from 'assets/images/icons/whatsapp.png'
import Image from 'components/image' 

function Whatsapp() {

    return (
        <a style={styles.whatsapp} href="https://wa.me/message/3GJIVSMAMH7RG1" target="_blank">
            <Image src={whatsappIcon} loading="lazy" alt="whatsapp-icon"></Image>
        
        </a>
    )
}

export default Whatsapp

const styles = {
    whatsapp: {
        position: 'fixed',
        backgroundImage: `url(${whatsappIcon})`,
        width: '60px',
        height: '60px',
        bottom: '40px',
        backgroundColor: '#25d366',
        color: '#FFF',
        borderRadius: '60px',
        textAlign: 'center',
        fontSize: '30px',
        boxShadow: '3px 4px 3px #999',
        right: '15px',
        zIndex: 100
    },
    myFloat: {
        marginTop: '10px'
    }

}
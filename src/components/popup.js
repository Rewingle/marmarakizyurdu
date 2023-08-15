import React from 'react'
import { Box } from 'theme-ui'
import {HiOutlineX} from 'react-icons/hi'


function Popup(props) {
 
    return (props.trigger) ? (
        <Box style={styles.popup} onClick={()=>{props.setTrigger(false)}}>
            <Box sx={styles.popupInner}>
                <Box sx={styles.closeBtn} onClick={() => { props.setTrigger(false) }}><HiOutlineX color='black' size={'2em'}/></Box>
                <Box sx={styles.content}>
                    {props.children}
                </Box>

            </Box>
        </Box>
    ) : null
}

const styles = {
    popup: {
        zIndex: 40,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    popupInner: {
        position: 'relative',
        padding: [null,null,'2em','2em','2em'],
        width: '100%',
        maxWidth: '1080px',
        zIndex:100,
        backgroundColor: 'white',
        borderRadius: '1em'
    },
    content:{
        padding: '1em',
    },
    closeBtn: {
        position: 'absolute',
        top: '1em',
        right: '1em',
        p:1,
        display:'flex',alignItems:'center',justifyContent:'center',
        ':hover':{
            cursor:'pointer',
            backgroundColor:'rgb(242, 242, 242)',
            borderRadius:'50%',
            
        }
    }
}
export default Popup
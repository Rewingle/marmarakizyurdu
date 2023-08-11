import React from 'react'
import { Box, Container, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';

function Odalarimiz() {
    return (
        <Box id="odalarimiz" as="section" sx={styles.section}>

            <Container>
                <SectionHeading
         
                    title="Odalarımız"
                    sx={styles.heading}
                />
                <Box sx={styles.contentWrapper}>
                    <Box sx={styles.leftContent}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box sx={{ backgroundColor: 'yellow', width: '512px', height: '128px' }}>

                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <SectionHeading
                                
                                title="4 kişilik Odalar"
                                description=""
                            />
                        </Box>


                        <Box></Box>
                    </Box>
                    <Box sx={styles.rightContent}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box sx={{ backgroundColor: 'red', width: '512px', height: '128px' }}>

                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <SectionHeading
                                
                                title="4 kişilik Odalar(Banyolu)"
                                description=""
                            />
                        </Box>


                        <Box></Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Odalarimiz

const styles = {
    section: {
        pt: [30, null, null, null, 60],
        pb: [30, null, null, 50, 60],
    },
    
    contentWrapper: {
        gap: [null, null, null, null, '30px'],
        display: ['flex', null, null, null, 'grid'],
        alignItems: 'center',
        flexDirection: ['column', null, null, null, null],
        gridTemplateColumns: ['unset', null, null, null, 'repeat(2,1fr)'],
    },
    heading: {
        textAlign: ['center', 'center', 'center', 'left'],
        marginLeft: 0,
        maxWidth: 580,
        m: ['0 auto 27px', '0 auto 27px', '0 auto 27px', '0 0 30px'],
        h2: {
            fontSize: [15, 15, 15, 19, 20, 23, 28],
            lineHeight: [1.6, 1.6, 1.6, 1.41],
            fontWeight: [500, 500, 500, 400],
        },
        p: {
            fontSize: ['15px', '15px', '15px', '17px'],
            mt: [3, 3, 3, 20, 5],
        },
    },
    heading: {
        textAlign: ['center', 'center', 'center', 'left'],
        marginLeft: 0,
        maxWidth: 580,
        m: ['0 auto 27px', '0 auto 27px', '0 auto 27px', '0 0 30px'],
        h2: {
            fontSize: [22, 22, 22, 28, 30, 36, 46],
            lineHeight: [1.6, 1.6, 1.6, 1.41],
            fontWeight: [500, 500, 500, 400],
        },
        p: {
            fontSize: ['15px', '15px', '15px', '17px'],
            mt: [3, 3, 3, 20, 5],
        },
    },
    leftContent: {
        backgroundColor: 'white',
        m: [0, '30px 0px 0', '30px 50px 0', 0],
        p: 3,
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '1em'
    },
    rightContent: {
        backgroundColor: 'white',
        m: [0, '30px 0px 0', '30px 50px 0', 0],
        p: 3,
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '1em'
    }
}
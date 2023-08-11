import React from 'react'
import { Box, Container, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image'
import Render1 from 'assets/images/gallery/Render1.webp'
import Render2 from 'assets/images/gallery/Render2.webp'
import Render3 from 'assets/images/gallery/Render3.webp'
import library from 'assets/images/icons/book.png'
import light from 'assets/images/icons/idea.png'
import trash from 'assets/images/icons/trash.png'
import Masonry from 'react-masonry-component';

function Odalarimiz() {
    const masonryOptions = {
        transitionDuration: 0,
      };
    const features = [
        {
            id: 1,
            icon: library,
            name: 'Kütüphane'
        },
        {
            id: 2,
            icon: light,
            name: 'Okuma ışığı'
        },
        {
            id: 3,
            icon: trash,
            name: 'Çöp'
        },
        {
            id: 3,
            icon: trash,
            name: 'Çöp'
        },
        {
            id: 3,
            icon: trash,
            name: 'Çöp'
        },
        {
            id: 3,
            icon: trash,
            name: 'Çöp'
        },
    ]

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
                            <Text as="p"> Odalarımız 4 kişilik olup, banyolu ve ortak banyolu olarak 2 tip odamız mevcuttur.</Text>

                        </Box>
                        <Box><h4>Oda özellikleri</h4></Box>
                        <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
                            {features.map((item)=>(
                                <Box sx={{borderRadius:'1em',border:'2px solid black'}}>{item.name}</Box>
                            ))}
                        </Box>

                    </Box>
                    <Box sx={styles.rightContent}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box sx={{width: '512px', height: '256px' }}>
                                <Image src={Render1} style={{ width: '512px', height: '256px' }} />
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

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
    }
}
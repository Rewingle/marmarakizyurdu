import React from 'react'
import { Box, Container, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image'
import gallery1 from 'assets/images/gallery/Render2mini.webp';
import gallery2 from 'assets/images/gallery/Render3mini.webp';
import gallery3 from 'assets/images/gallery/Render4mini.webp';
import library from 'assets/images/icons/book.webp'
import light from 'assets/images/icons/idea.webp'
import trash from 'assets/images/icons/trash.webp'
import towel from 'assets/images/icons/towel.webp'
import hanger from 'assets/images/icons/hanger.webp'
import table from 'assets/images/icons/table.webp'
import credit from 'assets/images/icons/credit.webp'
import Masonry from 'react-masonry-component';
import GalleryCard from 'components/cards/gallery-card';


function Odalarimiz() {
    const masonryOptions = {
        transitionDuration: 0,
    };
    const features = [
        {
            id: 1,
            icon: library,
            name: 'Kütüphane',
            alt: 'kütüphane'
        },
        {
            id: 2,
            icon: light,
            name: 'Okuma ışığı',
            alt: 'okuma ışığı'
        },
        {
            id: 3,
            icon: trash,
            name: 'Çöp kovası',
            alt: 'çöp kovası'
        },
        {
            id: 4,
            icon: table,
            name: 'Çalışma masası',
            alt: 'çalışma masası'
        },
        {
            id: 5,
            icon: hanger,
            name: 'Gardrop',
            alt: 'gardrop'
        },
        {
            id: 6,
            icon: towel,
            name: 'Yatak tekstili',
            alt: 'yatak tekstili'
        },
        {
            id: 7,
            icon: credit,
            name: 'Kartlı giriş sistemi',
            alt: 'kartlı giriş sistemi'
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
                    <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>


                        <GalleryCard item={{
                            id: 1,
                            image: gallery1,
                            title: 'kız yurt odası 1'
                        }} />

                        <GalleryCard item={{
                            id: 2,
                            image: gallery2,
                            title: 'kız yurt odası 2',
                        }} />
                        <GalleryCard item={{
                            id: 3,
                            image: gallery3,
                            title: 'kız yurt odası 3',
                        }} />
                       

                        <Box sx={styles.info}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Text as="p" sx={{ fontWeight: '600', fontSize: '22px' }}> Odalarımız 4 kişilik olup, banyolu ve ortak banyolu olarak 2 tip odamız mevcuttur.</Text>

                            </Box>
                            <hr/>
                            <Box sx={{textAlign:'center'}}><h3>Oda özellikleri</h3></Box>
                            <Box sx={{display:'grid', gridTemplateColumns: ['1fr 1fr 1fr',null,null,null,'1fr 1fr 1fr 1fr'],gridGap:'2em'}}>
                                {features.map((item) => (
                                    <Box sx={{display:'flex'}}><Image src={item.icon} style={{width:'24px',height:'24px'}} /><Box sx={{ml:2}}>{item.name}</Box></Box>
                                ))}
                            </Box>

                        </Box>

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
        backgroundColor:'#10132d',
        color:'white'
    },
    info: {
        p: 4,
        width: ['100%', null, null, null, '55.3em']
    },
    contentWrapper: {

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
    galleryWrapper: {
        mx: '-15px',
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
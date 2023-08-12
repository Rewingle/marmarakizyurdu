import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Layout from 'components/layout';
import { Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import GalleryCard from 'components/cards/gallery-card';
import Masonry from 'react-masonry-component';
import gallery1 from 'assets/images/gallery/Render1mini.webp';
import gallery2 from 'assets/images/gallery/Render2mini.webp';
import gallery3 from 'assets/images/gallery/Render3mini.webp';
import gallery4 from 'assets/images/gallery/Render4mini.webp';
import gallery5 from 'assets/images/gallery/Render5mini.webp';
import gallery6 from 'assets/images/gallery/Render6mini.webp';
import gallery7 from 'assets/images/gallery/Render7mini.webp';

function odalar() {
  const data = [
    {
      id: 1,
      image: gallery1,
      title: 'Oda-1',
    },
    {
      id: 2,
      image: gallery2,
      title: 'Oda-2',
    },
    {
      id: 3,
      image: gallery3,
      title: 'Oda-3',
    },
    {
      id: 4,
      image: gallery4,
      title: 'Oda-4',
    },
    {
      id: 6,
      image: gallery5,
      title: 'Oda-5',
    },
    {
      id: 5,
      image: gallery6,
      title: 'Oda-6',
    },
    {
      id: 5,
      image: gallery7,
      title: 'Oda-7',
    },
  ];
  
  const masonryOptions = {
    transitionDuration: 0,
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
            <Box id="gallery" as="section" sx={styles.section}>
            <Container sx={styles.container}>
              <SectionHeading
                sx={styles.heading}
                title="Bina"
              />
            
              <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
                {data?.map((item) => (
                  <GalleryCard key={item.id} item={item} />
                ))}
              </Box>
              <SectionHeading
                sx={styles.heading}
                title="Resepsiyon"
              />
            </Container>
          </Box>
         
      </Layout>  
   
    </ThemeProvider>
  )
}

const styles = {
  section: {
    
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
  },
  heading: {
    
    mt: [30,30,50,60],

  },
  container:{
    mt:[60]
  },
  galleryWrapper: {
    mx: '-15px',
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [14, 14, 16],
    width: '100%',
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
    },
    ':hover': {
      svg: {
        ml: '5px',
      },
    },
  },
};

export default odalar
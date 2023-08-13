/** @jsx jsx */
import { jsx, Box, Container, Image, Button } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import GalleryCard from 'components/cards/gallery-card';
import Link from 'next/link';
import gallery1 from 'assets/images/gallery/oda2.webp';
import gallery2 from 'assets/images/gallery/oda3.webp';
import gallery3 from 'assets/images/gallery/oda1.webp';
import gallery4 from 'assets/images/gallery/oda5.webp';
import gallery5 from 'assets/images/gallery/oda4.webp';
import gallery6 from 'assets/images/gallery/oda6.webp';


const masonryOptions = {
  transitionDuration: 0,
};

const Gallery = () => {
  return (
    <Box id="gallery" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading
          sx={styles.heading}
          slogan=""
          title=" Galeri"
        />

        <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
        
          
          <GalleryCard item={{
            id: 2,
            image: gallery2,
            title: ''
          }} />

          <GalleryCard  item={{
            id: 3,
            image: gallery3,
            title: '',
          }} />
          <GalleryCard  item={{
            id: 4,
            image: gallery4,
            title: '',
          }} />
          <GalleryCard  item={{
            id: 5,
            image: gallery1,
            title: '',
          }} />
          <GalleryCard  item={{
            id: 6,
            image: gallery5,
            title: '',
          }} />
         
          <GalleryCard  item={{
            id: 7,
            image: gallery6,
            title: '',
          }} />
         

        </Box>
        <Link href="/odalar"><a>
          <Button variant="muted" sx={styles.button}>
            Daha fazlası <RiArrowRightSLine size="20px" />
          </Button></a></Link>
      </Container>
    </Box>
  );
};

export default Gallery;

const styles = {
  section: {
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
    backgroundColor:'#10132d'
  },
  heading: {
    color:'white',
    fontWeight:'600',
    mb: [30, 30, 40, 60],
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

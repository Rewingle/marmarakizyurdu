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
import gallery4 from 'assets/images/gallery/oda4.webp';
import gallery5 from 'assets/images/gallery/oda7.webp';
import gallery6 from 'assets/images/gallery/oda12.webp';
import full1 from 'assets/images/gallery/full/2.webp';
import full2 from 'assets/images/gallery/full/3.webp';
import full3 from 'assets/images/gallery/full/1.webp';
import full4 from 'assets/images/gallery/full/4.webp';
import full5 from 'assets/images/gallery/full/7.webp';
import full6 from 'assets/images/gallery/full/12.webp';


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
            id: 1,
            image: gallery1,
            alt: 'kız yurt odası',
            full: full1
          }} />

          <GalleryCard item={{
            id: 2,
            image: gallery2,
            alt: 'kız yurt odası',
            full: full2
          }} />
          <GalleryCard item={{
            id: 4,
            image: gallery3,
            alt: 'kız yurt odası',
            full: full3
          }} />
          <GalleryCard item={{
            id: 3,
            image: gallery4,
            alt: 'kız yurt odası',
            full: full4
          }} />
          <GalleryCard item={{
            id: 5,
            image: gallery5,
            alt: 'kız yurt odası',
            full: full5
          }} />

          <GalleryCard item={{
            id: 6,
            image: gallery6,
            alt: 'kız yurt odası',
            full: full6
          }} />

        </Box>
        <Link href="/galeri"><a>
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
    backgroundColor: '#10132d'
  },
  heading: {
    color: 'white',
    fontWeight: '600',
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

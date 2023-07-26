/** @jsx jsx */
import { jsx, Box, Container, Image, Button } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import GalleryCard from 'components/cards/gallery-card';
import Link from 'next/link';
import gallery1 from 'assets/images/gallery/1.png';
import gallery2 from 'assets/images/gallery/2.png';
import gallery3 from 'assets/images/gallery/3.png';
import gallery4 from 'assets/images/gallery/4.png';
import gallery5 from 'assets/images/gallery/5.png';
import gallery6 from 'assets/images/gallery/6.png';


const data = [
  {
    id: 1,
    image: gallery1?gallery1:null,
    title: 'Oda-1',
  },
  {
    id: 2,
    image: gallery2?gallery2:null,
    title: 'Banyo',
  },
  {
    id: 3,
    image: gallery3?gallery3:null,
    title: 'Çalışma alanları',
  },
  {
    id: 4,
    image: gallery4?gallery4:null,
    title: 'Oda-2',
  },
  {
    id: 6,
    image: gallery6?gallery6:null,
    title: 'Ortak alanlar',
  },
  {
    id: 5,
    image: gallery5?gallery5:null,
    title: 'Oda-3',
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Gallery = () => {
  return (
    <Box id="gallery" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading
          sx={styles.heading}
          slogan="Odalar"
          title=" Yeni nesil odalar ve ortak alanlar"
        />

        <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
        
          <GalleryCard  item={{
            id: 1,
            image: gallery1,
            title: 'Oda-1'
          }} />
          <GalleryCard item={{
            id: 2,
            image: gallery2,
            title: 'Banyo'
          }} />

          <GalleryCard  item={{
            id: 3,
            image: gallery3,
            title: 'Çalışma alanları',
          }} />
          <GalleryCard  item={{
            id: 4,
            image: gallery4,
            title: 'Oda-2',
          }} />
          <GalleryCard  item={{
            id: 5,
            image: gallery5,
            title: 'Oda-3',
          }} />
          <GalleryCard  item={{
            id: 6,
            image: gallery6,
            title: 'Ortak alanlar',
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
  },
  heading: {
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

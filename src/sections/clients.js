/** @jsx jsx */
import { jsx, Box, Button, Container, Image, Heading } from 'theme-ui';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
import Slider from 'react-slick';
import SectionHeading from 'components/section-heading';
import yeditepe from 'assets/images/clients/yeditepe.png';
import bau from 'assets/images/clients/bau.png';
import medeniyet from 'assets/images/clients/medeniyet.png';
import maltepe from 'assets/images/clients/maltepe.png';
import uskudar from 'assets/images/clients/uskudar.png';
import marmara from 'assets/images/clients/marmara.png';
import may29 from 'assets/images/clients/29may.png';
import acibadem from 'assets/images/clients/acibadem.png';
import fbu from 'assets/images/clients/fbu.webp';
const clients = [
  {
    id: 0,
    name: 'Acıbadem Üniversitesi',
    logo: acibadem,
  },
  {
    id: 1,
    name: 'Yeditepe üniversitesi',
    logo: yeditepe,
  },
  {
    id: 2,
    name: 'Bahçeşehir üniversitesi',
    logo: bau,
  },
  {
    id: 3,
    name: 'Medeniyet üniversitesi',
    logo: medeniyet,
  },
  {
    id: 4,
    name: 'Maltepe üniversitesi',
    logo: maltepe,
  },
  {
    id: 5,
    name: 'Üsküdar üniversitesi',
    logo: uskudar,
  },
  {
    id: 6,
    name: 'Marmara Üniversitesi',
    logo: marmara,
  },
  {
    id: 7,
    name: '29 Mayıs Üniversitesi',
    logo: may29,
  },
  
  {
    id: 8,
    name: 'Fenerbahçe Üniversitesi',
    logo: fbu,
  }
];

function SlickArrow({ className, onClick, control }) {
  return (
    <Button
      variant="text"
      className={className}
      sx={styles.paginationButton}
      onClick={onClick}
    >
      {control === 'prev' ? (
        <HiArrowNarrowLeft title='Sola kaydır' size="32px" style={{ marginRight: '4em', width: '32px' }} />
      ) : (
        <HiArrowNarrowRight title='Sağa kaydır' size="32px" style={{ marginLeft: '4em', width: '32px' }} />
      )}
    </Button>
  );
}

const Clients = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <SlickArrow control="next" />,
    prevArrow: <SlickArrow control="prev" />,
    responsive: [
      {
        breakpoint: 100000,
        settings: 'unslick',
      },
      {
        breakpoint: 1024,
        settings: {
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box id="clients" as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          slogan="Üniversiteler"
          title="Anlaşmalı olduğumuz üniversiteler"
        />
        <hr />
        <Box as="figure" sx={styles.logo}>
          <Image loading="lazy" src={acibadem} alt='Acıbadem ünivesitesi' />
        </Box>
        <hr />
        <br/>
        <Heading style={{
          textAlign: 'center', fontSize: [21, , , 30],
          fontWeight: [500, 400],
          lineHeight: 1.68,
          letterSpacing: 'heading',
        }}>Yakındaki Üniversiteler</Heading>
        <br/>
        <Slider sx={styles.clients} {...settings}>
          {clients?.map((client) => (
            <Box key={client.id} as="figure" sx={styles.logo}>
              <Image loading="lazy" src={client.logo} alt={client.name} />
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Clients;

const styles = {
  section: {
    pt: [50, 50, 50, 70, 60, 80],
    pb: [30, 40, 50, 60, 50, 80],
  },
  clients: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    pt: [0, 0, 25, 25, 25, 6],
    '&.slick-slider': {
      marginBottom: '40px',
    },
    '.slick-track': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  logo: {
    display: 'flex !important',
    justifyContent: 'center',
    mx: '10px',
    ':focus': {
      outline: 'none',
    },
  },
 
  paginationButton: {
    minHeight: '30px',
    padding: 0,
    position: 'absolute',
    bottom: '-60px',
    ':focus': {
      outline: '0 none',
    },
    
    '&.slick-disabled': {
      color: '#BBC7D7',
      svg: {
        transform: 'scale(0.8)',
      },
    },
    '&.slick-prev': {
      left: 'calc(50% - 16px)',
      transform: 'translateX(-50%)',
    },
    '&.slick-next': {
      transform: 'translateX(50%)',
      right: 'calc(50% - 16px)',
    },
  },
};

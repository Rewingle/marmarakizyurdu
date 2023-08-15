/** @jsx jsx */
import { jsx, Box, Container, Button } from 'theme-ui';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import SectionHeading from 'components/section-heading';
import sss from '../data/sss'
import {HiStar} from 'react-icons/hi'
import {HiPlus} from 'react-icons/hi'


function SlickArrow({ className, onClick, control }) {
  return (
    <Button
      variant="text"
      onClick={onClick}
      className={className}
      sx={styles.paginationButton}
    >
      {control === 'prev' ? (
        <BsArrowLeft size="32px" />
      ) : (
        <BsArrowRight size="32px" />
      )}
    </Button>
  );
}
const expand = ()=>{

}
const settings = {
  slidesToShow: 3,
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
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: 'unslick',
    },
  ],
};
const masonryOptions = {
  transitionDuration: 0,
};

const Blog = () => {
  return (
    <Box id="blog" as="section" sx={styles.section}>
      <Container>

        <SectionHeading
          sx={styles.heading}
          slogan="S.S.S"
          title="Sıkça Sorulan Sorular"
        />



        <Box sx={{ width: '0.1em', height: '0.1em', backgroundColor: 'pink', opacity: 0, display: ['none', 'none', 'block', 'block', 'block'] }}></Box>
        {sss?.map((item,index) => (
          <Box key={index}>
            <Box sx={{display:'flex',fontSize:'18px',p:2,alignItems:'center',fontWeight:'600',borderRadius:'1em',backgroundColor:'lightgray'}}><HiStar/><Box sx={{ml:1}}>{item.question}</Box><Box sx={{marginLeft:'auto',display:'none'}}><HiPlus size={'1.6em'} color='#8D448B'/></Box></Box>
            <Box sx={{p:1}}>{item.answer}</Box>
          </Box>
        ))}


      </Container>
    </Box>
  );
};

export default Blog;

const styles = {
  section: {
    pt: [30, 30, 6],
    pb: [50, 50, 50, 100, 8, 9]
  },
  galleryWrapper: {
    mx: '-15px',
    fontSize: '14px'

  },
  heading: {
    mb: [30, 30, 30, 50, 60],
  },
  blogWrapper: {
    gap: 30,
    display: ['grid', 'grid', 'grid', 'block', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    m: [0, 0, 0, '0 -15px', 0],
  },
  paginationButton: {
    minHeight: '30px',
    padding: 0,
    position: 'absolute',
    bottom: '-60px',
    ':focus': {
      outline: '0 none',
    },
    svg: {
      transition: 'all 0.2s ease-in-out 0s',
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

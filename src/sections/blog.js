/** @jsx jsx */
import { jsx, Box, Container, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import sss from '../data/sss'
import {HiStar} from 'react-icons/hi'
import {HiPlus} from 'react-icons/hi'

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
};

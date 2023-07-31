
import { useState } from 'react';
import { jsx, Box, Container, Flex, Button,Select} from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Map from 'components/Map'
import { rgba } from 'polished';
import { keyframes } from '@emotion/core';



const Pricing = () => {

  const [uniDirection,setUniDirection] = useState(null)
  const [selectedUni,setSelectedUni] = useState(null)
  const Universities =['Acıbadem Üniversitesi','Marmara Üniversitesi','Üsküdar Üniversitesi','Yeditepe Üniversitesi','Maltepe Üniversitesi','Bahçeşehir Üniversitesi','29 Mayıs Üniversitesi']
  const masonryOptions = {
    transitionDuration: 0,
  };
  return (
    <Box id="pricing" as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="ULAŞIM"
          
        />
      
      <Box as="section" sx={styles.section}>

      <Container>
        <Flex sx={styles.contentWrapper}>
            <Flex sx={styles.mapWrapper}>
            <Map uniDirection={uniDirection}/>
            </Flex>
          
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading1}
              title="Üniversitenize yol tarifi alın."
              
            />
       
            <Box options={masonryOptions}>
              
              {Universities.map(
                (item,index)=>(<Box key={index} sx={styles.uniSelect} onClick={()=>{setUniDirection(index);setSelectedUni(item)}}>{item}</Box>)
              )}
              
            </Box>
            
          </Box>
        </Flex>
      </Container>
    </Box>
      </Container> 
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  section: {
    backgroundColor: '#020718',
    pt: [30],
    pb: [20, 25, 30, 40],
  },
  heading: {
    color: '#fff',
    mb: 20,
    p: {
      color: '#fff',
      fontSize:'28px',
      fontFamily: 'DM Sans,sans-serif'
    },
  },
  selectStyle:{
    mb: [3,3,0,0,0],
    color:'white',
    
  },
  uniSelect:{
    
    justifyContent:'center',
    display:'flex',
    color:'white',
    fontSize:'20px',
    ':hover':{
      backgroundColor: 'purple',
      cursor:'pointer',
      borderRadius:'8px'
    }
  },
  contentWrapper: {
    
    display: ['flex'],
    alignItems: ['center'],
    flexDirection: [
      'column-reverse',
      'column-reverse',
      'column-reverse',
      'row',
    ],
  },
  mapWrapper:{
    width:['20em','25em','40em','60em','90em'],
    height:['20em','28em','28em','28em','28em']
  },
  illustration: {
    alignItems: ['flex-start'],
    maxWidth: ['none', 'none', 'none', 'none', 480, 530, 760],
    m: ['50px 0 0', '50px 0 0', '50px 0 0', 0, '0 20px 0 0', '0 48px 0 0'],
  },
  rightContent: {
    m: [0, 0, 0, 0, '0px 48px 0px 0px', '0px 95px 0px 0px'],
    pl: [0,3,3,3]
  },
  uniButton:{
    mr: 3,
    mt: 3,
    ':hover':{
      cursor: 'pointer'
    }
  },
  heading1: {
    textAlign: ['center', 'center', 'center', 'left'],
    marginLeft: 0,
    maxWidth: 580,
    pl: ['0em','2em','2em','2em','2em'],
    color:'white',
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
  priceSwitcher: {
    borderRadius: '5px',
    border: `1px solid ${rgba('#FFFFFF', 0.2)}`,
    margin: ['0 auto 30px', '0 auto 30px', '0 auto 30px', '0 auto 60px'],
    maxWidth: [255, 255, 255, 300],
    p: 2,
    button: {
      minHeight: ['40px', '40px', '40px', '48px'],
      px: ['18px', '18px', '18px', '25px'],
      fontSize: [14, 14, 14, 16],
      fontWeight: 500,
      color: 'white',
      '&.active': {
        backgroundColor: '#fff',
        color: 'text',
      },
      ':focus': {
        outline: '0 none',
      },
    },
  },

};

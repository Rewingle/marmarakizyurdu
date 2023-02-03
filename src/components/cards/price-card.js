/** @jsx jsx */
import { jsx, Box, Heading, Image, Text,Flex } from 'theme-ui';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { IoIosCloseCircle } from 'react-icons/io';
import { BsArrowRightShort } from 'react-icons/bs';
import { rgba } from 'polished';

const PriceCard = (props) => {
  
  return (
    <Box
      sx={styles.priceTable}
      className={`recommended`}
    >
      <Box sx={styles.priceDetails}>
        
        {props.question}
        
      </Box>
      <Box as="footer" className="priceAmount" sx={styles.footer}>
        {props.answer} 
      
      </Box>
    </Box>
  );
};

export default PriceCard;

const styles = {
  priceTable: {
    fontFamily:'verdana',
    backgroundColor: '#020718',
    border: `1px solid ${rgba('#F3F4F5', 0.15)}`,
    color: '#fff',
    borderRadius: 10,
    
    '&.recommended': {
      backgroundColor: '#fff',
      borderColor: '#F0F0F5',
      color: 'text',
      mb: 30,
      mx: 15,
      footer: {
        backgroundColor: '#F0F0F5',
        borderRadius: '0 0 10px 10px',
        '.price-label': {
          color: 'text',
        },
        '.price-value': {
          color: 'primary',
        },
        '> div, svg': {
          cursor: 'pointer',
        },
      },
    },
  },
  recommended: {
    backgroundColor: 'primary',
    position: 'absolute',
    top: '-16px',
    minHeight: '31px',
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 700,
    padding: '0 8px',
    letterSpacing: '-0.14px',
    borderRadius: '3px',
  },
  header: {
    img: {
      
    },
    h3: {
      fontWeight: 700,
      fontSize: [16, null, null, 22],
      lineHeight: 1.31,
      letterSpacing: '-0.55px',
      mt: [20, null, null, 35],
    },
  },
  priceDetails: {
    p: ['15px 10px 25px', null, null, '30px 15px 22px', '28px 20px'],
  },
  list: {
    listStyle: 'none',
    padding: 0,
    mt: [20, 20, 20, 50],
    
    li: {
      display: 'flex',
      alignItems: 'flex-start',
      fontSize: [13, 15, null, 16],
      lineHeight: 1.62,
      '+ li ': {
        mt: [15, null, null, 30],
      },
      svg: {
        mr: '13px',
        mt: '5px',
      },
    },
    '.unavailable': {
      'span, svg': {
        color: rgba('white', 0.5),
      },
    },
  },
  footer: {
    borderTop: `1px solid ${rgba('#F3F4F5', 0.15)}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: ['10px 5px 20px', null, null, '25px 10px 16px', '22px 15px'],
    fontWeight:'600',
    '.price-label': {
      fontSize: [13, 14, null, 16],
      lineHeight: 1.76,
      color: rgba('#fff', 0.6),
    },
    '.price-value': {
      fontSize: [18, null, null, 26],
      fontWeight: 700,
      lineHeight: 1.31,
      letterSpacing: '-0.55px',
      color: '#FFFFFF',
    },
  },
};

/** @jsx jsx */
import { jsx, Box, Flex, Text, Container } from 'theme-ui';
import Logo from 'components/logo';
import { rgba } from 'polished';
import { ImPhone } from 'react-icons/im';

const navItems = [
  {
    id: 1,
    link: '#!',
    title: 'Anasayfa',
  },
  {
    id: 2,
    link: '#!',
    title: 'Reklam',
  },
  {
    id: 3,
    link: '#!',
    title: 'Destek',
  },
  {
    id: 4,
    link: '#!',
    title: 'Pazarlama',
  },
  {
    id: 5,
    link: '#!',
    title: 'S.S.S',
  },
];
const instagram = <svg width="28px" height="28px" color='white' viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
    
<title>www.instagram.com/marmarakizyurdu</title>
<defs>

</defs>
<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" color='white'>
    <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)" fill="#000000">
        <g id="icons" transform="translate(56.000000, 160.000000)">
            <path fill='white' d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#167]">

</path>
        </g>
    </g>
</g>
</svg>

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container sx={styles.container}>
        <Flex sx={styles.content}>
          <Flex sx={styles.copyright}>
            <Logo white />
            
          </Flex>
          <Text as="span">
              @2023 Tüm hakları saklıdır.
            </Text>
          <Box>
            <Flex sx={styles.nav}>Kıvanç Sk. No:1, Osmanağa, 34714 Kadıköy/İstanbul 
              {  //<Flex as="ul" sx={styles.nav}>
                //{navItems?.map((item) => (
                //<li key={item.id}>
                //<Link path={item.link}>{item.title}</Link>
                //</li>
                //))
              }
            </Flex>
            <br/>
            <Box sx={{ ml: 3, ':hover': { cursor: 'pointer' },float:'right'}}><a href='https://www.instagram.com/marmarakizyurdu' style={{textDecoration:'none',color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>{instagram}<Box sx={{ml:2}}>/marmarakizyurdu</Box></a></Box>
            <Box sx={{ color: 'white',display:'flex',textAlign:'center',justifyContent:'center',alignItems:'center' }}><ImPhone color='white' fontSize="1.2em" style={{marginRight:'8px'}}/> 530 846 47 61</Box>
          </Box>

        </Flex>

      </Container>

    </Box>
  );
}

const styles = {
  footer: {
    backgroundColor: '#020718',
  },
  content: {
    alignItems: 'center',
    borderTop: `1px solid ${rgba('#fff', 0.15)}`,
    display: ['block', null, null, null, 'flex'],
    justifyContent: 'space-between',
    paddingTop: '20px',
    paddingBottom: '60px',
    textAlign: ['center', null, null, null],
    '@media only screen and (max-width: 400px)': {
      pb: 50,
    },
  },
  copyright: {
    display: ['block', 'flex'],
    alignItems: 'center',
    justifyContent: ['center', null, null, null],
    span: {
      fontSize: '14px',
      lineHeight: [1.8, null, null, 1.29],
      color: rgba('#FFFFFF', 0.7),
      marginTop: 1,
      display: 'inline-flex',
    },
  },
  nav: {
    color: 'white',
    listStyle: 'none',
    alignItems: 'center',
    padding: 0,
    // display: ['flex'],
    flexWrap: ['wrap', null, null, 'unset'],
    justifyContent: ['center', null, null, null],
    mt: [5, null, null, null, 0],
    li: {
      '+ li': {
        marginLeft: [4],
      },
      '@media only screen and (max-width: 400px)': {
        mb: 4,
      },
      a: {
        color: 'white',
        display: 'inline-flex',
        textAlign: 'right',
        textDecoration: 'none',
      },
    },
  },
};

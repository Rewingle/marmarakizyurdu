
import { jsx, Box, Container, Heading, Text, Button } from 'theme-ui';
import { rgba } from 'polished';
//import Link from 'next/link'
import { ImPhone } from 'react-icons/im';
import bannerBg from 'assets/images/banner-bg.webp';
//import { useNavigate } from 'react-router-dom'


export default function Banner() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitting...');
  };
  //const navigate = useNavigate();
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent}>
            <Heading as="h1" sx={styles.heroTitle}>
              Kadıköy'ün merkezinde yeni nesil kız yurdu.
            </Heading>
            <Text as="p" sx={styles.desc}>
              10'a yakın üniversitelere ulaşım kolaylığı ile Kadıköy'ün merkezinde Marmara kız öğrenci yurdu.<br/>
              Ödeme kolaylığı ve 10 taksit imkanı ile
              yeni dönem kayıtlarımız başlamıştır. Ön kayıt avantajlarını kaçırmamak için şimdi başvurabilir veya bizleri arayabilirsiniz.
              
            </Text>
            <Box as="form" onSubmit={handleSubmit}>

              <Button type="submit" sx={styles.button} variant="primary" onClick={() => { window.open("https://forms.gle/yenPQNkwLckLQsXX9", '_blank') }}>
                Şimdi başvur
              </Button>

              <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', mt: 5, fontSize: '18px' }}><ImPhone fontSize="1.2em" style={{ marginRight: '8px' }} /> 530 846 47 61</Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    background: `url(${bannerBg}) no-repeat center top / cover`,
    backgroundSize: ['100%', null, null, null, 'cover'],
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    minHeight: [null, null, null, null, '50vh', '100vh'],
  },
  bannerContent: {
    backgroundColor: rgba('#fff', 0.93),
    boxShadow: [
      '0px 10px 16px rgba(52, 61, 72, 0.12)',
      null,
      null,
      null,
      'none',
    ],
    maxWidth: [null, null, null, 600, 500, null, 650],
    padding: [
      '20px',
      '30px',
      null,
      null,
      null,
      '30px 50px 20px',
      '50px 60px 20px',
    ],
    borderRadius: 5,
    m: ['110px 0 0', null, null, '110px auto 0', '60px 0 0', null, 0],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      maxWidth: 515,
      mt: 70,
      padding: '30px 50px 25px',
    },
  },
  heroTitle: {
    fontSize: [22, 28, 28, 40, , 5, 6],
    fontWeight: 700,
    letterSpacing: 'heading',
    lineHeight: [1.4, null, null, null, null, null, 1.57],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      fontSize: 40,
    },
  },
  desc: {
    fontSize: [15, 16, 15, 17],
    lineHeight: [1.53, 1.53, 1.53, 2, 2.4, 2, 2.48],
    maxWidth: 440,
    marginTop: [15, 15, 15, null, null, null, 30],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      mt: 15,
    },
  },
  select: {
    marginTop: 30,
    select: {
      minWidth: ['auto', 'auto', 'initial'],
    },
  },
  button: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 20,
    fontFamily: 'helvetica',
    width: '100%',
    minHeight: [50, null, null, null, 60],
    fontSize: [16, 16, 16, 20],
    ':focus': {
      outline: '0 none',
    },
  },
};

/** @jsx jsx */
import { jsx, Box, Container, Image, Flex, Link,Text } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import SectionHeading from 'components/section-heading';
//import customer from 'assets/images/customer.png';

const OurCustomer = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <Flex sx={styles.contentWrapper}>
          <Flex as="figure" sx={styles.illustration}>
            {/* <Image loading='lazy' src='' alt='hakkımızda' /> */}
          </Flex>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Hakkımızda"
              description="Dünyada kalite standartlarını uygulayan yurdumuz, 
              yeni nesil öğrenci yurdu anlayışımız ile öğrencilere sunduğu geniş imkanlarla ön plana çıkmaktadır. 
              Bir öğrencinin üniversite hayatı boyunca karşılaştığı en önemli sorunlarından biri konaklamadır. 
              Çünkü öğrencilerin üniversite hayatlarında başarılı olmak için en değerli sermayelerinden biri zamanlarını iyi kullanmalarıdır."
            />
            <Text as="p" sx={{fontSize:17,lineHeight: 2.07,textAlign: ['center', 'center', 'center', 'left'],maxWidth:580}}> 2023 senesinde Marmara kız öğrenci yurdu, Kadıköyde tam kapasite ile öğrencilerin bu önemli ihtiyaçlarını karşılamak amacıyla faaliyete geçmiştir.
            Sahip olduğumuz geniş imkanlar ile öğrencilere eğitim hayatları boyunca yanlarında olmaya devam edeceğiz."</Text>
            
          </Box>
          <Box></Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default OurCustomer;

const styles = {
  section: {
    pt: [60, 60, 60, 60, 80, 9],
    pb: [30, 30, 6],
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
  illustration: {
    alignItems: ['flex-start'],
    maxWidth: ['none', 'none', 'none', 'none', 480, 530, 760],
    m: ['50px 0 0', '50px 0 0', '50px 0 0', 0, '0 20px 0 0', '0 48px 0 0'],
  },
  rightContent: {
    m: [0, 0, 0, 0, '0px 48px 0px 0px', '0px 95px 0px 0px'],
  },
  heading: {
    textAlign: ['center', 'center', 'center', 'left'],
    marginLeft: 0,
    maxWidth: 580,
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
  link: {
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

import React from 'react'
import { Box, Flex, Container, Input, Button, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';

function Hakkimizda() {
  return (
    <Box id="hakkimizda" as="section" sx={styles.section}>
      <Container>
        <Flex sx={styles.contentWrapper}>
          
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Hakkımızda"
              description="2023 yılında açılan yurdumuz, üniversitelere ve toplu ulaşım noktalarına yakınlığıyla siz üniversiteliler için en doğru seçim olacaktır.
            Öğrencilerimizin sosyal çevre açısından da beklentilerini güvenli bir şekilde karşılamaktadır."
            />
            <Text as='p' sx={{ fontSize: 16, lineHeight: 2.07, textAlign: ['center', 'center', 'center', 'center'], maxWidth: 580 }}>
              Marmara Kız Öğrenci Yurdu olarak amacımız, Atatürk ilke ve inkilaplarından hiçbir zaman ödün vermeyen, laikliği daima koruyan;
              seçkin yönetim kadrosu ile tüm öğrencilerimizin öncelikle güven, saygu ve aile sıcaklığını hissetmelerini amaçlamaktayız.
            </Text>
            <Text as='p' sx={{ fontSize: 16, lineHeight: 2.07, textAlign: ['center', 'center', 'center', 'center'], maxWidth: 580 }}>
              Özel Marmara Kız Öğrenci Yurdumuz, Gençlik ve Spor Bakanlığı'na bağlı olarak hizmet vermektedir.
            </Text>

          </Box>
          
        </Flex>
      </Container>
    </Box>
  )
}

export default Hakkimizda

const styles = {
  section: {
    pt: [60, 60, 60, 60, 80, 9],
    pb: [30, 30, 6],
  },
  contentWrapper: {
    display: ['flex'],
    alignItems: ['center'],
    justifyContent: 'center',
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
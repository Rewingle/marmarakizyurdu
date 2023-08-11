/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button } from 'theme-ui';
import { rgba } from 'polished';
import { useRef, useEffect, useState } from 'react';
//import Link from 'next/link'
import Image from 'components/image';
import { ImPhone } from 'react-icons/im';
import bannerBg from 'assets/images/banner-bg.webp';

import render1 from 'assets/images/gallery/Render1.webp';
import render2 from 'assets/images/gallery/Render2.webp';
import render3 from 'assets/images/gallery/Render3.webp';
//import { useNavigate } from 'react-router-dom'
import SwiperCore, { Autoplay, Pagination, EffectFade } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay, Pagination, EffectFade]);


export default function Banner() {
  const isPause = useRef(false);
  const [currentWidth, setCurrentWidth] = useState(0);
  let time = 3;
  let tick, percentTime;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitting...');
  };
  const swiperRef = useRef(null);
  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    tick = setInterval(interval, 10);
  }
  function interval() {
    if (isPause.current === false) {
      percentTime += 1 / (time + 0.1);
      setCurrentWidth(percentTime);
      if (percentTime >= 100) {
        swiperRef?.current?.swiper?.slideNext();
        startProgressbar();
      }
    }
  }
  function resetProgressbar() {
    setCurrentWidth(0);
    clearTimeout(tick);
  }
  useEffect(() => {
    startProgressbar();
  }, []);
  const slideGallery = [
    {
      id: 1,
      image: render1,
      title: 'Kartlı giriş sistemi',
      alt: '',
    },
    {
      id: 2,
      image: render2,
      title: 'Resepsiyon',
      alt: '',
    },
    {
      id: 3,
      image: render3,
      title: 'Açık büfe kahvaltı',
      alt: '',
    },
  ]
  //const navigate = useNavigate();
  return (
    <Box>

      <Swiper
        loop={true}
        effect="fade"
        ref={swiperRef}
        spaceBetween={0}
        slidesPerView={1}
        pagination={true}
        style={{ width: '100%',backgroundColor:'#10132d' }}
      >
        {slideGallery?.map((item) => (
          <SwiperSlide key={item.id}>
            <Box as="figure" sx={styles.image}>
              <Image loading="lazy" src={item.image} alt={item.alt} sx={{height:[null,null,null,null,'960px'],width:'100%'}} />

            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

const styles = {
  section: {
    background: `url(${bannerBg}) no-repeat center top / cover`,
    backgroundSize: ['100%', null, null, null, 'cover'],
    minHeight: [null, null, null, null, '50vh', '100vh'],
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
  image: {
    position: 'relative',

    minHeight: [null, null, null, null, '50vh', '100vh'],


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

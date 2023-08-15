/** @jsx jsx */
import { jsx, Box} from 'theme-ui';
import { rgba } from 'polished';
import { useRef, useEffect, useState } from 'react';
//import Link from 'next/link'
import Image from 'components/image';
import banner1 from 'assets/images/banner1.webp'
import banner2 from 'assets/images/render10.webp'
import banner3 from 'assets/images/banner2.webp'
import banner4 from 'assets/images/render2.webp'
import banner5 from 'assets/images/render3.webp'

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
      image: banner1,
      title: '',
      alt: 'kız öğrenci yurdu',
    },

    {
      id: 3,
      image: banner2,
      title: '',
      alt: 'kız öğrenci yurdu',
    },
    {
      id: 4,
      image: banner3,
      title: '',
      alt: 'kız öğrenci yurdu',
    },
    {
      id: 5,
      image: banner4,
      title: '',
      alt: 'kız öğrenci yurdu',
    },
    {
      id: 6,
      image: banner5,
      title: '',
      alt: 'kız öğrenci yurdu',
    },

  ]
  //1691x952
  return (
    <Box id="home" as="section" sx={styles.section}>
      <Box>

        <Swiper
          loop={true}
          effect="fade"
          ref={swiperRef}
          spaceBetween={0}
          slidesPerView={1}
          pagination={true}
          style={{ width: '100%' }}
        >
          {slideGallery?.map((item) => (
            <SwiperSlide key={item.id}>
              <Box as="figure" sx={styles.image}> 
                <Image loading="lazy" src={item.image} alt={item.alt} sx={{ height: [null, null, null, null, '100%'], boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 10px', width: '100%', marginTop: ['3em', '3em', '6em', '8em', '8em'] }} />

              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

const styles = {
  section: {
    
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    minHeight: [null, null, null, null, '50vh', '60vh'],
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
 
  image: {
    position: 'relative',
    height: [null, null, null, null, '100vh'],
    width: ['100%',null,null,null,null],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

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

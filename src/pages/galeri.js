import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Layout from 'components/layout';
import { Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import GalleryCard from 'components/cards/gallery-card';
import Masonry from 'react-masonry-component';
import gallery1 from 'assets/images/gallery/oda1.webp';
import gallery2 from 'assets/images/gallery/oda2.webp';
import gallery3 from 'assets/images/gallery/oda3.webp';
import gallery4 from 'assets/images/gallery/oda4.webp';
import gallery5 from 'assets/images/gallery/oda5.webp';
import gallery6 from 'assets/images/gallery/oda6.webp';
import gallery7 from 'assets/images/gallery/oda7.webp';
import gallery8 from 'assets/images/gallery/oda8.webp';
import gallery9 from 'assets/images/gallery/oda9.webp';
import gallery10 from 'assets/images/gallery/oda10.webp';
import gallery11 from 'assets/images/gallery/oda11.webp';
import gallery12 from 'assets/images/gallery/oda12.webp';
import full1 from 'assets/images/gallery/full/1.webp';
import full2 from 'assets/images/gallery/full/2.webp';
import full3 from 'assets/images/gallery/full/3.webp';
import full4 from 'assets/images/gallery/full/4.webp';
import full5 from 'assets/images/gallery/full/5.webp';
import full6 from 'assets/images/gallery/full/6.webp';
import full7 from 'assets/images/gallery/full/7.webp';
import full8 from 'assets/images/gallery/full/8.webp';
import full9 from 'assets/images/gallery/full/9.webp';
import full10 from 'assets/images/gallery/full/10.webp';
import full11 from 'assets/images/gallery/full/11.webp';
import full12 from 'assets/images/gallery/full/12.webp';
import plan1 from 'assets/images/gallery/plan/plan1.webp';
import plan2 from 'assets/images/gallery/plan/plan2.webp';
import plan3 from 'assets/images/gallery/plan/plan3.webp';
import banyo2 from 'assets/images/gallery/banyo2min.webp';
import banyo1 from 'assets/images/gallery/banyo1min.webp';
import banyo1full from 'assets/images/gallery/banyo1full.webp';
import banyo2full from 'assets/images/gallery/banyo2full.webp';
import antre1 from 'assets/images/gallery/antremin.webp';
import antre2 from 'assets/images/gallery/antre2min.webp';
import antre3 from 'assets/images/gallery/antre3min.webp';
import dus from 'assets/images/gallery/dusmin.webp';
import antre1full from 'assets/images/gallery/antrefull.webp';
import antre2full from 'assets/images/gallery/antre2full.webp';
import antre3full from 'assets/images/gallery/antre3full.webp';
import dusfull from 'assets/images/gallery/dusfull.webp';
import ortak1 from 'assets/images/gallery/ortakmin.webp';
import ortakfull from 'assets/images/gallery/ortakfull.webp';
import cafe1min from 'assets/images/gallery/cafe1min.webp';
import cafe2min from 'assets/images/gallery/cafe2min.webp';
import cafe3min from 'assets/images/gallery/cafe3min.webp';
import cafe4min from 'assets/images/gallery/cafe4min.webp';
import cafe1full from 'assets/images/gallery/cafe1full.webp';
import cafe2full from 'assets/images/gallery/cafe2full.webp';
import cafe3full from 'assets/images/gallery/cafe3full.webp';
import cafe4full from 'assets/images/gallery/cafe4full.webp';

function galeri() {
  const data = {
    'odalar': [
      {
        id: 1,
        image: gallery1,
        title: 'Oda-1',
        full: full1
      },
      {
        id: 2,
        image: gallery2,
        title: 'Oda-2',
        full: full2
      },
      {
        id: 3,
        image: gallery3,
        title: 'Oda-3',
        full: full3
      },
      {
        id: 4,
        image: gallery4,
        title: 'Oda-4',
        full: full4
      },
      {
        id: 5,
        image: gallery5,
        title: 'Oda-5',
        full: full5
      },
      {
        id: 6,
        image: gallery6,
        title: 'Oda-6',
        full: full6
      },
      {
        id: 7,
        image: gallery7,
        title: 'Oda-7',
        full: full7
      },
      {
        id: 8,
        image: gallery8,
        title: 'Oda-8',
        full: full8
      },
      {
        id: 9,
        image: gallery9,
        title: 'Oda-9',
        full: full9
      },
      {
        id: 10,
        image: gallery10,
        title: 'Oda-10',
        full: full10
      },
      {
        id: 11,
        image: gallery11,
        title: 'Oda-11',
        full: full11
      },
      {
        id: 12,
        image: gallery12,
        title: 'Oda-12',
        full: full12
      },
      
    ],
    planlar: [
      {
        id: 1,
        image: plan1,
        title: '1.2.3. Kat Planı',
        full: plan1
      },{
        id: 2,
        image: plan2,
        title: '4. Kat Planı',
        full: plan2
      },{
        id: 3,
        image: plan3,
        title: 'Çatı Arası Piyesi Kat Planı',
        full: plan3
      },
    ],
    banyolar:[
      {
        id:1,
        image: banyo1,
        title: 'Banyolu oda',
        full: banyo1full
      },
      {
        id:2,
        image: banyo2,
        title: 'Banyolu oda',
        full: banyo2full
      },
      {
        id:3,
        image: ortak1,
        title: 'Ortak Banyo',
        full: ortakfull
      }
    ],
    kafe:[
      {
        id:1,
        image: cafe1min,
        title: 'Teras',
        full: cafe1full
      },
      {
        id:2,
        image: cafe2min,
        title: 'Çalışma alanı',
        full: cafe2full
      },
      {
        id:3,
        image: cafe3min,
        title: 'Çalışma alanı',
        full: cafe3full
      },
      {
        id:3,
        image: cafe4min,
        title: 'Çalışma alanı',
        full: cafe4full
      }
    ],
    antre: [
      {
        id:1,
        image: antre1,
        title: 'Antre-1',
        full: antre1full
      },
      {
        id:2,
        image: antre2,
        title: 'Antre-2',
        full: antre2full
      },
      {
        id:3,
        image: antre3,
        title: 'Antre-3',
        full: antre3full
      }
    ],
    dus:[
      {
        id:1,
        image: dus,
        title: 'Duş',
        full: dusfull
      }
    ]
   
  };

  const masonryOptions = {
    transitionDuration: 0,
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Box id="gallery" as="section" sx={styles.section}>
          <Container sx={styles.container}>
            <SectionHeading
              sx={styles.heading}
              title="Planlar"
            />
            <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
              {data.planlar?.map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </Box>

            <SectionHeading
              sx={styles.heading}
              title="Antre"
            />
            <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
              {data.antre?.map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </Box>
            <SectionHeading
              sx={styles.heading}
              title="Kafe ve Çalışma Alanları"
            />
            <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
              {data.kafe?.map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </Box>

            <SectionHeading
              sx={styles.heading}
              title="Banyolar"
            />

            <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
              {data.banyolar?.map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </Box>

            <SectionHeading
              sx={styles.heading}
              title="Duşlar"
            />

            <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
              {data.dus?.map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </Box>

            <SectionHeading
              sx={styles.heading}
              title="Odalar"
            />

            <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
              {data.odalar?.map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </Box>

          </Container>
        </Box>

      </Layout>

    </ThemeProvider>
  )
}

const styles = {
  section: {
    fontFamily: 'Helvetica',
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
  },
  heading: {

    mt: [30, 30, 50, 60],

  },
  container: {
    mt: [60]
  },
  galleryWrapper: {
    mx: '-15px',
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [14, 14, 16],
    width: '100%',
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

export default galeri
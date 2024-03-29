import React,{lazy} from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Clients from 'sections/clients';
import Gallery from 'sections/gallery';
import Pricing from 'sections/pricing';
import Blog from 'sections/blog';
import Subscription from 'sections/subscription';
import Hakkimizda from 'sections/hakkimizda';
import Odalarimiz from 'sections/odalarimiz';
import Hizmetler from 'sections/hizmetlerimiz'; 
import Whatsapp from 'components/whatsapp';
import Basvurular from 'sections/basvurular';


export default function IndexPage() {
  return (

    <ThemeProvider theme={theme}>


      <Layout>
        <SEO title="Marmara kız öğrenci yurdu" description="Kadıköy'ün merkezinde kız öğrenci yurdu"/>
        <Whatsapp/>
        <Banner />
        <Hakkimizda/>
        <Odalarimiz/>
        <Hizmetler/>
        <Basvurular/>
        <Clients />
        <Gallery />
        <Blog />
        <Pricing />
        <Subscription />
      </Layout>
    </ThemeProvider>

  );
}

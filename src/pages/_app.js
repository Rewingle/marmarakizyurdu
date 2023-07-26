import { useEffect } from 'react';
import Router from 'next/router';
import 'swiper/swiper-bundle.min.css';
import 'assets/css/slick.min.css';
import { initGA, logPageView } from 'analytics';
import 'typeface-dm-sans';
//import {Analytics} from '@vercel/analytics/react'
import { BrowserRouter as Routes, Route, Link, BrowserRouter }
  from "react-router-dom";

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return (
    <>

    
      <Component {...pageProps} />
      
    </>
  );
}

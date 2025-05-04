import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero';
import CarLogos from '../components/CarLogos';
import OfferSection from '../components/OfferSection';
import FeaturedCars from '../components/FeaturedCars';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>StreetCars Premium - Find Your Dream Car</title>
          <meta name="description" content="Discover premium pre-owned cars at StreetCars" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Hero />
        <CarLogos />
        <OfferSection />
        <FeaturedCars />
        <ServicesSection />
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Home;
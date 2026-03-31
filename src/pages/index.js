import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="hero__background"></div>
      <div className="container">
        <p className="hero__subtitle hero__nomargin">Welcome to the</p>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons} style={{gap: '12px'}}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/installing-mods">
            Learn to install Mods Here
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/welcome">
            Get Started Modding Here
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="The Community Modding Wiki for Voices of the Void">
      <HomepageHeader />
    </Layout>
  );
}

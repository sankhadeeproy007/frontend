/* eslint-disable */
import Page from '../components/Page';
import NProgress from 'nprogress';
import Router from 'next/router';

import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }) => (
  <div>
    <Page>
      <Component {...pageProps} />
    </Page>
  </div>
);

export default App;

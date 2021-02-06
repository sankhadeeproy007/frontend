/* eslint-disable */
import Page from '../components/Page';

const App = ({ Component, pageProps }) => (
  <div>
    <Page>
      <Component {...pageProps} />
    </Page>
  </div>
);

export default App;

import Layout from '@/components/Layout/layout';
import { wrapper } from '@/store/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(App);

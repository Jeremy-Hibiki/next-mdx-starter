import { MDXProvider } from '@mdx-js/react';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import 'highlight.js/styles/tokyo-night-dark.css';
import 'katex/dist/katex.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider>
      <div
        style={{
          margin: '0 auto',
          maxWidth: '42rem',
          padding: '0 1rem',
        }}
      >
        <Component {...pageProps} />
      </div>
    </MDXProvider>
  );
}

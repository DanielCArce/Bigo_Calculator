import { Html, Head, Main, NextScript } from 'next/document'
import SeoMeta from '../components/SeoMeta';
export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <SeoMeta/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
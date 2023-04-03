import "../styles/globals.css";
import HeaderPage from './../components/layout/HeaderPage';
import FooterPage from "./../components/layout/FooterPage";
export const metadata = {
  description: 'Tools for help to brodcasters in BigoLive App from Latam',
  authors:['Sr. Aguacate aka DanielCArce'],icons: {
    icon: [{ url: '/favicon32.png' }, new URL('/favicon32.png', 'https://bigo-calculator.vercel.app')],
    shortcut: ['/favicon32.png'],
    apple: [
      { url: '/favicon32.png' },
      { url: '/favicon32.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
  manifest: 'https://bigo-calculator.vercel.app/manifest.json'
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
     <body>
       <HeaderPage/>
       {children}
       <FooterPage/>
       </body>
    </html>
  )
}

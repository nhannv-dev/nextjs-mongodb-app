import '@/assets/base.css'
import { Layout } from '@/components/Layout'
import { RouteGuard } from '@/page-components/Auth/RouteGuard'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <RouteGuard>
          <Component {...pageProps} />
          <Toaster />
        </RouteGuard>
      </Layout>
    </ThemeProvider>
  )
}

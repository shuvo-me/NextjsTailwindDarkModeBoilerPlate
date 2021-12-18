import '../styles/globals.css'
import {useRouter} from "next/router";
import Link from 'next/link';
import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import NProgress from 'nprogress'
import '../public/nprogress.css'

//
function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`)
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  // const handleStart = (url) => {
  //   console.log(`Loading: ${url}`)
  //   NProgress.start()
  // }
  // const handleStop = () => {
  //   NProgress.done()
  // }

  // router.events.on('routeChangeStart', handleStart)
  // router.events.on('routeChangeComplete', handleStop)
  // router.events.on('routeChangeError', handleStop)

  return (
    <>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp

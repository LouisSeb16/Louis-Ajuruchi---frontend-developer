import Image from 'next/image'
import RootLayout from './layout'
import LandingPage from './home/page'

export default function Home() {
  return (
    <RootLayout>
      <LandingPage/>
    </RootLayout>
  )
}

import { getWorks } from '@/lib/contentful'
import Loading from '@/components/Loading'
import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Works from '@/components/Works'
import About from '@/components/About'
import Contact from '@/components/Contact'

export const revalidate = 3600

export default async function Home() {
  const works = await getWorks()

  return (
    <>
      <Cursor />
      <Loading />
      <Nav />
      <main>
        <Hero />
        <Works works={works} />
        <About />
        <Contact />
      </main>
    </>
  )
}

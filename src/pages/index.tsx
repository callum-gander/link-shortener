import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const CreateLinkForm = dynamic(() => import('../components/create-link'), {
  ssr: false,
})

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white gap-12">
      <div className="flex flex-col justify-center items-center mt-8 gap-4">
        <h1 className="text-6xl neon">Diddy Link</h1>
        <h3 className="text-light-blue">Shorten your links today!</h3>
      </div>
      <Suspense>
        <CreateLinkForm />
      </Suspense>
    </div>
  )
}

export default Home

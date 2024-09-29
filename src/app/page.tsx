import Link from "next/link";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-3xl font-bold'>Hello, world!</h1>
      <Link className=" font-semibold text-3xl text-white rounded-full px-6 py-4 bg-red-900" href='https://youtu.be/iqrgggs0Qk0?t=3156'>Go from you leftg</Link>
      <p className='text-lg text-center'>
        Welcome to your new app. Get started by editing{' '}
        <code className='text-primary'>src/app/page.tsx</code>
      </p>
    </main>
  )
}

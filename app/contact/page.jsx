import {redirect} from 'next/navigation'

function loadingPage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('loading...')
    }, 1000)
  })
}

export default async function ContactPage() {
  const load = await loadingPage()
  console.log({load})

  redirect('/#contact')
}

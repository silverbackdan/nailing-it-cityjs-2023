import { callWithNuxt } from '#app'
import { $fetch } from 'ofetch'

export async function useMyFetch (url: string) {
  const data = useState(url)

  if (data.value) {
    return data.value
  }

  try {
    const res1 = await $fetch(url, {
      baseURL: 'https://jsonplaceholder.typicode.com',
    })

    const res2 = await $fetch(url, {
      baseURL: 'https://jsonplaceholder.typicode.com',
    })

    data.value = {
      res1,
      res2
    }
  } catch (err) {

  }


  return data
}

import { $fetch } from 'ofetch'

export const jsonPlaceholderAPI = $fetch.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

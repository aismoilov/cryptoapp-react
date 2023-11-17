import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const cryptoNewsHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': '8bf2807124mshf2b08a73b1d10a3p1274c3jsna24f455ba9ca',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptosNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news`)
    })
  })
})

export const {
  useGetCryptosNewsQuery
} = cryptoNewsApi
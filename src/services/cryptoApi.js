import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// var options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/exchanges',
//   headers: {
//   }
// };

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'cf4a6fc25bmshbf79028e739b7d9p1920a6jsn5fa44b39f4e5'
}

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    })
  })
})

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
} = cryptoApi;
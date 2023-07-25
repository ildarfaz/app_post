import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from '../../types/posts'
import { enumDirection } from '../../types/common'

interface IArguments {
  query: string;
  page: number;
  sortColumn: string;
  direction: enumDirection;
}

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `/posts`,
      transformResponse: (response: IPost[], error, {
        query,
        page,
        sortColumn,
        direction,
      }: IArguments) => {

        const data = [...response].filter(({
          id,
          title,
          body,
        }) => id.toString().includes(query) || title.includes(query) || body.includes(query)).sort(
          (a, b) => {
            switch (sortColumn) {
              case 'id':
                return direction === enumDirection.ASC ? a[sortColumn] - b[sortColumn] : b[sortColumn] - a[sortColumn]
              case 'title':
              case 'body':
                return direction === enumDirection.ASC ? (a[sortColumn] < b[sortColumn] ? -1 : 1)
                  : (a[sortColumn] > b[sortColumn] ? -1 : 1)
              default:
                return 0
            }
          },
        )
        const posts = [...data].slice((page - 1) * 10, (page - 1) * 10 + 10)

        return { posts, total: data.length }
      },
    }),
  }),
})

export const { useGetPostsQuery } = postsApi

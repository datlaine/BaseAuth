// import { useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from './auth/AuthContext'
import FetchData from './apis/fetchData'
import { useQuery } from '@tanstack/react-query'
// import FetchData from './apis/fetchData'

const Home = () => {
  const { user } = useContext(AuthContext)

  const { data } = useQuery({
    queryKey: ['data'],
    queryFn: () => FetchData.getDataInfo()
  })

  useEffect(() => {
    //     console.log(data)
  }, [data])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   return <div>{!isLoading && data?.data.map((item: any) => <p>{item}</p>)}</div>
  return (
    <>
      <p>Xin chao {user?._id}</p>
      <div className='flex gap-3 ml-5'>
        {data?.data.data.map((item: string, index: number) => <p key={index}>{item}</p>)}
      </div>
    </>
  )
}

export default Home

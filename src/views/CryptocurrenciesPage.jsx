import React, { useEffect, useState } from 'react'
import { Input } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Cryptocurrencies, Loader } from '../components'

const CryptocurrenciesPage = ({ simpified }) => {
  const count = simpified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coins) => coins.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setCryptos(filteredData)
  }, [cryptosList, searchTerm])

  if (isFetching) return <Loader />

  return (
    <>
      <div className="search-crypto">
        <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value) } />
      </div>
      <Cryptocurrencies coins={cryptos} />
    </>
  )
}

export default CryptocurrenciesPage
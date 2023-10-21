import React from 'react'
import HistoryChart from '../Components/HistoryChart'
import CoinDetail from '../Components/CoinDetail'

function Single() {
  
  return (
    <div className='wrapper-container mt-10'>
      <HistoryChart/>
      <CoinDetail/>
    </div>
  )
}

export default Single
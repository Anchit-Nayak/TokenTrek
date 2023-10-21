import React from 'react'
import { currency_format } from '../currenyFormat';
import { TrendingDown, TrendingUp } from '../icons/icons';
import { Link } from 'react-router-dom';

const Coin = ({coin}) => {
  return (
    <Link to={`/coin/${coin.id}`}>
    <div className="grid grid-cols-3 sm:grid-cols-4 font-light p-2 rounded border-gray-200 border-b hover:bg-gray-200">
        <div className="flex items-center w-full gap-1">
          <img className="w-6" src={coin.image} alt={coin.name}></img>
          <p>{coin.name}</p>
          <span className='text-xs'>({coin.symbol})</span>
        </div>
        <span className='w-full text-center'>{currency_format(coin.current_price)}</span>
        <span className={`flex gap1 ${coin.price_change_percentage_24h< 0 ? 'text-red-400' : 'text-green-400'}`}>
          {coin.price_change_percentage_24h< 0 ? <TrendingDown/> : <TrendingUp/>}
          {coin.price_change_percentage_24h}
        </span>
        <div className='hidden sm:block'>
          <p className='font-semibold'>Market Cap</p>
          <span>{currency_format(coin.market_cap)}</span>
        </div>
    </div>
    </Link>
  )
}

export default Coin
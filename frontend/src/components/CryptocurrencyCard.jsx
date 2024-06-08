import React from 'react';
import { Card, Space } from 'antd';

function CryptocurrencyCard(props) {

    const{ currency } = props
    const price = Math.round(currency.quote.USD.price * 1000) / 1000
    const volume_change_24h = Math.round(currency.quote.USD.volume_change_24h * 100) / 100
    const total_supply = Math.round((Math.round(currency.total_supply * 100) / 100) / 1000000000 * 1000) / 1000


    return (
        <div>
                <Card className='shadow-md'
                    title={
                        <div className='flex items-center gap-3 p-6'>
                            <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`}/>
                            <span className='text-3xl'>{currency.name}</span>
                        </div>
                    }
                    
                    style={{
                        width: 650,
                    }}
                >   
                <div className='text-lg font-medium'>
                    <p>Текущая цена: {price}$</p>
                    <p>Изменение цены за 24 часа: <span className='text-green-400'>{volume_change_24h}%</span></p>
                    <p>Текущая капитализация: ${total_supply}B</p>
                </div>
                    
                </Card>
        </div>
    )
}

export default CryptocurrencyCard
import up from './img/up.svg'
import marketCap from './img/market-cap.svg'
import holders from './img/holders.svg'
import plus from './img/plus.svg'

import AddPreco from './components/AddPreco'



import './styles.scss'
export default function Card() {
    return (
        <div className="card">
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="token-img" className="token-img" />
            <p className='preco-abertura'>$42.237,67</p>
            <p className='percentual-preco'>+10,27%</p>
            <p className='preco-atual'>$45.237,63</p>
            <img src={up} alt="up-down" className="up-down-img" />
            <img src={marketCap} alt="market-cap" className="market-cap-img" />
            <p className='percentual-market-cap'>+10,27%</p>
            <p className='market-cap'>500TRI</p>
            <img src={holders} alt="holders-img" className="holders-img" />
            <p className='percentual-holders'>-3,20%</p>
            <p className='holders'>238MI</p>
            <div className='precos-alvos'>
                <div className='area-titulo'>
                    <p className='titulo-precos'>Preços Alvos</p>
                    <img src={plus} alt="add-preco-alvo" className="add-preco-alvo" />
                </div>
                <div className='area-precos'>
                    <div className='precos-up'>
                        <AddPreco alvo="up" />
                        <AddPreco alvo="up" />
                        <AddPreco alvo="up" />
                    </div>
                    <div className='precos-down'>
                        <AddPreco alvo="down" />
                        <AddPreco alvo="down" />
                        <AddPreco alvo="down" />
                    </div>
                </div>

            </div>
        </div>
    )
}
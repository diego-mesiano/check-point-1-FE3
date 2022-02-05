import './styles.scss'

import del from '../../img/del.svg'

export default function AddPreco(props) {
    return (
        <>
            <div className='linha-preco'>

                {props.alvo === "up" ?
                    <img src={del} alt="img-delete" className="img-delete" /> : null}

                <p className={`preco-alvo-${props.alvo}`}>$45.237.63</p>

                {props.alvo === "down" ?
                    <img src={del} alt="img-delete" className="img-delete" /> : null}
            </div>
        </>
    )
}
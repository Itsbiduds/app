import './Botao.css'

const Botao = (props) => {
    return (<button className='botao'>
        <span>{props.texto}</span>
    </button>)
}

export default Botao
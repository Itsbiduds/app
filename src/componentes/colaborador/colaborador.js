import './colaborador.css'

const Colaborador = ({imagem, n1, n2, corDeFundo}) => {

    
    return ( <div className='colaborador'>
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={n1} />
        </div>
        <div className='rodape'>
            <h4>{n1}</h4>
            <h5>{n2}</h5>
        </div>
    </div>)
}

export default Colaborador
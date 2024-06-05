import Colaborador from '../colaborador/colaborador'
import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria}
    return (       
            (props.colaboradores.length > 0) ? <section className='time' style={css} >
                <h3 style={{borderColor: props.corPrimaria}} >{props.nome}</h3>

                <div className='colaboradores'>
                    {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} 
                    key={colaborador}
                    n1={colaborador.n1} 
                    n2={colaborador.n2}
                    imagem={colaborador.imagem}
                />)}
                </div>
            </section> 
            : ''
    )
}

export default Time
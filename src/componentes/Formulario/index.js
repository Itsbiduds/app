import { useState } from 'react'
import Botao from '../Botao/Index';
import CampoTexto from '../CampoTexto/Index';
import ListaSuspensa from '../ListaSuspensa/Index';
import './Formulario.css';

const Formulario = (props) => {

        const [n1, setN1] = useState('')
        const [n2, setN2] = useState('')
        const [imagem, setImagem] = useState('')
        const [time, setTime] = useState('')

        
        const aoSalvar = (evento) => { 
            evento.preventDefault()
            props.aoColaboradorCadastrado({
                n1,
                n2,
                imagem,
                time
            })
            
        }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Formulario - Preencha todos os dados abaixo</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Coisa 1" 
                    placeholder="Digite algo"
                    value={n1}
                    aoAlterado={valor => setN1(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Coisa 2"
                    placeholder="Digite algo de novo"
                    value={n2}
                    aoAlterado={valor => setN2(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    value={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <h3>Lista suspensa - selecione um</h3>
                <ListaSuspensa 
                    obrigatorio={true}
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao texto="Criar Card"/>
            </form>
        </section>
    )
}

export default Formulario

import { useState } from 'react'
import Formulario from "./componentes/Formulario";
import Banner from "./componentes/banner/Banner";
import Time from './componentes/Time/Time';
import Rodape from './componentes/Rodapé/rodape';


function App() {

    const times = [
        {
            nome: 'Grupo 1',
            corPrimaria: '#309beb',
            corSecundaria: '#b2f5ff',
        },
        {
            nome: 'Grupo 2',
            corPrimaria: '#FF9669',
            corSecundaria: '#fff569',
        },
        {
            nome: 'Grupo 3',
            corPrimaria: '#ff4cbf',
            corSecundaria: '#FFB9E6',
        },
        {
            nome: 'Grupo 4',
            corPrimaria: '#FF5A96',
            corSecundaria: '#FFAABC',
        },
        {
            nome: 'Grupo 5',
            corPrimaria: '#00A254',
            corSecundaria: '#72FFBC',
        },
                
    ]

    const [colaboradores, setColaboradores] = useState([])

    const novoColaborador = (colaborador) => {
        debugger
        setColaboradores([...colaboradores, colaborador])
    }
    
    return (
        <div className="App">
            <Banner />
            <Formulario times={times.map(time => time.nome)}
             aoColaboradorCadastrado={colaborador => 
                novoColaborador(colaborador)}/> 
            
            {times.map(time => <Time 
            key={time.nome} 
            nome={time.nome} 
            corPrimaria={time.corPrimaria} 
            corSecundaria={time.corSecundaria} 
            colaboradores={colaboradores.filter(colaborador => 
                colaborador.time === time.nome)}
            />)}

            <Rodape/>
            
        </div>
    );
}

export default App;
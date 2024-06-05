import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="">
                        <img src="/imagens/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="x.com" target="">
                        <img src="/imagens/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="">
                        <img src="/imagens/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section className='logo'>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section className='frase'>
            <h2>
                Desenvolvido por mim
            </h2>
        </section>
    </footer>)
}

export default Rodape

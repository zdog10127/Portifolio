import React from 'react';
import '../styles/sobre.css';
import perfil from '../assets/perfil.svg';
import curriculo from '../assets/curriculo.pdf';
function Sobre() {
    return (
        <div className='sobre' id='sobre'>
            <img src={perfil} className='perfil-img' />
            <div className='text'>
                <h1>Sobre Mim</h1>
                <p>Me chamo Gabriel Teles Santos,tenho 23 anos e atualmente moro em Araxá/MG </p>
                <br />
                <p>Curso bacharelado em sistemas de informação.
                    Onde acabei conhecendo mais sobre programação e desenvolvimento. Desde então me apaixonei por essa area e venho estudando e procurando aprender cada vez mais.
                </p>
                <div className='botoes'>
                    <a className='button' href='https://www.linkedin.com/in/gabriel-teles-76a486161/'><i className="fab fa-linkedin"></i>Linkedin</a>
                    <a className='button' href={curriculo}><i className="fas fa-file-download"></i>Curriculo</a>
                </div>
            </div>
        </div>
    );
}

export default Sobre;
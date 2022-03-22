import React, { useState } from 'react';
import '../styles/navbar.css';
import Devimage from '../assets/devimage.svg'

function Navbar() {

    const [click, setClick] = useState(false);
    const openClose = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className='header'>
            <div className='navbar' id='navbar'>
                <div className='ladoesquerdo'>
                    <span>Portfólio</span>
                </div>

                <div className='ladodireito'>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <a href='#sobre'>Sobre mim</a>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <a href='#projetos'>Projetos</a>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <a href='#skills'>Conhecimentos</a>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <a href='#contato'>Contato</a>
                        </li>
                    </ul>

                    <div className='menu-icon' onClick={openClose}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </div>
            </div>

            <div className='apresenta'>
                <div className='text'>
                    <p>Olá, prazer! me chamo</p>
                    <h1>Gabriel Teles Santos</h1>
                    <p>Desenvolvedor Full-Stack</p>
                    <a className='button' href='https://github.com/zdog10127'><i className="fab fa-github"></i>Github</a>
                </div>
                <img src={Devimage} className='devimage' />
            </div>

        </div>
    )
}
export default Navbar;
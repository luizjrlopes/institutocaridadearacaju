import React, { useState, useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from "react-icons/md";
import * as S from './styles.jsx'
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

function Navbar() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <S.Container >
            <IconContext.Provider value={{ color: 'black' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        
                        <FaIcons.FaBars  onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <S.itensMenu>


                        <S.navMenuItems className='nav-menu-items' onClick={showSidebar}>
                            <li className='navbar-toggle'>
                       
                                <Link to='#' className='menu-bars'>
                                    <AiIcons.AiOutlineClose />
                                </Link>
                              
                            </li>

                        </S.navMenuItems >
                        <ul>

                            <S.navText className='nav-text'>


                                <Link to={'/'} >

                                    <a > <MdIcons.MdAccountCircle /></a>
                                    <span >{'Inicio'}</span>
                                </Link>
                          
                                <Link to={'Campanhas'} >

                                <a > <MdIcons.MdAccountCircle /></a>
                                <span >{'Galerias'}</span>
                                </Link>

                                <Link to={'/'}  >

                                    <a > <AiIcons.AiOutlineExport /></a>
                                    <span >{'Contate-no'}</span>
                                </Link>


                            </S.navText>

                        </ul>
                    </S.itensMenu>
                </nav>
            </IconContext.Provider>
        </S.Container>
    );
}

export default Navbar;

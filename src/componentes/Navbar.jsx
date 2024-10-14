import React from 'react';
import { Link } from 'react-router-dom';
import logoEternaSofware from '../imgens/logo.svg';

function Navbar() {
    return (
        <nav className="px-8 md:px-32 flex flex-row justify-between items-center bg-[#ffffff] py-4">
            <div>
                <img className="w-36" src={logoEternaSofware} alt="Logo Eterna Software" />
            </div>
            <div>
                <ul className="flex flex-row space-x-4 font-semibold">
                    <li><Link className="hover:text-blue-600" to="/">Home</Link></li>
                    <li><Link className="hover:text-blue-600" to="/servicos">Serviços</Link></li>
                    <li><Link className="hover:text-blue-600" to="/modelos">Modelos</Link></li>
                    <li><Link className="hover:text-blue-600" to="/sobre">Sobre</Link></li>
                    <li><Link className="hover:text-blue-600" to="/contatos">Contatos</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

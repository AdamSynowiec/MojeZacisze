import React from 'react'
import logo_black from '../../assets/images/logo_black.png'
import menuIcon from '../../assets/images/menu.svg'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <div className="bg-white/[0.75] shadow-md fixed left-0 right-0 z-40 backdrop-blur-md	">
            <div className="container mx-auto px-5">
                <div className="flex flex-row items-center justify-between h-24 ">
                    <div className="block xl:hidden">
                        <ul>
                            <li>
                                <button className='w-16 h-16'></button>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden xl:block flex-1">
                        <ul className='flex items-center justify-between text-zinc-800 text-md uppercase'>
                            <li>
                                <Link className='font-montserrat border-b-2 border-transparent hover:border-zinc-800 transition-all'>O inwestycji</Link>
                            </li>
                            <li>
                                <Link className='font-montserrat border-b-2 border-transparent hover:border-zinc-800 transition-all'>Lokalizacja</Link>
                            </li>
                            <li>
                                <Link className='font-montserrat border-b-2 border-transparent hover:border-zinc-800 transition-all'>Wizualizacje</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 h-full">
                        <img src={logo_black} className="h-full mx-auto" alt="" />
                    </div>
                    <div className="hidden xl:block flex-1">
                        <ul className='flex items-center justify-between text-zinc-800 text-md uppercase'>
                            <li>
                                <Link className='font-montserrat border-b-2 border-transparent hover:border-zinc-800 transition-all'>Lokale</Link>
                            </li>
                            <li>
                                <Link className='font-montserrat border-b-2 border-transparent hover:border-zinc-800 transition-all'>Kontakt</Link>
                            </li>
                            <li>
                                <Link className='font-montserrat border-2 border-zinc-800 p-2 hover:bg-zinc-800 hover:text-white transition-all'>(+48) 000 - 000 - 000</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="block xl:hidden">
                        <ul>
                            <li>
                                <button className='w-12 h-12'>
                                    <img className="w-12 h-12" src={menuIcon} alt="" />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
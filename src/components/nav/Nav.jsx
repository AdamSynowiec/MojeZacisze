import React from 'react'
import logo_green from '../../assets/images/logo_green.svg'
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
                        <ul className='flex items-center justify-between text-gray-800 text-md uppercase'>
                            <li>
                                <Link className='font-montserrat border-b-2 border-transparent hover:border-gray-800 transition-all'>O inwestycji</Link>
                            </li>
                            <li>
                                <Link className='font-montserrat border-b-2 border-transparent hover:border-gray-800 transition-all'>Lokalizacja</Link>
                            </li>
                            <li>
                                <Link className='font-montserrat border-b-2 border-transparent hover:border-gray-800 transition-all'>Wizualizacje</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 h-full">
                        <img src={logo_green} className="h-full mx-auto p-4" alt="" />
                    </div>
                    <div className="hidden xl:block flex-1">
                        <ul className='flex items-center justify-between text-gray-800 text-md uppercase'>
                            <li>
                                <Link className='font-montserrat border-b-2 border-transparent hover:border-gray-800 transition-all'>Lokale</Link>
                            </li>
                            <li>
                                <Link className='font-montserrat border-b-2 border-transparent hover:border-gray-800 transition-all'>Kontakt</Link>
                            </li>
                            <li>
                                <Link className='font-montserrat border-2 border-mainColor p-2 bg-mainColor transition-all text-white'>(+48) 000 - 000 - 000</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="block xl:hidden">
                        <ul>
                            <li>
                                <button className='w-12 h-12'>
                                    <svg className="w-full h-full text-zinc-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="1" d="M5 7h14M5 12h14M5 17h14" />
                                    </svg>

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
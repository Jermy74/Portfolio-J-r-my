import { useState } from 'react';
import LouhansCuiseaux from './Professionnel/LouhansCuiseaux';
import PôleEspoirs from './Professionnel/PôleEspoirs';
import Éducateur from './Professionnel/Éducateur';



export default function Apropos() {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };
    return (
        <div className="flex flex-col gap-15 lg:gap-30 h-screen pt-2">
            <div className="flex flex-col gap-5 pl-20 lg:items-center">
                <h1 className="text-3xl lg:text-5xl">À propos de moi</h1>
                <div className="w-20 lg:w-30 h-1 bg-current rounded-xl"></div>
            </div>
            <div className="flex flex-col lg:flex-row pl-5 pr-5 lg:pl-15 xl:pl-30 gap-10 lg:gap-0">
                <div className="flex flex-col xl:flex-3 gap-10">
                    <h2 className="text-2xl self-center text-center">Mes expériences <br />professionnelles</h2>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between card cursor-pointer rounded-md h-15 gap-6" onClick={() => toggleSection('Louhans')}>
                                <div className="flex gap-25 items-baseline m-5">
                                    <h2 className="text-lg lg:text-xl">Analyste Vidéo</h2>
                                    <h3 className="text-sm lg:text-md italic">Louhans-Cuiseaux FC</h3>
                                </div>
                                <h2 className="m-5 text-sm lg:text-md">2023-2025</h2>
                            </div>
                            <div className='flex mt-2 gap-10'>
                                {activeSection === 'Louhans' && <LouhansCuiseaux />}
                                <div className={`bg-current ml-auto mr-13 self-end ${activeSection === 'Louhans' ? 'w-3 md:w-2 h-full' : 'w-0.5 h-5'}`}></div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between card cursor-pointer rounded-md h-15" onClick={() => toggleSection('Pôle')}>
                                <div className="flex gap-25 items-baseline m-5">
                                    <h2 className="text-lg lg:text-xl">Analyste Vidéo</h2>
                                    <h3 className="text-sm lg:text-md italic">Pôle Espoirs Dijon</h3>
                                </div>
                                <h2 className="m-5 text-sm lg:text-md">2021-2023</h2>
                            </div>
                            <div className='flex mt-2 gap-10'>
                                {activeSection === 'Pôle' && <PôleEspoirs />}
                                <div className={`bg-current ml-auto mr-13 self-end ${activeSection === 'Pôle' ? 'w-3 md:w-2 h-full' : 'w-0.5 h-5'}`}></div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between card cursor-pointer rounded-md h-15" onClick={() => toggleSection('Educateur')}>
                                <div className="flex gap-25 items-baseline m-5">
                                    <h2 className="text-lg lg:text-xl">Éducateur Sportif</h2>
                                    <h3 className="text-sm lg:text-md italic">AS Quetigny</h3>
                                </div>
                                <h2 className="m-5 text-sm lg:text-md">2018-2022</h2>
                            </div>
                            {activeSection === 'Educateur' && (
                                <div className='flex mt-2 gap-10'>
                                    <Éducateur />
                                    <div className="w-2 bg-current ml-auto mr-13"></div>
                                </div>)}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col xl:flex-2 pl-30 pr-30 lg:gap-10">
                    <h2 className="text-2xl self-center">Skills</h2>
                    <div className='flex flex-col gap-10 mt-15 items-center'>
                        <div className='flex gap-20 lg:gap-10'>
                            <img className='size-20' src="src/assets/Python.png" alt="python" />
                            <img className='w-25 h-20' src="src/assets/Mysql.png" alt="mysql" />
                        </div>
                        <div className='flex gap-15'>
                            <img className='w-30' src="src/assets/Html.png" alt="html" />
                            <img className='w-30' src="src/assets/React.png" alt="react" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
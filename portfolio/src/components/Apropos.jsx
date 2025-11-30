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
        <div className="flex flex-col gap-30 h-screen pt-2">
            <div className="flex flex-col gap-5 items-center">
                <h1 className="text-5xl">À propos de moi</h1>
                <div className="w-30 h-1 bg-current rounded-xl"></div>
            </div>
            <div className="flex pl-30">
                <div className="flex flex-col flex-3 gap-10">
                    <h2 className="text-2xl self-center text-center">Mes expériences <br />professionnelles</h2>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between card cursor-pointer rounded-md h-15 gap-6" onClick={() => toggleSection('Louhans')}>
                                <div className="flex gap-25 items-baseline m-5">
                                    <h2 className="text-xl">Analyste Vidéo</h2>
                                    <h3 className="text-md italic">Louhans-Cuiseaux FC</h3>
                                </div>
                                <h2 className="m-5">2023-2025</h2>
                            </div>
                            <div className='flex mt-2 gap-10'>
                                {activeSection === 'Louhans' && <LouhansCuiseaux />}
                                <div className={`bg-current mr-14 ${activeSection === 'Louhans' ? 'w-2' : 'w-0.5 h-5 ml-211'}`}></div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between card cursor-pointer rounded-md h-15" onClick={() => toggleSection('Pôle')}>
                                <div className="flex gap-25 items-baseline m-5">
                                    <h2 className="text-xl">Analyste Vidéo</h2>
                                    <h3 className="text-md italic">Pôle Espoirs Dijon</h3>
                                </div>
                                <h2 className="m-5">2021-2023</h2>
                            </div>
                            <div className='flex mt-2 gap-10'>
                                {activeSection === 'Pôle' && <PôleEspoirs />}
                                <div className={`bg-current mr-14 ${activeSection === 'Pôle' ? 'w-2' : 'w-0.5 h-5 ml-211'}`}></div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between card cursor-pointer rounded-md h-15" onClick={() => toggleSection('Educateur')}>
                                <div className="flex gap-25 items-baseline m-5">
                                    <h2 className="text-xl">Éducateur Sportif</h2>
                                    <h3 className="text-md italic">AS Quetigny</h3>
                                </div>
                                <h2 className="m-5">2018-2022</h2>
                            </div>
                            {activeSection === 'Educateur' && (
                                <div className='flex mt-2 gap-10'>
                                    <Éducateur />
                                    <div className="w-2 bg-current mr-14"></div>
                                </div>)}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-2 pl-30 pr-30 gap-10">
                    <h2 className="text-2xl self-center">Skills</h2>
                    <div className='flex flex-col gap-10 mt-15 items-center'>
                        <div className='flex gap-10'>
                            <img className='size-20' src="src/assets/Python.png" alt="python" />
                            <img className='w-25 h-20' src="src/assets/Mysql.png" alt="mysql" />
                        </div>
                        <div className='flex'>
                            <img className='w-30' src="src/assets/Html.png" alt="html" />
                            <img className='w-30' src="src/assets/React.png" alt="react" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
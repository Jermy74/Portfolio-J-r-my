import { useState } from "react"
import projets from "../Projet.json"
import ProjetDétaillé from "./Modal/ProjetsDétaillé";

export default function Projets() {
    const [clickProjet, setClickProjet] = useState(null);

    const openProjet = (projet) => {
        setClickProjet(projet);
    }
    const closeProjet = () => {
        setClickProjet(null)
    }
    return (
        <section id="projets" className="flex flex-col gap-15 pb-10 lg:gap-30 min-h-screen pt-2">
            <div className="flex flex-col gap-5 pl-20 lg:pl-0 lg:items-center">
                <h1 className="text-3xl lg:text-5xl">Mes projets</h1>
                <div className="w-20 lg:w-30 h-1 bg-current rounded-xl"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 md:px-20 lg:px-40" >
                {projets.map((projet) => (
                    <div className="flex flex-col gap-3 card rounded-lg p-6 cursor-pointer transform transition duration-200 hover:scale-105" key={projet.id} onClick={() => openProjet(projet)}>
                        <div>
                            <h2>{projet.name}</h2>
                        </div>
                        <div className="w-auto flex items-center rounded-md ">
                            <span>Image</span>
                        </div>
                        <div>
                            <h3>{projet.description}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 ">
                            {projet.techno.map((technologie, index) => (
                                <span key={index} className="px-2 py-1 rounded-full bg-brown4 text-brown2 text-sm">{technologie}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <ProjetDétaillé projet={clickProjet} onClose={closeProjet} />
        </section >
    )
}
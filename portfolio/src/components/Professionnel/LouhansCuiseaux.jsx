
export default function LouhansCuiseaux() {
    return (
        <div className="rounded-md card p-1">
            <div className="flex justify-between ml-5 mb-5 mt-5">
                <div className="flex flex-col gap-2 flex-5">
                    <p>En charge de l'analyse vidéo, j'avais pour mission d'étudier les adveraires afin de fournir à l'entraîneur des
                        rapports détaillés. J'ai également réalisé des analyses collectives et individuelles
                        visant à affiner les approches tactiques et techniques de l'équipe. Parallèlement, j'ai conçu une base de données
                        permettant de suivre l'évolution de la performance collective et individuelles.
                    </p>
                    <div className="flex">
                        <h2 className="flex-1 ">Nacsport</h2>
                        <h2 className="flex-1">Metrica</h2>
                        <h2 className="flex-1">Once</h2>
                        <h2 className="flex-1">Veo</h2>
                    </div>
                </div>
                <div className=" flex flex-1 justify-center items-center">
                    <img className="size-25" src="src/assets/Logo_Louhans.png" alt="Louhans" />
                </div>
            </div>
        </div>
    )
}
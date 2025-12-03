
export default function PôleEspoirs() {
    return (
        <div className="rounded-md card p-1">
            <div className="flex justify-between ml-5 mb-5 mt-5">
                <div className="flex flex-col gap-2 flex-5">
                    <p>En qualité d'analyste vidéo, j'étais responsable de la conception et la production
                        de rapports statistiques dynamiques destinés à l'entraîneur et aux joueurs. 
                        Élaboration de base de données en rapport avec la performance collective et individuelle.
                        Développement d'outils de codification et d'analyse spécifique sur SportsCode.
                    </p>
                    <div className="flex">
                        <h2 className="flex-1">SportsCode</h2>
                        <h2 className="flex-1">Power BI</h2>
                        <h2 className="flex-1">Python</h2>
                    </div>
                </div>
                <div className=" flex flex-1 justify-center items-center">
                    <img className="w-35 pr-2" src="/assets/logolbfc.png" alt="Pôle" />
                </div>
            </div>
        </div>
    )
}
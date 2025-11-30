

export default function Accueil({ isDark, toggleTheme }) {
    return (
        <div className="h-screen">
            <div className="flex flex-col place-items-center gap-15 lg:gap-20">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-center">Bienvenue,</h1>
                <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-20 ">
                    <div className="flex flex-col flex-1 place-items-center gap-6 lg:gap-18">
                        <div className="flex flex-col items-center gap-3">
                            <h2 className="text-xl lg:text-2xl text-center">Je suis Jérémy Lugand</h2>
                            <div className="w-25 h-0.5 bg-current rounded-xl"></div>
                        </div>
                        <p className="text-center text-base lg:text-lg">Ancien Analyste Vidéo dans le sport en reconversion dans l'informatique.</p>
                    </div>
                    <div className="flex items-center gap-10 md:gap-20">
                        <span className="text-7xl pb-50 lg:hidden">{"<"}</span>
                        <img className="flex-1 rounded-full object-cover size-100 lg:size-125 xl:size-150" src="/src/assets/photo.jpg" alt="Photo" />
                        <span className="text-7xl pt-50 lg:hidden">{"/>"}</span>
                    </div>
                    <button onClick = {() => {
                        const linkcv = document.createElement("a");
                        linkcv.href = "/CVJérémy.pdf";
                        linkcv.download = "CV_Jérémy_Lugand.pdf";
                        document.body.appendChild(linkcv);
                        linkcv.click();
                        document.body.removeChild(linkcv);
                    }}
                    className="flex-1 w-100 lg:w-auto cursor-pointer rounded-2xl text-lg lg:text-xl hover:scale-98 px-6 py-3">Télécharger mon CV</button>
                </div>
            </div>
        </div>
    )
}
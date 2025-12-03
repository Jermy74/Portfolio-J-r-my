

export default function Accueil({ isDark, toggleTheme }) {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col place-items-center gap-10 lg:gap-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-center">Bienvenue,</h1>
                <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-20 ">
                    <div className="flex flex-col flex-1 place-items-center gap-6 px:3 lg:gap-18">
                        <div className="flex flex-col items-center gap-3">
                            <h2 className="text-xl lg:text-2xl text-center">Je suis Jérémy Lugand</h2>
                            <div className="w-25 h-0.5 bg-current rounded-xl"></div>
                        </div>
                        <p className="text-center text-base lg:text-lg">Ancien Analyste Vidéo dans le sport en reconversion dans l'informatique.</p>
                    </div>
                    <div className="flex items-center gap-10 md:gap-20">
                        <span className="text-7xl pb-50 lg:hidden">{"<"}</span>
                        <img className="flex-1 rounded-full object-cover size-100 lg:size-125 xl:size-150" src="/assets/photo.jpg" alt="Photo" />
                        <span className="text-7xl pt-50 lg:hidden">{"/>"}</span>
                    </div>
                    <div className="flex-1 flex justify-center px-3">
                        <button
                            onClick={() => {
                                const linkcv = document.createElement("a");
                                linkcv.href = "/CVJérémy.pdf";
                                linkcv.download = "CV_Jérémy_Lugand.pdf";
                                document.body.appendChild(linkcv);
                                linkcv.click();
                                document.body.removeChild(linkcv);
                            }}
                            className="group relative w-100 lg:w-auto cursor-pointer rounded-2xl text-lg lg:text-xl px-6 py-4 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></span>


                            <svg className="w-6 h-6 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            <span className="relative font-semibold">Télécharger mon CV</span>


                        </button>
                    </div>
                </div>
                <div className="flex flex-col border rounded-4xl pt-2 pb-1">
                    <svg className='animate-pulse' style={{ animationDuration: '1s', animationDelay: '0s' }} xmlns="http://www.w3.org/2000/svg" width="30" height="13" viewBox="2 10 20 4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    <svg className='animate-pulse' style={{ animationDuration: '1s', animationDelay: '0.2s' }} xmlns="http://www.w3.org/2000/svg" width="30" height="13" viewBox="2 10 20 4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m6 9 6 6 6-6" /></svg>
                    <svg className='animate-pulse' style={{ animationDuration: '1s', animationDelay: '0.4s' }} xmlns="http://www.w3.org/2000/svg" width="30" height="13" viewBox="2 10 20 4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m6 9 6 6 6-6" /></svg>
                </div>
            </div>
        </div>
    )
}
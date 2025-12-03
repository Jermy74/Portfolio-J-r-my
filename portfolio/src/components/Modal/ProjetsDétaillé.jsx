export default function ProjetDétaillé({ projet, onClose, isDark }) {
    if (!projet) return null;
    return (
        <div className="inset-0 fixed flex bg-black items-center justify-center z-50 py-20 px-10" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} onClick={onClose}>
            <div className="card rounded-lg p-6 w-full xl:w-5xl h-fit" onClick={(e) => e.stopPropagation()}>
                <button className="float-right rounded-sm cursor-pointer mb-5" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
                <div className="flex w-full items-center justify-center">
                    <img className="rounded-xl" src={projet.image1} alt="image" />
                </div>
                <div className="flex mt-4">
                    <h2 className="text-xl lg:text-2xl">{projet.name}</h2>
                </div>
                <p className="mt-6">{projet.descriptiond}</p>
                <div className="flex justify-center">
                    <a href={projet.code} target="_blank" className={`w-fit mt-5 px-3 py-2 text-center rounded-2xl shadow-lg/50 hover:cursor-pointer hover:scale-105 ${isDark ? 'bg-brown4 text-brown1' : 'text-lightbrown1 bg-lightbrown4'}`}>Voir le code</a>
                </div>
                <div className="flex flex-wrap gap-10 mt-5">{projet.techno.map((technologie, index) => (
                    <span className="bg-brown4 text-brown2 rounded-full px-2 py-1 shadow-md/20">
                        {technologie}
                    </span>
                ))}
                </div>
            </div>
        </div>
    )
}
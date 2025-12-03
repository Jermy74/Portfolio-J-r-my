import { Sun, Moon } from 'lucide-react';



export default function Header({ isDark, toggleTheme }) {
    const scrollSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section){
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    }
    return (
        <nav className='relative'>
            <div className="flex items-center justify-between pr-5">
                <img className="size-25" src="src/assets/logo.png" alt="Logo portfolio" />
                <div className="flex items-center gap-8">
                    <div className='flex justify-center w-30'>
                        <h2 className='transition-all duration-100 cursor-pointer hover:text-lg lg:hover:text-xl' onClick={() => scrollSection("apropos")}>À propos</h2>
                    </div>
                    <h2>/</h2>
                    <div className='flex justify-center w-30'>
                        <h2 className='transition-all duration-100 cursor-pointer hover:text-lg lg:hover:text-xl' onClick={() => scrollSection("projets")}>Projets</h2>
                    </div>
                    <h2>/</h2>
                    <div className='flex justify-center w-30'>
                        <h2 className='transition-all duration-100 cursor-pointer hover:text-lg lg:hover:text-xl'>Contact</h2>
                    </div>
                    <h2>/</h2>
                    <button
                        onClick={toggleTheme}
                        className={`cursor-pointer relative w-11 h-6 rounded-full transition-colors duration-300 focus:outline-none ${isDark ? 'bg-brown4' : 'bg-lightbrown4'}`}>
                        <div className={`absolute top-[2px] start-[2px] bg-white rounded-full h-5 w-5 transition-transform duration-300 flex items-center justify-center ${isDark ? 'translate-x-full' : 'translate-x-0'}`}>
                            {isDark ? (<Moon className="size-4 text-brown3" />) : (<Sun className="size-4 text-lightbrown3" />)}
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    )
}
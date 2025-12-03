import { useState } from "react";
import emailjs from '@emailjs/browser'

export default function Email({ isOpen, onClose }) {
    const [data, setData] = useState({
        name: '',
        email: '',
        sujet: '',
        message: ''
    })
    const [isSubmit, setIsSubmit] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmit(true);
        setSubmitStatus(null);

        try {
            await emailjs.send(
                'service_6yf32e3',
                'template_z2tas2s',
                {
                    from_name: data.name,
                    from_email: data.email,
                    sujet: data.sujet,
                    message: data.message,
                },
                'qN9LNeBsapj8m3URv'
            );

            setSubmitStatus('Réussis');
            setData({ name: '', email: '', sujet: '', message: '' });
            setTimeout(() => {
                onClose();
                setSubmitStatus(null);
            }, 3000);
        } catch (error) {
            console.error('Erreur:', error);
            setSubmitStatus('Erreur');
        } finally {
            setIsSubmit(false);
        }
    }

    if (!isOpen) return null;

    return (
        <div className="inset-0 z-60 fixed flex justify-center items-center border bg-black" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} onClick={onClose}>
            <div className="card rounded-lg p-6 h-180 w-100 md:w-150 lg:w-200" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-5">
                    <h2 className="text-xl lg:text-2xl">Me contacter</h2>
                    <button className="hover:opacity-80 hover:cursor-pointer" style={{background: 'transparent'}} onClick={onClose}>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name" className="font-semibold">
                                Nom:
                            </label>
                            <input type="text" id="name" name="name" value={data.name} onChange={handleInputChange} required
                                className="pl-2 border" />
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="font-semibold">
                                Email:
                            </label>
                            <input type="email" name="email" id="email" value={data.email} onChange={handleInputChange} required
                                className="pl-2 border" />
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="sujet" className="font-semibold">
                                Sujet:
                            </label>
                            <input type="sujet" name="sujet" id="sujet" value={data.sujet} onChange={handleInputChange} required
                                className="pl-2 border" />
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="message" className="font-semibold">
                                Message:
                            </label>
                            <textarea type="message" name="message" id="message" value={data.message} onChange={handleInputChange} required
                                className="px-2 border" rows={10}/>
                        </div>
                    </div>
                    <button type="submit" disabled={isSubmit} className="rounded h-15 font-semibold hover:cursor-pointer">
                        Envoyer
                    </button>
                </form>
            </div>
        </div>
    )
}
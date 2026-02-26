import { useState, useEffect } from 'react'
import { PhoneCallIcon } from 'lucide-react'

export default function ButtonWa() {

    const [isMobileWindow, SetIsMobileWindow] = useState(false);
    useEffect(() => {
        const handleWa = () => {
            if (window.innerWidth <= 768) {
                SetIsMobileWindow(true);
            } else {
                SetIsMobileWindow(false);
            }
        }
        window.addEventListener('resize', handleWa);
        handleWa();
        return () => window.removeEventListener('resize', handleWa);
    }, []);

    return (
        <>
            {isMobileWindow && (
                <div className="fixed bottom-4 left-4 z-10 animate-fadeIn" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                    <button onClick={() => window.open('https://wa.me/628123456789', '_blank')} className="rounded-3xl p-5 sm:p-10 md:p-16 hover:border-cyan-400/40 transition-colors duration-500 bg-gradient-to-br from-cyan-400 to-blue-500">
                        <PhoneCallIcon className="w-4 h-4 md:w-6 md:h-6" />
                    </button>
                </div>
            )}
        </>
    )
}
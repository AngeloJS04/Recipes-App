
const Modal = ({ setActive, children, title, bg }: { setActive: Function, children: React.ReactNode, title: string, bg: string }) => {

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) setActive(false)
    };

    return (
        <div style={{ backgroundColor: 'rgba(0,0,0,0.7)' }} className="fixed inset-0 flex items-center justify-center  z-50" onClick={handleOverlayClick}
        >
            <div
                className={`${bg} rounded shadow-lg modal-responsive`}>
                <div>
                    <h2 className="text-2xl p-2 px-4 text-white font-bold mb-4">{title}</h2>
                    <button
                        onClick={() => setActive(false)}
                        className="absolute top-1 right-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white bg-red-600 rounded-full absolute top-10 right-12 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setActive(false)}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal
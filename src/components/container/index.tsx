
const Container = ({ children, title }: { children: React.ReactNode, title: string }) => {
    return (
        <div className='flex justify-center flex-col'>
            <div className=''>
                <h2 className="text-4xl text-center font-bold tracking-tight text-dark sm:text-6xl">{title}</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 mx-5 gap-5 mt-10'>
                {children}
            </div>
        </div>
    )
}

export default Container
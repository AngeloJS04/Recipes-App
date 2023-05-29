
const Container = ({ children, title }: { children: React.ReactNode, title: string }) => {
    return (
        <div className='flex justify-center flex-col my-10'>
            <div>
                <h2 className="text-4xl text-center font-bold tracking-tight text-white sm:text-6xl"><em>{title}</em></h2>
            </div>
            <div >
                {children}
            </div>
        </div>
    )
}

export default Container

import wave from '../../assets/pattern.svg'

const Header = () => {
    const stats = [
        { name: 'Categories', value: '14' },
        { name: 'Meals', value: '300+' },
        { name: 'Ingredients', value: '500+' },
    ]
    return (
        <div className="isolate  py-24 sm:py-32" style={{ height: '100vh' }}>
           
            <img
                src="https://images.unsplash.com/photo-1604328471151-b52226907017?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
                alt=""
                style={{ opacity: 0.7 }}
                className="absolute inset-0 -z-10 h-full w-full object-cover  md:object-center"
            />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-5xl font-bold tracking-tight text-dark sm:text-6xl">Make Your Favorite Meal</h2>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-3 md:grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-dark sm:grid-cols-2 md:flex lg:gap-x-10">
                        {stats.map((stat) => (
                            <div key={stat.name} className="flex flex-col-reverse">
                                <em className="text-base leading-7 text-white">{stat.name}</em>
                                <em className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</em>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='m' style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
                <img src={wave} alt="background" />
            </div>
        </div>
    )
}
export default Header
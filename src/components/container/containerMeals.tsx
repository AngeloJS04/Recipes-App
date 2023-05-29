import React from 'react'
import { MealsDetailsProps } from '../../interface/categories.interface'
import { useParams } from 'react-router-dom'

const ContainerMeals = ({ children, data }: { children: React.ReactNode, data: MealsDetailsProps[] }) => {
    const { id } = useParams()
    return (
        <div className="isolate my-10">
            <img
                src={data[0].strMealThumb}
                style={{ opacity: 0.8 }}
                className="absolute inset-0 blur-sm -z-10 h-full w-full object-cover  md:object-center" />
            <h2 className='text-4xl text-center font-bold tracking-tight text-white sm:text-6xl mt-10'><em>{id}'s meals</em></h2>
            <hr className='mx-20 my-4 border border-white' />
            <div className='grid grid-cols-2 md:grid-cols-6 mx-5 gap-5 mt-10'>
                {children}
            </div>
        </div >
    )
}

export default ContainerMeals
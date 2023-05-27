import { DateModified } from '../../interface/categories.interface'

const MealCard = ({ meal, mealSelected }: { meal: DateModified, mealSelected: Function }) => {
    return (
        <div key={meal?.idMeal}
            onClick={() => mealSelected(meal)}
            className='flex flex-col cursor-pointer bg-white/60 hover:bg-white/75 rounded-3xl transition-transform duration-300 transform hover:scale-105
            shadow-[0px_0px_12px_3px_rgba(0,0,0,0.1)] border border-gray-100 p-3 items-center justify-center'>

            <img className='w-60 rounded-full' src={meal?.strMealThumb} alt={meal?.strMeal} />
            <p className='text-base font-semibold  tracking-tight text-dark sm:text-1xl'>{meal?.strMeal}</p>

            <button
                className='bg-red-600 hover:bg-red-900 text-white font-bold py-0 px-1 rounded mt-2'>
                See recipe
            </button>
        </div>
    )
}

export default MealCard
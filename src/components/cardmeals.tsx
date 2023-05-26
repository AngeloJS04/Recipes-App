import { useState } from "react"
import Modal from "./modal"
import MealsRecipe from "./mealReceipe"


const CardMeals = ({ data, id }: { id: string | undefined, data: any }) => {
    const [active, setActive] = useState(false)
    const [meal, setMeal] = useState<any>({})

    const mealSelected = (meal: any) => {
        setActive(!active)
        setMeal(meal)
        console.log(meal)
    }

    return (
        <>
            <div className="isolate">
                <img
                    src={data?.meals[4]?.strMealThumb ? data?.meals[4]?.strMealThumb : data.meals[0]?.strMealThumb}
                    style={{ opacity: 0.8 }}
                    className="absolute inset-0 blur-sm -z-10 h-full w-full object-cover  md:object-center" />
                <h2 className='text-4xl text-center font-bold tracking-tight text-white sm:text-6xl mt-10'>{id}'s meals</h2>
                <hr className='mx-20 my-4 border border-white' />
                <div className='grid grid-cols-1 md:grid-cols-6 mx-5 gap-5 mt-10'>
                    {
                        data.meals.map((meal: any) => (
                            <div key={meal?.idMeal}
                                onClick={() => mealSelected(meal)}
                                className='flex flex-col cursor-pointer bg-white/60 hover:bg-white/75  rounded-3xl transition-transform duration-300 transform hover:scale-105
                        shadow-[0px_0px_12px_3px_rgba(0,0,0,0.1)]  border border-gray-100 p-3 items-center justify-center'>
                                <img className='w-60 rounded-full' src={meal?.strMealThumb} alt={meal?.strMeal} />
                                <p className='text-base font-semibold  tracking-tight text-dark sm:text-1xl'>{meal?.strMeal}</p>
                                <button>See details</button>
                            </div>
                        ))
                    }
                </div>
            </div >
            {active && <Modal bg="bg-gray-900" title={`${meal?.strMeal}`} setActive={setActive} >
                <MealsRecipe meal={meal} />
            </Modal>
            }
        </>
    )
}

export default CardMeals
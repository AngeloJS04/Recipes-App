import { MealsDetailsProps } from '../../interface/categories.interface'

const MealDescription = ({ meal }: { meal: MealsDetailsProps }) => {
    return (
        <div className="col-span-12 md:col-span-4 m-3">
            <div>
                <span className="text-2xl mb-5  font-bold text-white p-1 rounded-lg">Description</span>
            </div>
            <span className="text-sm  text-center  text-white sm:text-sm"><em>{meal.strInstructions}</em></span>
            <div className=" mt-2">


            </div>
        </div>
    )
}

export default MealDescription
import MealFrom from "./area";
import Stars from "./start";
import { useState } from "react"
import VideoMeal from "./video";
import MealIngredients from "./ingredients";
import { MealsDetailsProps } from "../../interface/categories.interface";
import MealDescription from "./description";

const MealsRecipe = ({ meal }: { meal: MealsDetailsProps }) => {
    const [showVideo, setShowVideo] = useState(false)
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-12 py-8'>
            <div className="col-span-12 md:col-span-4 bg-yellow-200 rounded-r-3xl mr-10 p-5">
                <img className='w-80 rounded-full border border-gray-400 p-3 items-center justify-center' src={meal?.strMealThumb} alt={meal?.strMeal} />
                <div className="flex flex-col items-end">
                    <MealFrom meal={meal} />
                    <Stars />
                </div>
            </div>
            {
                showVideo ? <VideoMeal meal={meal} setShowVideo={setShowVideo} showVideo={showVideo} /> :
                    <>
                        <MealDescription meal={meal} />
                        <MealIngredients meal={meal} setShowVideo={setShowVideo} />
                    </>
            }
        </div>
    )
}
export default MealsRecipe